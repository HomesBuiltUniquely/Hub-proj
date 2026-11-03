export const preferredSlots = [
  "09:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "12:00 PM - 01:00 PM",
  "01:00 PM - 02:00 PM",
  "02:00 PM - 03:00 PM",
  "03:00 PM - 04:00 PM",
  "04:00 PM - 05:00 PM",
  "05:00 PM - 06:00 PM",
  "06:00 PM - 07:00 PM",
  "07:00 PM - 08:00 PM",
];

export function formatDateForInput(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

/** Consultation dates are limited to today through the next 14 days (15 days total). */
export function getConsultationDateBounds(now = new Date()) {
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const maxSelectableDate = new Date(today);
  maxSelectableDate.setDate(today.getDate() + 14);

  return {
    minDate: formatDateForInput(today),
    maxDate: formatDateForInput(maxSelectableDate),
  };
}

/** Only the next 15 selectable dates — used on mobile where native min/max is unreliable. */
export function getConsultationDateOptions(now = new Date()) {
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  return Array.from({ length: 15 }, (_, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() + index);
    const value = formatDateForInput(date);
    const label = date.toLocaleDateString("en-IN", {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    return { value, label };
  });
}

export function isConsultationDateInRange(
  selectedDate: string,
  now = new Date()
) {
  if (!selectedDate) return false;
  const { minDate, maxDate } = getConsultationDateBounds(now);
  return selectedDate >= minDate && selectedDate <= maxDate;
}

function getSlotStartMinutes(slot: string) {
  const start = slot.split(" - ")[0]?.trim() ?? "";
  const match = start.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) return null;

  let hours = Number(match[1]);
  const minutes = Number(match[2]);
  const period = match[3].toUpperCase();

  if (period === "AM" && hours === 12) hours = 0;
  if (period === "PM" && hours !== 12) hours += 12;

  return hours * 60 + minutes;
}

export function isPreferredSlotAvailable(
  slot: string,
  selectedDate: string,
  now = new Date()
) {
  if (!selectedDate) return false;
  if (selectedDate !== formatDateForInput(now)) return true;

  const startMinutes = getSlotStartMinutes(slot);
  if (startMinutes === null) return false;

  const nowMinutes = now.getHours() * 60 + now.getMinutes();
  return startMinutes > nowMinutes;
}
