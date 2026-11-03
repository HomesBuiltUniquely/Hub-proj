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
