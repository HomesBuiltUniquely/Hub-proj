"use client"
import React, { useState } from "react";

const EstimateForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    pincode: '',
    tellUsMore: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/get-estimate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phoneNumber: '', pincode: '', tellUsMore: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-transparent backdrop-blur-sm rounded-2xl p-6 shadow-2xl max-w-md mx-auto  ">
      <h2 className="text-xl font-bold text-gray-800 mb-4 text-center text-white">
        Get Your Free Estimate
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Name and Pincode side by side */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="name" className="block text-sm manrope-medium text-white mb-1">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 text-black bg-white"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label htmlFor="pincode" className="block text-sm manrope-medium text-white mb-1">
              Pincode *
            </label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 text-black bg-white"
              placeholder="Enter your pincode"
            />
          </div>
        </div>

        {/* Email and Phone Number side by side */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="email" className="block text-sm manrope-medium text-gray-700 mb-1 text-white">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 text-black bg-white"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-sm manrope-medium text-gray-700 mb-1 text-white">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 text-black bg-white"
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        <div>
          <label htmlFor="tellUsMore" className="block text-sm manrope-medium text-white mb-1">
            Tell Us More
          </label>
          <textarea
            id="tellUsMore"
            name="tellUsMore"
            value={formData.tellUsMore}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 resize-none text-black bg-white"
            placeholder="Tell us more about your project..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-red-500 hover:bg-red-600 disabled:bg-red-300 text-white manrope py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>

        {submitStatus === 'success' && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
            Thank you! We'll get back to you soon with your estimate.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
            Something went wrong. Please try again.
          </div>
        )}
      </form>
    </div>
  );
};

export default EstimateForm;
