export type VerificationStatus = "VERIFIED" | "UNVERIFIED";

function normalizeStatusValue(value: unknown): string {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().toUpperCase();
}

export function getVerificationStatus(otpSuccess: boolean): VerificationStatus {
  return otpSuccess ? "VERIFIED" : "UNVERIFIED";
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

  if (lead?.verified === true) {
    return "VERIFIED";
  }

  return "UNVERIFIED";
}
