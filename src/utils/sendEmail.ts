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
    await fetch('https://www.founditos.com/api/contact-form/b8fdff6f-51c9-4b8c-b58c-3712db0a8bd2', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      redirect: 'manual',
      body: JSON.stringify({
        name: payload.name,
        email: payload.email || '',
        phone: payload.phone,
        message: `Service: ${payload.service || 'General'}\n\n${payload.message || ''}`,
      }),
    });
  } catch {
    // CRM saves the lead then 307-redirects without CORS headers
  }

  return { success: true };
}
