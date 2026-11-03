"use client";

import React from "react";

type CareerSuccessModalProps = {
  open: boolean;
  onClose: () => void;
};

const CareerSuccessModal: React.FC<CareerSuccessModalProps> = ({
  open,
  onClose,
}) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-8 w-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="manrope-medium text-2xl text-gray-900">
          Application submitted!
        </h3>
        <p className="manrope mt-3 text-base text-gray-600">
          Your application has been emailed successfully. Our team will review it
          and get back to you soon.
        </p>
        <button
          type="button"
          onClick={onClose}
          className="manrope-medium mt-6 w-full rounded-md bg-red-600 px-6 py-3 text-white transition hover:bg-red-700"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default CareerSuccessModal;
