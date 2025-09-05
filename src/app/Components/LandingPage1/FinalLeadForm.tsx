'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Pincode } from './Pincode';

interface CalculatorData {
  bhkType?: string;
  rooms?: Record<string, number>;
  wardrobe?: {
    type?: string;
    height?: string;
    measurements?: {
      width?: number;
      height?: number;
      depth?: number;
    };
  };
  kitchen?: {
    layout?: string;
    size?: string;
    units?: string[];
  };
  collections?: {
    selections?: string[];
  };
  material?: {
    type?: string;
    finish?: string;
  };
}

type FinalLeadFormProps = { calculatorData?: CalculatorData };

const FinalLeadForm: React.FC<FinalLeadFormProps> = ({ calculatorData }) => {
  const router = useRouter();

  const [selectedPincode, setSelectedPincode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const performSubmitFlow = async () => {

    if (!formData.name || !formData.email || !formData.phone || !selectedPincode) {
      return;
    }
    await handleFinalSubmit();
  };

  const handleFinalSubmit = async () => {
    setIsSubmitting(true);
    try {
      const currentUrl = window.location.href;
      const c = calculatorData || {};
      console.log('[FinalLeadForm] Received calculatorData:', c);
      const requestData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        pincode: selectedPincode,
        pageUrl: currentUrl,
        verificationStatus: 'No OTP',
        // Include calculator data both nested and flattened for backend email processing
        calculator: c,
        bhkType: c.bhkType ?? '',
        rooms: c.rooms ? JSON.stringify(c.rooms) : '',
        wardrobe: c.wardrobe ? JSON.stringify(c.wardrobe) : '',
        kitchen: c.kitchen ? JSON.stringify(c.kitchen) : '',
        collections: c.collections ? JSON.stringify(c.collections) : '',
        material: c.material ? JSON.stringify(c.material) : '',
      };
      console.log('[FinalLeadForm] Submitting payload to /api/contact:', requestData);
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000);
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(requestData), signal: controller.signal });
      clearTimeout(timeoutId);
      const data = await res.json();
      console.log('[FinalLeadForm] API status:', res.status, 'response:', data);
      if (res.ok && data.success) {
        setSelectedPincode('');
        setFormData({ name: '', email: '', phone: '' });
        router.push('/Form-Submit-Thank-You');
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const handler = () => { performSubmitFlow(); };
    window.addEventListener('calculator:submit-final', handler);
    return () => { window.removeEventListener('calculator:submit-final', handler); };
  }, [formData, selectedPincode]);

  return (
    <div>
      <div className="bg-white w-full rounded-3xl shadow-2xl p-4 sm:p-6">
        <div className="text-2xl sm:text-3xl manrope-semibold text-center mb-6 text-amber-950">Interiors For Every Budget</div>

        {/* Stacked inputs, one after another */}
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name *"
            required
            className="w-full h-[50px] bg-[#f1f2f6] rounded-3xl text-base sm:text-lg pl-6 placeholder-gray-400 font-medium"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email *"
            required
            className="w-full h-[50px] bg-[#f2f2f6] rounded-3xl text-base sm:text-lg pl-6 placeholder-gray-400 font-medium"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone Number *"
            required
            className="w-full h-[50px] bg-[#f2f2f6] rounded-3xl text-base sm:text-lg pl-6 placeholder-gray-400 font-medium"
          />
          <div className="relative w-full">
            <select
              name="pincode"
              required
              value={selectedPincode}
              onChange={e => setSelectedPincode(e.target.value)}
              className="w-full h-[50px] font-medium bg-[#f1f2f6] rounded-3xl text-base sm:text-[18px] pl-6 pr-10 text-gray-400 appearance-none cursor-pointer"
            >
              <option className="text-gray-400" value="" disabled>Property Pincode *</option>
              {Pincode.map((pin, idx) => (<option key={idx} value={pin}>{pin}</option>))}
            </select>
            <span className="text-gray-500 mt-3 -ml-6 text-[18px] absolute">&#9662;</span>
          </div>
        </div>

        {/* Status row (no submit or WhatsApp checkbox) */}
        <div className="flex items-center justify-end mt-6">
          <div className="text-sm text-gray-500">{isSubmitting ? 'Submitting...' : ''}</div>
        </div>

        <div className="text-xs mt-4 font-medium text-center">
          By Submitting This Form, You Agree To The <span className="text-[#DDCDC1]">Privacy Policy</span> & <span className="text-[#DDCDC1]">Terms & Conditions</span>
        </div>
      </div>
    </div>
  );
};

export default FinalLeadForm;
