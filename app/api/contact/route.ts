import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactSchema } from '@/app/contact/actions';

/**
 * Contact API route (optional external POST).
 *
 * Setup:
 * - Install deps: `npm install`
 * - Create `.env.local` with: RESEND_API_KEY=...
 * - Run: `npm run dev`
 */
export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = contactSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, message: 'Invalid payload', errors: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { ok: false, message: 'Missing RESEND_API_KEY' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const input = parsed.data;

    await resend.emails.send({
      from: 'M.A.K Helps <onboarding@resend.dev>',
      to: ['hello@makhelps.com'],
      replyTo: input.email,
      subject: `New inquiry: ${input.service} — ${input.name}`,
      text: [
        `Name: ${input.name}`,
        `Email: ${input.email}`,
        `Phone: ${input.phone || '—'}`,
        `Service: ${input.service}`,
        '',
        input.message
      ].join('\n')
    });

    return NextResponse.json({ ok: true, message: 'Sent' });
  } catch {
    return NextResponse.json(
      { ok: false, message: 'Server error' },
      { status: 500 }
    );
  }
}

