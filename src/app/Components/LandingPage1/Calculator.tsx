'use client';


import React, { useState } from 'react';
import FinalLeadForm from './FinalLeadForm';
import Link from 'next/link';


// --- Helper Components ---


const ProgressBar: React.FC<{ steps: string[]; currentStep: number }> = ({ steps, currentStep }) => {
  return (
    <>
      {/* Laptop/Desktop Progress Bar */}
      <div className="hidden lg:flex items-center justify-between w-full max-w-4xl mx-auto mb-12">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-col items-center text-center w-20">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                currentStep >= index ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-500'
              }`}
            >
              {currentStep > index ? '✓' : index + 1}
            </div>
            <p className={`mt-2 text-xs font-semibold transition-all duration-300 ${currentStep >= index ? 'text-gray-800' : 'text-gray-400'}`}>
              {step}
            </p>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`flex-1 h-1 mx-2 transition-all duration-300 ${
                currentStep > index ? 'bg-red-500' : 'bg-gray-200'
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>

      {/* Mobile Progress Bar */}
      <div className="lg:hidden mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm font-semibold text-gray-600">
            Step {currentStep + 1} of {steps.length}
          </div>
          <div className="text-sm text-gray-500">
            {Math.round(((currentStep + 1) / steps.length) * 100)}%
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-red-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          ></div>
        </div>
        <div className="mt-2 text-center">
          <p className="text-sm font-semibold text-gray-800">{steps[currentStep]}</p>
        </div>
      </div>
    </>
  );
};



// --- Form Data Interface ---
interface FormData {
  bhkType: string;
  rooms: Record<string, number>;
  wardrobe: {
    type?: string;
    height?: string;
    measurements?: {
      width?: number;
      height?: number;
      depth?: number;
    };
  };
  kitchen: {
    layout?: string;
    size?: string;
    units?: string[];
  };
  collections: {
    selections?: string[];
  };
  material: {
    type?: string;
    finish?: string;
  };
}

// --- Step Component Interfaces ---
interface StepProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}



// --- Step Components ---


const Step1BhkType: React.FC<StepProps> = ({ formData, setFormData }) => {
  const bhkOptions = ["2 BHK", "3 BHK", "4 BHK and More"];

  return (
    <div className="text-center">
      {/* Laptop/Desktop Version */}
      <div className="hidden lg:block">
      <h2 className="text-2xl font-bold text-gray-800 mb-10">Select your BHK type</h2>
      <div className="space-y-4 max-w-md mx-auto">
        {bhkOptions.map((option) => (
          <div
            key={option}
            onClick={() => setFormData({ ...formData, bhkType: option })}
              className={`p-6 border rounded-lg flex items-center cursor-pointer transition-all duration-200 hover:border-red-400 ${
              formData.bhkType === option
                ? 'border-red-500 ring-2 ring-red-200 bg-red-50'
                  : 'border-gray-300'
              }`}
            >
              <div
                className={`w-6 h-6 border-2 rounded-full mr-4 flex items-center justify-center ${
                  formData.bhkType === option ? 'border-red-500 bg-red-500' : 'border-gray-400'
                }`}
              >
                {formData.bhkType === option && <div className="w-3 h-3 bg-white rounded-full"></div>}
              </div>
              <span className="font-semibold text-gray-700 text-lg">{option}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Version */}
      <div className="lg:hidden">
        <h2 className="text-xl font-bold text-gray-800 mb-6 px-4">Select your BHK type</h2>
        <div className="space-y-3 max-w-md mx-auto px-4">
          {bhkOptions.map((option) => (
            <div
              key={option}
              onClick={() => setFormData({ ...formData, bhkType: option })}
              className={`p-4 border rounded-lg flex items-center cursor-pointer transition-all duration-200 touch-manipulation active:bg-gray-50 ${
                formData.bhkType === option
                  ? 'border-red-500 ring-2 ring-red-200 bg-red-50'
                  : 'border-gray-300'
            }`}
          >
            <div
              className={`w-5 h-5 border-2 rounded-full mr-4 flex items-center justify-center ${
                formData.bhkType === option ? 'border-red-500 bg-red-500' : 'border-gray-400'
              }`}
            >
              {formData.bhkType === option && <div className="w-2 h-2 bg-white rounded-full"></div>}
            </div>
              <span className="manrope text-gray-700 text-base">{option}</span>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};


const Step2Rooms: React.FC<StepProps> = ({ formData, setFormData }) => {
    const roomOptions = ["Living Room", "Bedroom", "Kitchen", "Dining", "Bathroom"];

    const handleCountChange = (roomName: string, delta: number) => {
        setFormData((prev: FormData) => {
            const currentCount = prev.rooms?.[roomName] || 0;
            let newCount;
            
            // Special case for Bedroom: if going from 0 to 1, start with 2
            if (roomName === "Bedroom" && currentCount === 0 && delta === 1) {
                newCount = 2;
            } else {
                // For Bedroom, minimum is 2; for Kitchen, minimum is 1; for other rooms, minimum is 0
                const minCount = roomName === "Bedroom" ? 2 : roomName === "Kitchen" ? 1 : 0;
                newCount = Math.max(minCount, currentCount + delta);
            }

            const newRooms = { ...prev.rooms };

            if (newCount > 0) {
                newRooms[roomName] = newCount;
            } else {
                delete newRooms[roomName]; // Clean up the state if count is zero
            }

            return {
                ...prev,
                rooms: newRooms,
            };
        });
    };

    return (
        <div className="text-center">
            {/* Laptop/Desktop Version */}
            <div className="hidden lg:block">
                <h2 className="text-2xl font-bold text-gray-800 mb-10">Which rooms would you like to design?</h2>
            <div className="space-y-4 max-w-md mx-auto">
                {roomOptions.map(room => {
                    const count = formData.rooms?.[room] || 0;
                    const isSelected = count > 0;
                    return (
                        <div
                            key={room}
                                className={`p-6 border rounded-lg flex items-center justify-between transition-all duration-200 ${
                                    'border-gray-300 hover:border-gray-400'
                                }`}
                            >
                                <span className={`manrope text-lg text-gray-700`}>{room}</span>
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={() => handleCountChange(room, -1)}
                                        disabled={count === 0}
                                        className="w-10 h-10 rounded-full bg-gray-200 text-gray-700 font-bold text-xl disabled:opacity-50 hover:bg-gray-300 transition-colors"
                                    >
                                        -
                                    </button>
                                    <span className="w-10 text-center font-bold text-xl text-gray-800">{count}</span>
                                    <button
                                        onClick={() => handleCountChange(room, 1)}
                                        className="w-10 h-10 rounded-full bg-red-500 text-white font-bold text-xl hover:bg-red-600 transition-colors"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Mobile Version */}
            <div className="lg:hidden">
                <h2 className="text-lg font-bold text-gray-800 mb-6 px-4">Which rooms would you like to design?</h2>
                <div className="space-y-3 max-w-md mx-auto px-4">
                    {roomOptions.map(room => {
                        const count = formData.rooms?.[room] || 0;
                        const isSelected = count > 0;
                        return (
                            <div
                                key={room}
                                className={`p-4 border rounded-lg flex items-center justify-between transition-all duration-200 touch-manipulation ${
                                'border-gray-300'
                            }`}
                        >
                                <span className={`font-semibold text-sm text-gray-700`}>{room}</span>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => handleCountChange(room, -1)}
                                    disabled={count === 0}
                                        className="w-10 h-10 rounded-full bg-gray-200 text-gray-700 font-bold text-lg disabled:opacity-50 hover:bg-gray-300 active:bg-gray-400 transition-colors touch-manipulation"
                                >
                                    -
                                </button>
                                <span className="w-8 text-center font-bold text-lg text-gray-800">{count}</span>
                                <button
                                    onClick={() => handleCountChange(room, 1)}
                                        className="w-10 h-10 rounded-full bg-red-500 text-white font-bold text-lg hover:bg-red-600 active:bg-red-700 transition-colors touch-manipulation"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    );
                })}
                </div>
            </div>
        </div>
    );
};


// --- Wardrobe Measurement Step with Carousel and Slides ---
const Step3WardrobeMeasurement: React.FC<StepProps> = ({ formData, setFormData }) => {
    const [slide, setSlide] = useState(0);


    const handleOptionClick = (name: string, value: string) => {
        setFormData((prev: FormData) => ({
            ...prev,
            wardrobe: {
                ...prev.wardrobe,
                [name]: value,
            }
        }));
    };


    const wardrobeTypes = [
        { name: "Sliding", image: "/Slide.jpg", description: "Sliding doors glide smoothly along a metal rail to save valuable floor space.",desc:"Perfect for adding style to compact or modern interior." },
        { name: "Swing", image: "/Swing.jpg",    description: "Hinged doors that open outward for clear access and improved storage visibility.",desc:"A timeless budget-friendly choices suits every home." },
    ];
    // Removed loft selection


    const renderSlide = () => {
        switch (slide) {
            case 0: // Wardrobe Type Selection
                return (
                    <div>
                        {/* Laptop/Desktop Version */}
                        <div className="hidden lg:block">
                        <h3 className="text-center text-2xl font-bold text-gray-800 mb-6">Select Wardrobe Type</h3>
                            <div className="flex gap-6 max-w-4xl mx-auto">
                            {wardrobeTypes.map(type => (
                                    <div key={type.name} className="flex-1 border rounded-lg shadow-md overflow-hidden">
                                    <img src={type.image} alt={type.name} className="w-full h-[250px] object-cover" />
                                        <div className="p-6 text-center">
                                            <h4 className="text-xl font-bold text-gray-800 mb-4">{type.name}</h4>
                                            <ul className='list-disc text-left mb-6 space-y-2'>
                                                <li className="text-gray-600 text-base">{type.description}</li>
                                                <li className="text-gray-600 text-base">{type.desc}</li>
                                        </ul>
                                        <button 
                                            onClick={() => {
                                                handleOptionClick('type', type.name);
                                                setSlide(1); // Auto-advance to next slide
                                            }} 
                                                className="w-[200px] bg-red-500 text-white font-bold h-[50px] rounded-4xl hover:bg-red-600 transition-colors"
                                        >
                                            Select
                                        </button>
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>

                        {/* Mobile Version */}
                        <div className="lg:hidden">
                            <h3 className="text-center text-lg font-bold text-gray-800 mb-4 px-4">Select Wardrobe Type</h3>
                            <div className="space-y-4 max-w-md mx-auto px-4">
                                {wardrobeTypes.map(type => (
                                    <div key={type.name} className="w-full border rounded-lg shadow-md overflow-hidden">
                                        <img src={type.image} alt={type.name} className="w-full h-[150px] object-cover" />
                                        <div className="p-4 text-center">
                                            <h4 className="text-lg font-bold text-gray-800 mb-3">{type.name}</h4>
                                            <ul className='list-disc text-left mb-4 space-y-1'>
                                                <li className="text-gray-600 text-sm">{type.description}</li>
                                                <li className="text-gray-600 text-sm">{type.desc}</li>
                                            </ul>
                                            <button 
                                                onClick={() => {
                                                    handleOptionClick('type', type.name);
                                                    setSlide(1); // Auto-advance to next slide
                                                }} 
                                                className="w-full bg-red-500 text-white font-bold h-[40px] rounded-lg hover:bg-red-600 active:bg-red-700 transition-colors touch-manipulation"
                                            >
                                                Select 
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            case 1: 
                const sizeOptions = ["6 ft", "7 ft", "8 ft", "9 ft", "10 ft"];
                return (
                    <div className="text-center">
                        {/* Laptop/Desktop Version */}
                        <div className="hidden lg:block">
                        <h3 className="text-xl font-bold text-gray-800 mb-6">Select Dimensions for {formData.wardrobe?.type} Wardrobe</h3>
                        <div className="max-w-lg mx-auto space-y-6">
                                <div>
                                    <h4 className="text-md font-semibold text-gray-700 mb-4">Height</h4>
                                    <div className="flex justify-center gap-3 flex-wrap">
                                        {sizeOptions.map(opt => (
                                            <button key={opt} onClick={() => { handleOptionClick('height', opt); }} className={`py-3 px-6 border rounded-lg font-semibold transition-colors w-[90px] ${formData.wardrobe?.height === opt ? 'bg-red-500 text-white border-red-500' : 'bg-white text-gray-700 hover:border-red-400'}`}>
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Version */}
                        <div className="lg:hidden">
                            <h3 className="text-lg font-bold text-gray-800 mb-4 px-4">Select Dimensions for {formData.wardrobe?.type} Wardrobe</h3>
                            <div className="max-w-lg mx-auto space-y-4 px-4">
                            <div>
                                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Height</h4>
                                <div className="flex justify-center gap-2 flex-wrap">
                                    {sizeOptions.map(opt => (
                                            <button key={opt} onClick={() => { handleOptionClick('height', opt); }} className={`py-2 px-3 border rounded-lg font-semibold transition-colors w-[70px] touch-manipulation ${formData.wardrobe?.height === opt ? 'bg-red-500 text-white border-red-500' : 'bg-white text-gray-700 hover:border-red-400 active:bg-gray-50'}`}>
                                            {opt}
                                        </button>
                                    ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };
    
    return (
        <div>
            {renderSlide()}
            {slide > 0 && (
                <div className="flex justify-center items-center mt-8 md:mt-12 pt-6 md:pt-8 border-t px-4">
                    <button onClick={() => setSlide(s => s - 1)} disabled={slide === 0} className="font-bold text-gray-500 hover:text-red-500 disabled:text-gray-300 mr-4 md:mr-8 text-sm md:text-base">
                        Back
                    </button>
                    <div className="flex space-x-2">
                        {[0, 1].map(s => <div key={s} className={`w-2 h-2 rounded-full ${slide === s ? 'bg-red-500' : 'bg-gray-300'}`}></div>)}
                    </div>
                    <button onClick={() => setSlide(s => Math.min(1, s + 1))} disabled={slide === 1} className="font-bold text-gray-500 hover:text-red-500 disabled:text-gray-300 ml-4 md:ml-8 text-sm md:text-base">
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};



// --- Kitchen Measurement Step with Slides ---
const Step4Kitchen: React.FC<StepProps> = ({ formData, setFormData }) => {
    const [slide, setSlide] = useState(0);


    const handleOptionClick = (name: string, value: string) => {
        setFormData((prev: FormData) => ({
            ...prev,
            kitchen: {
                ...prev.kitchen,
                [name]: value,
            }
        }));
    };
    
    const handleMultiSelectClick = (unit: string) => {
        setFormData((prev: FormData) => {
            const currentUnits = prev.kitchen?.units || [];
            const newUnits = currentUnits.includes(unit)
                ? currentUnits.filter((u: string) => u !== unit)
                : [...currentUnits, unit];
            return {
                ...prev,
                kitchen: {
                    ...prev.kitchen,
                    units: newUnits
                }
            };
        });
    };


    const kitchenLayouts = [
        { name: "L-shaped", image: "/Lshapekitchen.png" },
        { name: "Straight", image: "/straightkitchen.png" },
        { name: "U-shaped", image: "/Ukitchen.png" },
        { name: "Parallel", image: "/parallelkitchen.png" },
    ];
    const kitchenSizes = ["5*7", "6*8", "6*10","7*9","7*10","8*10","8*12","9*10","9*12","10*10","10*12","10*14","11*13","12*12","12*14","12*15","13*15","14*16","15*18"];
    const kitchenUnits = [
        { name: "Loft", image: "/LOFT.jpg" },
        { name: "Wall Units", image: "/wallunit.jpg" },
        { name: "Bottom Cabinet", image: "/bottomcabinate.jpg" },
        { name: "Tall Units / Pantry Units", image: "/tallunit.jpg" }
    ];


    const renderSlide = () => {
        switch (slide) {
            case 0: // Kitchen Layout Grid
                return (
                    <div className="text-center">
                        {/* Laptop/Desktop Version */}
                        <div className="hidden lg:block">
                        <h2 className="text-2xl font-bold text-gray-800">Select the layout of your kitchen</h2>
                        <p className="text-sm text-gray-500 my-2">
                            Want to know more. <a href="#" className="text-red-500 font-semibold">Check here</a>
                        </p>
                        <div className="grid grid-cols-2 gap-6 max-w-lg mx-auto mt-8">
                            {kitchenLayouts.map(layout => {
                                const isSelected = formData.kitchen?.layout === layout.name;
                                return (
                                    <div 
                                        key={layout.name} 
                                        onClick={() => {
                                            handleOptionClick('layout', layout.name);
                                            setSlide(1); // Auto-advance
                                        }}
                                            className={`relative p-6 border-2 rounded-lg cursor-pointer transition-all ${ 
                                            isSelected ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50 hover:border-red-300' 
                                        }`}
                                    >
                                            <div className={`absolute top-4 right-4 w-6 h-6 border-2 rounded-full flex items-center justify-center ${
                                            isSelected ? 'border-red-500' : 'border-gray-400'
                                        }`}>
                                                {isSelected && <div className="w-3 h-3 bg-red-500 rounded-full"></div>}
                                            </div>
                                            <img src={layout.image} alt={layout.name} className="w-full h-28 object-contain mb-3" />
                                            <h4 className="font-semibold text-gray-700 text-lg">{layout.name}</h4>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Mobile Version */}
                        <div className="lg:hidden">
                            <h2 className="text-lg font-bold text-gray-800 px-4">Select the layout of your kitchen</h2>
                            <p className="text-xs text-gray-500 my-2 px-4">
                                Want to know more. <a href="#" className="text-red-500 font-semibold">Check here</a>
                            </p>
                            <div className="grid grid-cols-1 gap-3 max-w-sm mx-auto mt-6 px-4 w-[250px]">
                                {kitchenLayouts.map(layout => {
                                    const isSelected = formData.kitchen?.layout === layout.name;
                                    return (
                                        <div 
                                            key={layout.name} 
                                            onClick={() => {
                                                handleOptionClick('layout', layout.name);
                                                setSlide(1); // Auto-advance
                                            }}
                                            className={`relative p-3 border-2 rounded-lg cursor-pointer transition-all touch-manipulation ${ 
                                                isSelected ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50 hover:border-red-300 active:bg-gray-100' 
                                            }`}
                                        >
                                            <div className={`absolute top-2 right-2 w-4 h-4 border-2 rounded-full flex items-center justify-center ${
                                                isSelected ? 'border-red-500' : 'border-gray-400'
                                            }`}>
                                                {isSelected && <div className="w-2 h-2 bg-red-500 rounded-full"></div>}
                                            </div>
                                            <img src={layout.image} alt={layout.name} className="w-[250px] h-40  mb-2" />
                                            <h4 className="font-semibold text-gray-700 text-sm">{layout.name}</h4>
                                    </div>
                                );
                            })}
                            </div>
                        </div>
                    </div>
                );
            case 1: // Kitchen Size
                return (
                    <div className="text-center">
                        {/* Laptop/Desktop Version */}
                        <div className="hidden lg:block">
                        <h3 className="text-xl font-bold text-gray-800 mb-6">Select Kitchen Size</h3>
                        <div className="flex justify-center gap-4 flex-wrap">
                            {kitchenSizes.map(opt => (
                                    <button key={opt} onClick={() => { handleOptionClick('size', opt); setSlide(2); }} className={`py-3 px-6 border rounded-lg font-semibold transition-colors text-sm ${formData.kitchen?.size === opt ? 'bg-red-500 text-white border-red-500' : 'bg-white text-gray-700 hover:border-red-400'}`}>
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Mobile Version */}
                        <div className="lg:hidden">
                            <h3 className="text-lg font-bold text-gray-800 mb-4 px-4">Select Kitchen Size</h3>
                            <div className="flex justify-center gap-2 flex-wrap px-4">
                                {kitchenSizes.map(opt => (
                                    <button key={opt} onClick={() => { handleOptionClick('size', opt); setSlide(2); }} className={`py-2 px-3 border rounded-lg font-semibold transition-colors text-xs touch-manipulation ${formData.kitchen?.size === opt ? 'bg-red-500 text-white border-red-500' : 'bg-white text-gray-700 hover:border-red-400 active:bg-gray-50'}`}>
                                    {opt}
                                </button>
                            ))}
                            </div>
                        </div>
                    </div>
                );
            case 2: // Kitchen Units (Multi-select)
                return (
                    <div className="text-center">
                        {/* Laptop/Desktop Version */}
                        <div className="hidden lg:block">
                        <h3 className="text-xl font-bold text-gray-800 mb-6">Select Kitchen Units Required</h3>
                        <p className="text-sm text-gray-500 mb-6">You can select multiple options.</p>
                        <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
                            {kitchenUnits.map(unit => {
                                const isSelected = formData.kitchen?.units?.includes(unit.name);
                                return (
                                    <div
                                        key={unit.name}
                                        onClick={() => handleMultiSelectClick(unit.name)}
                                        className={`relative p-6 border-2 rounded-lg cursor-pointer transition-all ${isSelected ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50 hover:border-red-300'}`}
                                    >
                                        <div className={`absolute top-4 right-4 w-6 h-6 border-2 rounded flex items-center justify-center ${isSelected ? 'border-red-500' : 'border-gray-400'}`}>
                                            {isSelected && <div className="w-3 h-3 bg-red-500 rounded"></div>}
                                        </div>
                                        <img src={unit.image} alt={unit.name} className="w-full h-28 object-contain mb-3" />
                                        <h4 className="font-semibold text-gray-700 text-lg">{unit.name}</h4>
                                    </div>
                                );
                            })}
                        </div>
                        </div>

                        {/* Mobile Version */}
                        <div className="lg:hidden">
                            <h3 className="text-lg font-bold text-gray-800 mb-4 px-4">Select Kitchen Units Required</h3>
                            <p className="text-xs text-gray-500 mb-4 px-4">You can select multiple options.</p>
                            <div className="grid grid-cols-1 gap-3 max-w-sm mx-auto px-4 w-[250px]">
                                {kitchenUnits.map(unit => {
                                    const isSelected = formData.kitchen?.units?.includes(unit.name);
                                    return (
                                        <div
                                            key={unit.name}
                                            onClick={() => handleMultiSelectClick(unit.name)}
                                            className={`relative p-3 border-2 rounded-lg cursor-pointer transition-all touch-manipulation ${isSelected ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50 hover:border-red-300 active:bg-gray-100'}`}
                                        >
                                            <div className={`absolute top-2 right-2 w-4 h-4 border-2 rounded flex items-center justify-center ${isSelected ? 'border-red-500' : 'border-gray-400'}`}>
                                                {isSelected && <div className="w-2 h-2 bg-red-500 rounded"></div>}
                                            </div>
                                            <img src={unit.image} alt={unit.name} className="w-full h-40  mb-2" />
                                            <h4 className="font-semibold text-gray-700 text-sm">{unit.name}</h4>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };


    return (
        <div>
            {renderSlide()}
             {slide > 0 && (
                <div className="flex justify-center items-center mt-8 md:mt-12 pt-6 md:pt-8 border-t px-4">
                    <button onClick={() => setSlide(s => s - 1)} disabled={slide === 0} className="font-bold text-gray-500 hover:text-red-500 disabled:text-gray-300 mr-4 md:mr-8 text-sm md:text-base">
                        Back
                    </button>
                    <div className="flex space-x-2">
                        {[0, 1, 2].map(s => <div key={s} className={`w-2 h-2 rounded-full ${slide === s ? 'bg-red-500' : 'bg-gray-300'}`}></div>)}
                    </div>
                    <button onClick={() => setSlide(s => Math.min(2, s + 1))} disabled={slide === 2} className="font-bold text-gray-500 hover:text-red-500 disabled:text-gray-300 ml-4 md:ml-8 text-sm md:text-base">
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};


const Step5Material: React.FC<StepProps> = ({ formData, setFormData }) => {
    const [slide, setSlide] = useState(0);

    const handleOptionClick = (name: string, value: string) => {
        setFormData((prev: FormData) => ({
            ...prev,
            material: {
                ...prev.material,
                [name]: value,
            }
        }));
    };

    // Bold selected phrases in material descriptions
    const formatMaterialDescription = (description: string) => {
        const highlights = ["Budget Friendly", "Mid Range", "Premium"];
        const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const pattern = new RegExp(`(${highlights.map(escapeRegExp).join('|')})`, 'gi');
        const parts = description.split(pattern);
        return parts.map((part, idx) => {
            const isHighlight = highlights.some(h => h.toLowerCase() === part.toLowerCase());
            return isHighlight ? (
                <span key={idx} className="font-semibold text-gray-800">{part}</span>
            ) : (
                <React.Fragment key={idx}>{part}</React.Fragment>
            );
        });
    };

    // Split a single description string into bullet items
    const getDescriptionBullets = (description: string): string[] => {
        return description.split(' - ').map(s => s.trim()).filter(Boolean);
    };

    const materialTypes = [
        { 
            name: "MR", 
            image: "/MR.png", 
            description: "Moisture Resistant Plywood - Budget Friendly"
        },
        { 
            name: "HDHMR", 
            image: "/HDHMR.png", 
            description: "High Density High Moisture Resistant - Mid Range" 
        },
        { 
            name: "BWR", 
            image: "/BWR.png", 
            description: "Boiling Water Resistant Plywood - Premium" 
        },
        { 
            name: "BWP", 
            image: "/BWP.png", 
            description: "Boiling Water Proof Plywood - Premium" 
        },
    ];

    const finishOptions = [
        { name: "Laminate [Durable, Budget-friendly]", image: "/laminate.png" },
        { name: "Membrane [Seamless And Affordable Luxury]", image: "/membrane.png" },
        { name: "Acrylic [Glossy And Premium]", image: "/acrylic.png" },
    ];

    const renderSlide = () => {
        switch (slide) {
            case 0: // Material Type Selection
                return (
                    <div className="text-center">
                        {/* Laptop/Desktop Version */}
                        <div className="hidden lg:block">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Select Material Type</h2>
                            <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
                                {materialTypes.map(material => {
                                    const isSelected = formData.material?.type === material.name;
                                    return (
                                        <div 
                                            key={material.name} 
                                            onClick={() => {
                                                handleOptionClick('type', material.name);
                                                setSlide(1); // Auto-advance
                                            }}
                                            className={`relative p-6 border-2 rounded-lg cursor-pointer transition-all ${ 
                                                isSelected ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50 hover:border-red-300' 
                                            }`}
                                        >
                                            <div className={`absolute top-4 right-4 w-6 h-6 border-2 rounded-full flex items-center justify-center ${
                                                isSelected ? 'border-red-500' : 'border-gray-400'
                                            }`}>
                                                {isSelected && <div className="w-3 h-3 bg-red-500 rounded-full"></div>}
                                            </div>
                                            <img src={material.image} alt={material.name} className="w-full h-28 object-contain mb-3" />
                                            <h4 className="font-semibold text-gray-700 text-lg mb-2">{material.name}</h4>
                                            <ul className="list-disc pl-5 text-gray-600 text-sm text-left space-y-1">
                                                {getDescriptionBullets(material.description).map((item, idx) => (
                                                    <li key={idx}>{formatMaterialDescription(item)}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Mobile Version */}
                        <div className="lg:hidden">
                            <h2 className="text-lg font-bold text-gray-800 mb-4 px-4">Select Material Type</h2>
                            <div className="grid grid-cols-1 gap-3 max-w-sm mx-auto px-4 w-[250px]">
                                {materialTypes.map(material => {
                                    const isSelected = formData.material?.type === material.name;
                                    return (
                                        <div 
                                            key={material.name} 
                                            onClick={() => {
                                                handleOptionClick('type', material.name);
                                                setSlide(1); // Auto-advance
                                            }}
                                            className={`relative p-3 border-2 rounded-lg cursor-pointer transition-all touch-manipulation ${ 
                                                isSelected ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50 hover:border-red-300 active:bg-gray-100' 
                                            }`}
                                        >
                                            <div className={`absolute top-2 right-2 w-4 h-4 border-2 rounded-full flex items-center justify-center ${
                                                isSelected ? 'border-red-500' : 'border-gray-400'
                                            }`}>
                                                {isSelected && <div className="w-2 h-2 bg-red-500 rounded-full"></div>}
                                            </div>
                                            <img src={material.image} alt={material.name} className="w-full h-40 object-contain mb-2" />
                                            <h4 className="font-semibold text-gray-700 text-sm mb-1">{material.name}</h4>
                                            <ul className="list-disc pl-5 text-gray-600 text-xs text-left space-y-1">
                                                {getDescriptionBullets(material.description).map((item, idx) => (
                                                    <li key={idx}>{formatMaterialDescription(item)}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                );
            case 1: // Finish Selection
                return (
    <div className="text-center">
                        {/* Laptop/Desktop Version */}
                        <div className="hidden lg:block">
                            <h3 className="text-xl font-bold text-gray-800 mb-6">Select Finish Type</h3>
                            <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
                                {finishOptions.map(opt => {
                                    const isSelected = formData.material?.finish === opt.name;
                                    return (
                                        <div 
                                            key={opt.name}
                                            onClick={() => handleOptionClick('finish', opt.name)}
                                            className={`relative p-4 border-2 rounded-lg cursor-pointer transition-all ${ 
                                                isSelected ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50 hover:border-red-300' 
                                            }`}
                                        >
                                            <div className={`absolute top-3 right-3 w-5 h-5 border-2 rounded-full flex items-center justify-center ${
                                                isSelected ? 'border-red-500' : 'border-gray-400'
                                            }`}>
                                                {isSelected && <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>}
                                            </div>
                                            <img src={opt.image} alt={opt.name} className="w-full h-32 object-cover rounded-md mb-3" />
                                            <h4 className="font-semibold text-gray-700 text-base">{opt.name}</h4>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Mobile Version */}
                        <div className="lg:hidden">
                            <h3 className="text-lg font-bold text-gray-800 mb-4 px-4">Select Finish Type</h3>
                            <div className="grid grid-cols-1 gap-4 max-w-sm mx-auto px-4 w-[250px]">
                                {finishOptions.map(opt => {
                                    const isSelected = formData.material?.finish === opt.name;
                                    return (
                                        <div 
                                            key={opt.name}
                                            onClick={() => handleOptionClick('finish', opt.name)}
                                            className={`relative p-3 border-2 rounded-lg cursor-pointer transition-all touch-manipulation ${ 
                                                isSelected ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50 hover:border-red-300 active:bg-gray-100' 
                                            }`}
                                        >
                                            <div className={`absolute top-2 right-2 w-4 h-4 border-2 rounded-full flex items-center justify-center ${
                                                isSelected ? 'border-red-500' : 'border-gray-400'
                                            }`}>
                                                {isSelected && <div className="w-2 h-2 bg-red-500 rounded-full"></div>}
                                            </div>
                                            <img src={opt.image} alt={opt.name} className="w-full h-40 object-cover rounded-md mb-2" />
                                            <h4 className="font-semibold text-gray-700 text-sm">{opt.name}</h4>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div>
            {renderSlide()}
            {slide > 0 && (
                <div className="flex justify-center items-center mt-8 md:mt-12 pt-6 md:pt-8 border-t px-4">
                    <button onClick={() => setSlide(s => s - 1)} disabled={slide === 0} className="font-bold text-gray-500 hover:text-red-500 disabled:text-gray-300 mr-4 md:mr-8 text-sm md:text-base">
                        Back
                    </button>
                    <div className="flex space-x-2">
                        {[0, 1].map(s => <div key={s} className={`w-2 h-2 rounded-full ${slide === s ? 'bg-red-500' : 'bg-gray-300'}`}></div>)}
                    </div>
                    <button onClick={() => setSlide(s => Math.min(1, s + 1))} disabled={slide === 1} className="font-bold text-gray-500 hover:text-red-500 disabled:text-gray-300 ml-4 md:ml-8 text-sm md:text-base">
                        Next
                    </button>
                </div>
            )}
    </div>
);
};


const Step5Collections: React.FC<StepProps> = ({ formData, setFormData }) => {
    const [slide, setSlide] = useState(0); // single slide but keep for consistency

    const handleMultiSelect = (collectionName: string) => {
        setFormData((prev: FormData) => {
            const currentCollections = prev.collections?.selections || [];
            const newCollections = currentCollections.includes(collectionName)
                ? currentCollections.filter((c: string) => c !== collectionName)
                : [...currentCollections, collectionName];
            return {
                ...prev,
                collections: { ...(prev.collections || {}), selections: newCollections }
            };
        });
    };

    const collections = [
        { name: 'Study Unit', image: '/studyunit.jpg' },
        { name: 'TV Unit', image: '/TVUNIT.jpg' },
        { name: 'Crockery Unit', image: '/CROCKERY.jpg' },
        { name: 'Dressing Unit', image: '/DRESSIGNUNIT.jpg' },
    ];

    const selected = formData.collections?.selections || [];

    const renderSlide = () => (
    <div className="text-center">
            {/* Laptop/Desktop Version */}
            <div className="hidden lg:block">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Choose Other Units</h2>
                <p className="text-sm text-gray-500 mb-6">You can select multiple options.</p>
                <div className="grid grid-cols-2 gap-6 max-w-3xl mx-auto">
                    {collections.map(c => {
                        const isSelected = selected.includes(c.name);
                        return (
                            <div
                                key={c.name}
                                onClick={() => handleMultiSelect(c.name)}
                                className={`w-90 h-70 relative p-4 border-2 rounded-lg cursor-pointer transition-all ${isSelected ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50 hover:border-red-300'}`}
                            >
                                <div className={`absolute top-3 right-3 w-5 h-5 border-2 rounded flex items-center justify-center ${isSelected ? 'border-red-500' : 'border-gray-400'}`}>
                                    {isSelected && <div className="w-2.5 h-2.5 bg-red-500 rounded"></div>}
                                </div>
                                <img src={c.image} alt={c.name} className="w-full h-50 object-cover rounded-md mb-3" />
                                <h4 className="font-semibold text-gray-700 text-base">{c.name}</h4>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Mobile Version */}
            <div className="lg:hidden">
                <h2 className="text-lg font-bold text-gray-800 mb-4 px-4">Choose Other Units</h2>
                <p className="text-xs text-gray-500 mb-4 px-4">You can select multiple options.</p>
                <div className="grid grid-cols-1 gap-4 max-w-sm mx-auto px-4 w-[250px]">
                    {collections.map(c => {
                        const isSelected = selected.includes(c.name);
                        return (
                            <div
                                key={c.name}
                                onClick={() => handleMultiSelect(c.name)}
                                className={`relative p-3 border-2 rounded-lg cursor-pointer transition-all touch-manipulation ${isSelected ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50 hover:border-red-300 active:bg-gray-100'}`}
                            >
                                <div className={`absolute top-2 right-2 w-4 h-4 border-2 rounded flex items-center justify-center ${isSelected ? 'border-red-500' : 'border-gray-400'}`}>
                                    {isSelected && <div className="w-2 h-2 bg-red-500 rounded"></div>}
                                </div>
                                <img src={c.image} alt={c.name} className="w-full h-40 object-cover rounded-md mb-2" />
                                <h4 className="font-semibold text-gray-700 text-sm">{c.name}</h4>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );

    return (
        <div>
            {renderSlide()}
            <div className="flex justify-center items-center mt-8 md:mt-12 pt-6 md:pt-8 border-t px-4">
                <button onClick={() => setSlide(s => Math.max(0, s - 1))} disabled={slide === 0} className="font-bold text-gray-500 hover:text-red-500 disabled:text-gray-300 mr-4 md:mr-8 text-sm md:text-base">
                    Back
                </button>
                <div className="flex space-x-2">
                    {[0].map(s => <div key={s} className={`w-2 h-2 rounded-full ${slide === s ? 'bg-red-500' : 'bg-gray-300'}`}></div>)}
                </div>
                <button onClick={() => setSlide(s => s)} disabled className="font-bold text-gray-300 ml-4 md:ml-8 text-sm md:text-base">
                    Next
                </button>
            </div>
    </div>
);
};

const Step7Submit: React.FC<StepProps> = ({ formData }) => {
    const calculatorPayload = {
        bhkType: formData.bhkType,
        rooms: formData.rooms,
        wardrobe: formData.wardrobe,
        kitchen: formData.kitchen,
        collections: formData.collections,
        material: formData.material
    };

    return (
    <div className="text-center">
            <FinalLeadForm calculatorData={calculatorPayload} />
    </div>
);
};



// --- Main App Component ---


export default function CalculatorSetup() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    bhkType: '',
    rooms: { "Bedroom": 2, "Kitchen": 1 },
    wardrobe: {},
    kitchen: {},
    collections: {},
    material: {},
  });


  const steps = ["BHK TYPE", "Rooms To Design", "Wardrobe Measurement", "Kitchen Measurement", "Other Units", "Material finish", "Submit Form"];


  const handleNext = () => {
    // Validate current step before moving forward
    if (!isStepValid(currentStep)) return;
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };


  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFinish = () => {
    // Allow finish only on last step
    if (currentStep !== steps.length - 1) return;
    try {
      // Debug: log final calculator data before submit
      // Note: This logs to the browser console
      console.log('[Calculator] FINISH clicked. Current step:', currentStep);
      console.log('[Calculator] formData payload:', formData);
    } catch (e) {
      console.error('[Calculator] Error logging formData:', e);
    }
    // Dispatch event to FinalLeadForm to submit
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('calculator:submit-final'));
    }
  };

  const isNextDisabled = () => !isStepValid(currentStep);

  const isStepValid = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return Boolean(formData.bhkType && ['2 BHK', '3 BHK', '4 BHK and More'].includes(formData.bhkType));
      case 1:
        return Boolean(formData.rooms && Object.keys(formData.rooms).length > 0);
      case 2:
        return Boolean(formData.wardrobe?.type && formData.wardrobe?.height);
      case 3:
        return Boolean(formData.kitchen?.layout && formData.kitchen?.size && formData.kitchen?.units && formData.kitchen.units.length > 0);
      case 4:
        return Boolean(formData.collections?.selections && formData.collections.selections.length > 0);
      case 5:
        return Boolean(formData.material?.type && formData.material?.finish);
      default:
        return true;
    }
  };


  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <Step1BhkType formData={formData} setFormData={setFormData} />;
      case 1:
        return <Step2Rooms formData={formData} setFormData={setFormData} />;
      case 2:
        return <Step3WardrobeMeasurement formData={formData} setFormData={setFormData} />;
      case 3:
        return <Step4Kitchen formData={formData} setFormData={setFormData} />;
      case 4:
        return <Step5Collections formData={formData} setFormData={setFormData} />;
      case 5:
        return <Step5Material formData={formData} setFormData={setFormData} />;
      case 6:
        return <Step7Submit formData={formData} setFormData={setFormData} />;
      default:
        return <Step1BhkType formData={formData} setFormData={setFormData} />;
    }
  };


  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center font-sans">
        {/* Header */}
        <header className="absolute top-0 left-0 w-full flex justify-between items-center">
            {/* Laptop/Desktop Header */}
            <div className="hidden lg:flex justify-between items-center w-full p-6">
            <Link href="/"><img src="/hub.png" alt='logo' className='w-[150px] h-[60px]'></img></Link>
            <div className="text-lg font-semibold text-gray-600">
                {currentStep + 1}/{steps.length}
                </div>
            </div>

            {/* Mobile Header */}
            <div className="lg:hidden flex justify-between items-center w-full p-4">
                <img src="/hub.png" alt='logo' className='w-[120px] h-[48px]'></img>
                <div className="text-sm font-semibold text-gray-600">
                    {currentStep + 1}/{steps.length}
                </div>
            </div>
        </header>

        <div className="w-full max-w-4xl">
            {/* Laptop/Desktop Layout */}
            <div className="hidden lg:block mt-24">
            {/* Progress Bar */}
            <ProgressBar steps={steps} currentStep={currentStep} />
            
            {/* Main Content Card */}
                <main className="bg-white rounded-2xl shadow-lg p-12">
                <div className="min-h-[450px]">
                    {renderStep()}
                </div>
            </main>

            {/* Footer Navigation */}
            <footer className="flex justify-between items-center mt-8 px-2">
                <button
                  onClick={handleBack}
                  disabled={currentStep === 0}
                      className="font-bold text-gray-500 hover:text-red-500 transition-colors disabled:text-gray-300 disabled:cursor-not-allowed text-base"
                    >
                      BACK
                    </button>
                    <button
                      onClick={currentStep === steps.length - 1 ? handleFinish : handleNext}
                      disabled={isNextDisabled()}
                      className="bg-red-500 text-white font-bold py-3 px-10 rounded-lg shadow-md hover:bg-red-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed text-base"
                      data-calc-finish-btn={currentStep === steps.length - 1 ? true : undefined}
                    >
                      {currentStep === steps.length - 1 ? 'Submit' : 'NEXT'}
                    </button>
                </footer>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden mt-20 p-2">
                {/* Progress Bar */}
                <ProgressBar steps={steps} currentStep={currentStep} />
                
                {/* Main Content Card */}
                <main className="bg-white rounded-xl shadow-lg p-4">
                    <div className="min-h-[400px]">
                        {renderStep()}
                    </div>
                </main>

                {/* Footer Navigation */}
                <footer className="flex justify-between items-center mt-6 px-2">
                    <button
                      onClick={handleBack}
                      disabled={currentStep === 0}
                      className="font-bold text-gray-500 hover:text-red-500 transition-colors disabled:text-gray-300 disabled:cursor-not-allowed text-sm touch-manipulation"
                >
                  BACK
                </button>
                <button
                  onClick={currentStep === steps.length - 1 ? handleFinish : handleNext}
                  disabled={isNextDisabled()}
                      className="bg-red-500 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-red-600 active:bg-red-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed text-sm touch-manipulation"
                      data-calc-finish-btn={currentStep === steps.length - 1 ? true : undefined}
                >
                  {currentStep === steps.length - 1 ? 'Submit' : 'NEXT'}
                </button>
            </footer>
            </div>
        </div>
    </div>
  );
} 

