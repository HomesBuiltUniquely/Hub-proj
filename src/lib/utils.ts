import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Normalizes phone number by removing +91 or 91 prefix, leading 0, and keeping only 10 digits
 * @param phone - Phone number string that may contain +91, 91, leading 0, or just digits
 * @returns Normalized 10-digit phone number (or less if input is shorter)
 */
export function normalizePhoneNumber(phone: string): string {
  // Remove all non-digit characters
  let cleaned = phone.replace(/\D/g, '');
  
  // Remove leading +91 or 91 prefix (if length > 10, it's likely a country code)
  if (cleaned.startsWith('91') && cleaned.length > 10) {
    cleaned = cleaned.substring(2);
  }
  
  // Remove leading 0 if present (e.g., 09110412643 -> 9110412643)
  // This handles cases where users enter 0 before the 10-digit number
  if (cleaned.startsWith('0')) {
    cleaned = cleaned.substring(1);
  }
  
  // Limit to 10 digits
  return cleaned.slice(0, 10);
}
