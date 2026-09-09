export const deliveryUnconfirmedMessage = "We could not confirm delivery. Please email us directly before submitting again.";

export async function contactResponseMessage(response: Response): Promise<string | null> {
  let result: unknown;
  try {
    result = await response.json();
  } catch {
    return deliveryUnconfirmedMessage;
  }
  if (response.ok && result && typeof result === "object" && "success" in result && result.success === true) return null;
  switch (response.status) {
    case 400: return "Please check your details and confirm your consent.";
    case 403: return "Please submit from the Gamoventure website.";
    case 413: return "Your inquiry is too long. Please shorten it.";
    case 429: return "Too many attempts. Please wait ten minutes or email us directly.";
    case 503: return "Online submission is not available yet. Please email us directly.";
    default: return deliveryUnconfirmedMessage;
  }
}
