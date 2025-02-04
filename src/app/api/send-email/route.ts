
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

interface RequestBody {
  phoneNumber: string;
  email: string;
  fullName: string;
  companyOrKvK: string;
  questionOrComment: string;
  semdType: string;
}

export async function POST(req: Request) {
  try {
    const { phoneNumber }: RequestBody = await req.json();
    const { email }: RequestBody = await req.json();
    const { semdType }: RequestBody = await req.json();
    const { fullName }: RequestBody = await req.json();
    const { companyOrKvK }: RequestBody = await req.json();
    const { questionOrComment }: RequestBody = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });


    let mailOptions = {};

    switch (semdType) {
      case 'phoneEmail':
        mailOptions = {
          from: process.env.EMAIL_USER,
          to: 'recipient@example.com', // Replace with your email
          subject: 'New Phone Number Submission',
          text: `Phone Number Submitted: ${phoneNumber}`,
        };
        break;
      case 'emailEmail':
        break;
      case 'fullForumEmail':
           mailOptions = {
          from: process.env.EMAIL_USER,
          to: 'recipient@example.com', 
          subject: 'Nieuwe Inzending',
          text: `
            Voor- en achternaam: ${fullName}
            E-mailadres: ${email}
            Telefoonnummer: ${phoneNumber}
            Bedrijfsnaam of KvK nummer: ${companyOrKvK}
            Vraag of opmerking: ${questionOrComment}
          `,
        };
        break;
    }


    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
