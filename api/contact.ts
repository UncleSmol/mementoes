import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { user_name, user_email, subject, message } = request.body;

    const data = await resend.emails.send({
      from: 'Mementoes Website <onboarding@resend.dev>',
      to: ['thereal.n.d.khoza@gmail.com'],
      subject: `New Contact Form: ${subject}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #1e4a9b;">New Inquiry from Mementoes Website</h2>
          <p><strong>From:</strong> ${user_name} (${user_email})</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="border: 1px solid #eee;" />
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return response.status(200).json(data);
  } catch (error) {
    return response.status(500).json({ error: (error as Error).message });
  }
}
