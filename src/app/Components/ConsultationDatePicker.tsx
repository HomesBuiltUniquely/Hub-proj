"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  formatDateForInput,
  getConsultationDateBounds,
  isConsultationDateInRange,
} from "@/lib/consultationSlots";

type ConsultationDatePickerProps = {
  value: string;
  onChange: (nextDate: string) => void;
  className?: string;
  placeholder?: string;
};

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function startOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function addMonths(date: Date, amount: number) {
  return new Date(date.getFullYear(), date.getMonth() + amount, 1);
}

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export default function ConsultationDatePicker({
  value,
  onChange,
  className = "",
  placeholder = "Select Date",
}: ConsultationDatePickerProps) {
  const { minDate, maxDate } = getConsultationDateBounds();
  const min = useMemo(() => new Date(`${minDate}T00:00:00`), [minDate]);
  const max = useMemo(() => new Date(`${maxDate}T00:00:00`), [maxDate]);
  const selected = value ? new Date(`${value}T00:00:00`) : null;

  const [open, setOpen] = useState(false);
  const [viewMonth, setViewMonth] = useState(() =>
    startOfMonth(selected && !Number.isNaN(selected.getTime()) ? selected : min)
  );
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleOutside = (event: MouseEvent | TouchEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, [open]);

  useEffect(() => {
    if (selected && !Number.isNaN(selected.getTime())) {
      setViewMonth(startOfMonth(selected));
    }
  }, [value]);

  const days = useMemo(() => {
    const firstDay = startOfMonth(viewMonth);
    const startOffset = firstDay.getDay();
    const gridStart = new Date(firstDay);
    gridStart.setDate(firstDay.getDate() - startOffset);

    return Array.from({ length: 42 }, (_, index) => {
      const date = new Date(gridStart);
      date.setDate(gridStart.getDate() + index);
      const iso = formatDateForInput(date);
      const inCurrentMonth = date.getMonth() === viewMonth.getMonth();
      const selectable = isConsultationDateInRange(iso);
      return { date, iso, inCurrentMonth, selectable };
    });
  }, [viewMonth]);

  const canGoPrev = addMonths(viewMonth, -1) >= startOfMonth(min);
  const canGoNext = addMonths(viewMonth, 1) <= startOfMonth(max);

  const displayLabel = selected
    ? selected.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : placeholder;

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={placeholder}
        className={`${className} text-left ${
          value ? "text-[#24262B]" : "text-[#9AA1AE]"
        }`}
      >
        {displayLabel}
      </button>

      {open && (
        <div className="absolute left-0 top-[calc(100%+8px)] z-50 w-[min(100vw-2rem,320px)] rounded-2xl border border-gray-200 bg-white p-4 shadow-[0_16px_40px_rgba(15,23,42,0.16)]">
          <div className="mb-3 flex items-center justify-between">
            <button
              type="button"
              disabled={!canGoPrev}
              onClick={() => setViewMonth((prev) => addMonths(prev, -1))}
              className="flex h-8 w-8 items-center justify-center rounded-full text-[#24262B] hover:bg-[#F4F6F9] disabled:cursor-not-allowed disabled:opacity-30"
              aria-label="Previous month"
            >
              ‹
            </button>
            <p className="text-[15px] font-bold text-[#1C1F26] manrope">
              {viewMonth.toLocaleDateString("en-IN", {
                month: "long",
                year: "numeric",
              })}
            </p>
            <button
              type="button"
              disabled={!canGoNext}
              onClick={() => setViewMonth((prev) => addMonths(prev, 1))}
              className="flex h-8 w-8 items-center justify-center rounded-full text-[#24262B] hover:bg-[#F4F6F9] disabled:cursor-not-allowed disabled:opacity-30"
              aria-label="Next month"
            >
              ›
            </button>
          </div>

          <div className="mb-1 grid grid-cols-7 gap-1">
            {WEEKDAYS.map((day) => (
              <div
                key={day}
                className="py-1 text-center text-[11px] font-semibold uppercase tracking-wide text-[#9AA1AE] manrope"
              >
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {days.map(({ date, iso, inCurrentMonth, selectable }) => {
              const isSelected = Boolean(selected && isSameDay(date, selected));
              const isToday = isSameDay(date, new Date());

              return (
                <button
                  key={iso}
                  type="button"
                  disabled={!selectable}
                  onClick={() => {
                    onChange(iso);
                    setOpen(false);
                  }}
                  className={`flex h-9 w-full items-center justify-center rounded-full text-[13px] manrope transition-colors ${
                    isSelected
                      ? "bg-[#EF2B2D] font-bold text-white"
                      : selectable
                        ? "font-medium text-[#24262B] hover:bg-[#FFE8E8]"
                        : "cursor-not-allowed text-[#D1D5DB] line-through decoration-[#D1D5DB]/80"
                  } ${!inCurrentMonth ? "opacity-40" : ""} ${
                    isToday && !isSelected && selectable
                      ? "ring-1 ring-[#EF2B2D]/40"
                      : ""
                  }`}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
