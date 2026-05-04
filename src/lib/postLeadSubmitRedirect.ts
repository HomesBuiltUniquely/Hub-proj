/**
 * Book-consultation step is skipped for now; successful leads go directly to thank-you.
 * Keeps sessionStorage / query handling aligned with the former handoff.
 */
export const POST_LEAD_SUCCESS_PATH = "/Form-Submit-Thank-You" as const;
