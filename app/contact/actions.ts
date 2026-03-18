'use server';

import { z } from 'zod';
import { Resend } from 'resend';

export const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name.').max(80),
  email: z.string().email('Please enter a valid email.').max(160),
  phone: z
    .string()
    .min(7, 'Please enter a valid phone number.')
    .max(30)
    .optional()
    .or(z.literal('')),
  service: z.string().min(2, 'Please select a service.').max(80),
  message: z.string().min(10, 'Please add a brief message.').max(1200)
});

export type ContactInput = z.infer<typeof contactSchema>;

export type ContactActionState =
  | { ok: true; message: string }
  | { ok: false; message: string; fieldErrors?: Record<string, string[]> };

function emailHtml(input: ContactInput) {
  const rows = [
    ['Name', input.name],
    ['Email', input.email],
    ['Phone', input.phone || '—'],
    ['Service', input.service],
    ['Message', input.message]
  ];

  return `
  <div style="font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,sans-serif;background:#050505;color:#F4F4F4;padding:24px">
    <div style="max-width:720px;margin:0 auto;border:1px solid rgba(212,175,55,.28);border-radius:18px;background:rgba(255,255,255,.04);padding:22px">
      <div style="letter-spacing:.22em;color:#D4AF37;font-size:12px">NEW INQUIRY</div>
      <h1 style="margin:10px 0 0;font-family:Georgia,Times New Roman,serif;font-size:26px;line-height:1.15">M.A.K Helps Network Marketing</h1>
      <p style="margin:8px 0 0;color:#A8A8A8">Contact form submission</p>
      <div style="height:1px;background:rgba(255,255,255,.12);margin:18px 0"></div>
      <table style="width:100%;border-collapse:collapse">
        ${rows
          .map(
            ([k, v]) => `
          <tr>
            <td style="padding:10px 0;color:#A8A8A8;width:120px;vertical-align:top">${k}</td>
            <td style="padding:10px 0;color:#F4F4F4;white-space:pre-wrap">${String(v)
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;')}</td>
          </tr>
        `
          )
          .join('')}
      </table>
      <div style="height:1px;background:rgba(255,255,255,.12);margin:18px 0"></div>
      <p style="margin:0;color:#A8A8A8;font-size:12px">Sent from mak-helps-network-marketing (Next.js).</p>
    </div>
  </div>
  `;
}

export async function sendContactAction(
  _prevState: ContactActionState | null,
  formData: FormData
): Promise<ContactActionState> {
  const parsed = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    service: formData.get('service'),
    message: formData.get('message')
  });

  if (!parsed.success) {
    return {
      ok: false,
      message: 'Please check the form and try again.',
      fieldErrors: parsed.error.flatten().fieldErrors
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      ok: false,
      message: 'Missing RESEND_API_KEY. Add it to .env.local and restart the dev server.'
    };
  }

  const resend = new Resend(apiKey);
  const input = parsed.data;

  try {
    await resend.emails.send({
      from: 'M.A.K Helps <onboarding@resend.dev>',
      to: ['hello@makhelps.com'],
      replyTo: input.email,
      subject: `New inquiry: ${input.service} — ${input.name}`,
      html: emailHtml(input)
    });

    return { ok: true, message: 'Message sent. We’ll reach out shortly.' };
  } catch {
    return {
      ok: false,
      message: 'Something went wrong while sending. Please try again in a moment.'
    };
  }
}

