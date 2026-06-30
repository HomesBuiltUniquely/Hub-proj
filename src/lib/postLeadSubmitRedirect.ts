import { formatIndianPhoneE164 } from "./utils";

/**
 * Book-consultation step is skipped for now; successful leads go directly to thank-you.
 * Keeps sessionStorage / query handling aligned with the former handoff.
 */
export const POST_LEAD_SUCCESS_PATH = "/Form-Submit-Thank-You" as const;

type LeadContactDetails = {
  name?: string;
  email?: string;
  phone?: string;
  pincode?: string;
};

/** Persists lead contact fields for thank-you / book-consultation handoff. */
export function saveLeadContactToSession(details: LeadContactDetails): void {
  if (typeof window === "undefined") return;

  const name = details.name?.trim();
  const email = details.email?.trim();
  const phone = details.phone ? formatIndianPhoneE164(details.phone) : "";
  const pincode = details.pincode?.trim();

  if (name) sessionStorage.setItem("userName", name);
  if (email) sessionStorage.setItem("userEmail", email);
  if (phone) sessionStorage.setItem("userPhone", phone);
  if (pincode) sessionStorage.setItem("userPincode", pincode);
}

/** Query string for thank-you reload (phone stored as +91XXXXXXXXXX). */
export function buildLeadThankYouQuery(details: LeadContactDetails): URLSearchParams {
  const q = new URLSearchParams();
  const name = details.name?.trim();
  const email = details.email?.trim();
  const phone = details.phone ? formatIndianPhoneE164(details.phone) : "";

  if (name) q.set("name", name);
  if (email) q.set("email", email);
  if (phone) q.set("phone", phone);

  return q;
}
