export type VerificationStatus = "VERIFIED" | "UNVERIFIED";

/**
 * CRM-facing values. Do NOT send the literal "UNVERIFIED" to Home1/MetaLead —
 * several CRM checks use includes("VERIFIED"), which wrongly matches "UNVERIFIED".
 * Historical working values: "Verified User" / "No OTP".
 */
export type CrmVerificationStatus = "Verified User" | "No OTP";

function normalizeStatusValue(value: unknown): string {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().toUpperCase();
}

export function getVerificationStatus(otpSuccess: boolean): VerificationStatus {
  return otpSuccess ? "VERIFIED" : "UNVERIFIED";
}

export function toCrmVerificationStatus(
  status: VerificationStatus,
): CrmVerificationStatus {
  return status === "VERIFIED" ? "Verified User" : "No OTP";
}

export function resolveLeadVerificationStatus(lead: {
  verificationStatus?: unknown;
  otpSuccess?: unknown;
  verified?: unknown;
}): VerificationStatus {
  const normalizedStatus = normalizeStatusValue(lead?.verificationStatus);

  if (normalizedStatus === "VERIFIED" || normalizedStatus === "VERIFIED USER") {
    return "VERIFIED";
  }

  if (
    normalizedStatus === "UNVERIFIED" ||
    normalizedStatus === "UNVERIFIED USER" ||
    normalizedStatus === "NO OTP"
  ) {
    return "UNVERIFIED";
  }

  if (typeof lead?.otpSuccess === "boolean") {
    return getVerificationStatus(lead.otpSuccess);
  }

  // String "false"/"true" from some clients / FormData
  if (typeof lead?.otpSuccess === "string") {
    const normalizedOtp = lead.otpSuccess.trim().toLowerCase();
    if (normalizedOtp === "true" || normalizedOtp === "1") {
      return "VERIFIED";
    }
    if (normalizedOtp === "false" || normalizedOtp === "0") {
      return "UNVERIFIED";
    }
  }

  if (lead?.verified === true) {
    return "VERIFIED";
  }

  return "UNVERIFIED";
}
