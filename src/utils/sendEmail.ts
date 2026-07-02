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
    const response = await fetch('https://www.founditos.com/api/contact-form/b8fdff6f-51c9-4b8c-b58c-3712db0a8bd2', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: payload.name,
        email: payload.email || '',
        phone: payload.phone,
        message: `Service: ${payload.service || 'General'}\n\n${payload.message || ''}`,
      }),
    });

    if (!response.ok) {
      const data = await response.json();
      return { success: false, error: data.error || 'Failed to send.' };
    }

    return { success: true };
  } catch {
    return { success: false, error: 'Network error. Please try calling us directly.' };
  }
}
