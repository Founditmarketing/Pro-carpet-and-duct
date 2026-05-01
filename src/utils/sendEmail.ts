interface EmailPayload {
  name: string;
  phone: string;
  email?: string;
  service?: string;
  message?: string;
}

interface EmailResult {
  success: boolean;
  error?: string;
}

export async function sendQuoteEmail(payload: EmailPayload): Promise<EmailResult> {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      return { success: false, error: data.error || 'Failed to send.' };
    }

    return { success: true };
  } catch {
    return { success: false, error: 'Network error. Please try calling us directly.' };
  }
}
