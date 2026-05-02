/**
 * OTP was verified in-browser; GTM/Google Ads conversions often need a full reload
 * so tags load on a clean navigation. We queue a post-reload verified submit payload
 * keyed by pathname so the same page can finish /api/contact after reload.
 */

export const OTP_VERIFIED_CONVERSION_PENDING_KEY = 'hubOtpVerifiedConversionPending';
export const OTP_POST_VERIFY_SUBMIT_KEY = 'hubOtpPostVerifySubmit';

export type PostVerifySubmitPayload = {
  originPath: string;
  submitApiUrl: string;
  requestData: Record<string, unknown>;
  redirectPath: string;
  /** If set, use full navigation instead of SPA router (renovation flow). */
  verifiedRedirectExternalUrl?: string | null;
};

export function savePostVerifySubmitAndReloadForConversion(
  payload: PostVerifySubmitPayload,
): void {
  if (typeof window === 'undefined') return;
  sessionStorage.setItem(OTP_POST_VERIFY_SUBMIT_KEY, JSON.stringify(payload));
  sessionStorage.setItem(OTP_VERIFIED_CONVERSION_PENDING_KEY, 'true');
  window.location.reload();
}

/** Returns payload only when current pathname matches; removes key on match. */
export function consumePostVerifySubmitForPath(
  currentPath: string,
): PostVerifySubmitPayload | null {
  if (typeof window === 'undefined') return null;
  const raw = sessionStorage.getItem(OTP_POST_VERIFY_SUBMIT_KEY);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as PostVerifySubmitPayload;
    if (parsed.originPath !== currentPath) return null;
    sessionStorage.removeItem(OTP_POST_VERIFY_SUBMIT_KEY);
    return parsed;
  } catch {
    return null;
  }
}

type AppNav = { push: (href: string) => void };

/**
 * Completes verified lead POST after OTP reload (same as in-hero handleFinalSubmit VERIFIED branch).
 */
export async function executePostVerifyLeadSubmit(
  payload: PostVerifySubmitPayload,
  nav: AppNav,
  options?: { home1Ping?: (requestData: Record<string, unknown>) => Promise<void> },
): Promise<void> {
  if (typeof window === 'undefined') return;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000);

    const response = await fetch(payload.submitApiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload.requestData),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
    const responseData = (await response.json()) as { success?: boolean; message?: string };

    if (options?.home1Ping) {
      try {
        await options.home1Ping(payload.requestData);
      } catch {
        // non-blocking
      }
    }

    if (!response.ok) {
      clearPostVerifySubmitPayload();
      window.alert(responseData.message || 'Failed to submit form. Please try again.');
      return;
    }
    if (responseData.success === false) {
      clearPostVerifySubmitPayload();
      window.alert(responseData.message || 'Failed to submit form. Please try again.');
      return;
    }

    const name = String(payload.requestData.name ?? '');
    const email = String(payload.requestData.email ?? '');
    const phone = String(payload.requestData.phone ?? '');

    sessionStorage.setItem('formSubmitted', 'true');
    sessionStorage.setItem('userName', name);
    sessionStorage.setItem('userEmail', email);
    sessionStorage.setItem('userPhone', phone);

    clearPostVerifySubmitPayload();

    if (payload.verifiedRedirectExternalUrl) {
      window.location.assign(payload.verifiedRedirectExternalUrl);
      return;
    }

    nav.push(payload.redirectPath);
  } catch {
    clearPostVerifySubmitPayload();
    window.alert('Failed to submit form. Please try again.');
  }
}

function clearPostVerifySubmitPayload(): void {
  if (typeof window === 'undefined') return;
  sessionStorage.removeItem(OTP_POST_VERIFY_SUBMIT_KEY);
}
