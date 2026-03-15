import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

// Use the key from environment or fallback to the provided one (not recommended for production but following user request)
const resend = new Resend(process.env.RESEND_API_KEY || 're_biGuMn19_NCYpbcWunJc43A4qKQgLNyFW');

// Simple in-memory storage for rate limiting (Note: This is transient in serverless)
const ipCache = new Map<string, number>();

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const clientIp = (request.headers['x-forwarded-for'] as string) || 'anonymous';
  const now = Date.now();
  
  // Rate limiting: 1 request per 60 seconds per IP
  if (ipCache.has(clientIp)) {
    const lastRequest = ipCache.get(clientIp)!;
    if (now - lastRequest < 60000) {
      return response.status(429).json({ error: 'Too many requests. Please wait a minute.' });
    }
  }

  try {
    const { user_name, user_email, subject, message, honeypot, user_phone } = request.body;

    // 1. Honeypot check (Spam protection)
    if (honeypot) {
      console.log('Spam detected via honeypot');
      return response.status(200).json({ success: true, message: 'Message "sent" successfully' });
    }

    // 2. Validation
    if (!user_name || !user_email || !message) {
      return response.status(400).json({ error: 'Missing required fields' });
    }

    // Update cache
    ipCache.set(clientIp, now);

    // 3. Send Email
    const data = await resend.emails.send({
      from: 'Mementoes Website <onboarding@resend.dev>',
      to: ['ntsako.khoza@yahoo.com'],
      cc: ['doctor@formalize.co.za'],
      replyTo: user_email,
      subject: `[Contact Form] ${subject || 'New Inquiry'}`,
      html: `
        <div style="font-family: sans-serif; padding: 30px; color: #1a1a1a; max-width: 600px; margin: auto; border: 1px solid #eee;">
          <h2 style="color: #1e4a9b; border-bottom: 2px solid #fcb040; padding-bottom: 10px;">New Website Inquiry</h2>
          
          <div style="margin-top: 20px;">
            <p><strong>Name:</strong> ${user_name}</p>
            <p><strong>Email:</strong> ${user_email}</p>
            <p><strong>Phone:</strong> ${user_phone || 'Not provided'}</p>
            <p><strong>Subject:</strong> ${subject || 'General Inquiry'}</p>
          </div>

          <div style="margin-top: 30px; padding: 20px; background: #f9f9f9; border-radius: 8px;">
            <p style="margin-top: 0; font-weight: bold; color: #1e4a9b;">Message:</p>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>

          <div style="margin-top: 40px; font-size: 12px; color: #999; text-align: center;">
            <p>This message was sent via the Mementoes Trading contact form.</p>
            <p>Source IP: ${clientIp}</p>
          </div>
        </div>
      `,
    });

    return response.status(200).json(data);
  } catch (error) {
    return response.status(500).json({ error: (error as Error).message });
  }
}
