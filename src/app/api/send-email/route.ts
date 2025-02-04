
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

interface RequestBody {
  phoneNumber: string;
  email: string;
  messageType: string;
}

export async function POST(req: Request) {
  try {
    const { phoneNumber }: RequestBody = await req.json();
    const { email }: RequestBody = await req.json();
    const { messageType }: RequestBody = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'recipient@example.com', // Replace with your email
      subject: 'New Phone Number Submission',
      text: `Phone Number Submitted: ${phoneNumber}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
