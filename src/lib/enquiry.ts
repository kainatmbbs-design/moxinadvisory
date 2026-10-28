export function createEmailDraft(
  email: string,
  data: Record<string, string>,
): string {
  const subject = "Business enquiry: " + data.service;
  const body = `Name: ${data.name}\nEmail: ${data.email}\nBusiness: ${data.business || "Not supplied"}\nBusiness type: ${data.type}\nService: ${data.service}\n\n${data.message}`;
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
// Contract: an approved HTTPS service must validate server-side, rate-limit, filter spam,
// allow this site's origin and return JSON { ok: true } only on accepted submission.
// Adapt this function and privacy disclosures to the selected provider before enabling.
export async function submitEnquiry(
  endpoint: string,
  data: Record<string, string>,
): Promise<void> {
  if (new URL(endpoint).protocol !== "https:")
    throw new Error("HTTPS endpoint required");
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    signal: AbortSignal.timeout(15000),
    credentials: "omit",
    referrerPolicy: "no-referrer",
  });
  if (!response.ok) throw new Error("Submission rejected");
  const result: unknown = await response.json();
  if (
    !result ||
    typeof result !== "object" ||
    !("ok" in result) ||
    result.ok !== true
  )
    throw new Error("Acceptance unconfirmed");
}
