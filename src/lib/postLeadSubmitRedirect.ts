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

/** Mark lead submitted for GTM / thank-you and persist contact fields. */
export function prepareLeadThankYou(details: LeadContactDetails): void {
  if (typeof window === "undefined") return;
  sessionStorage.setItem("formSubmitted", "true");
  sessionStorage.removeItem("hubThankYouAdsConversionSent");
  saveLeadContactToSession(details);
}

/**
 * Fire-and-forget lead POST so thank-you / Ads conversion is not blocked by CRM/email.
 * `keepalive` lets the request finish after navigation.
 */
export function fireAndForgetLeadSubmit(
  url: string,
  body: object,
): void {
  if (typeof window === "undefined") return;
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    keepalive: true,
  }).catch((error) => {
    console.error("Background lead submit failed:", error);
  });
}

/** Full-page thank-you redirect (preferred with keepalive submits). */
export function redirectToLeadThankYou(query?: URLSearchParams): void {
  if (typeof window === "undefined") return;
  const qs = query?.toString();
  window.location.assign(
    qs ? `${POST_LEAD_SUCCESS_PATH}?${qs}` : POST_LEAD_SUCCESS_PATH,
  );
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
