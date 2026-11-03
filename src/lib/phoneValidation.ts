export function normalizeIndianPhone(input: unknown): string {
  const digits = String(input ?? "").replace(/\D/g, "");

  if (digits.length === 10) {
    return digits;
  }

  if (digits.length === 12 && digits.startsWith("91")) {
    return digits.slice(2);
  }

  return "";
}

export function isValidIndianPhone(input: unknown): boolean {
  return normalizeIndianPhone(input).length === 10;
}
