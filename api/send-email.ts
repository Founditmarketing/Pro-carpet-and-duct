import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, phone, email, service, message } = req.body;

  // Basic validation
  if (!name || !phone) {
    return res.status(400).json({ error: 'Name and phone are required.' });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Pro Carpet & Duct Cleaning <hello@procarpetandductcleaning.com>',
      to: ['procarpetandductcleaning@gmail.com'],
      replyTo: email || undefined,
      subject: `New Quote Request — ${service || 'General Inquiry'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
          <div style="background: #0f172a; padding: 24px 32px; border-bottom: 4px solid #dc2626;">
            <h1 style="color: #ffffff; margin: 0; font-size: 22px; letter-spacing: -0.5px;">
              New Quote Request
            </h1>
            <p style="color: #94a3b8; margin: 4px 0 0; font-size: 13px; text-transform: uppercase; letter-spacing: 2px;">
              Pro Carpet & Duct Cleaning
            </p>
          </div>

          <div style="padding: 32px; background: #f8fafc; border: 1px solid #e2e8f0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #64748b; width: 130px;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-size: 16px; font-weight: 700; color: #0f172a;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #64748b;">Phone</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-size: 16px; font-weight: 700; color: #0f172a;">${phone}</td>
              </tr>
              ${email ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #64748b;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-size: 16px; font-weight: 700; color: #0f172a;">${email}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #64748b;">Service</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                  <span style="background: #dc2626; color: white; padding: 4px 12px; border-radius: 4px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">
                    ${service || 'Not specified'}
                  </span>
                </td>
              </tr>
              ${message ? `
              <tr>
                <td style="padding: 12px 0; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #64748b; vertical-align: top;">Message</td>
                <td style="padding: 12px 0; font-size: 15px; color: #334155; line-height: 1.6;">${message}</td>
              </tr>
              ` : ''}
            </table>
          </div>

          <div style="padding: 20px 32px; background: #0f172a; text-align: center;">
            <p style="color: #475569; font-size: 12px; margin: 0; text-transform: uppercase; letter-spacing: 1px;">
              Submitted via procarpetandductcleaning.com
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ success: true, id: data?.id });
  } catch (err: unknown) {
    console.error('Unexpected error:', err);
    return res.status(500).json({ error: 'Failed to send email.' });
  }
}
