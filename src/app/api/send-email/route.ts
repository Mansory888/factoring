
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

// In-memory store for rate limiting
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5;

function isRateLimited(ip: string) {
  const currentTime = Date.now();
  const rateData = rateLimitMap.get(ip);

  if (rateData) {
    if (currentTime - rateData.timestamp < RATE_LIMIT_WINDOW) {
      if (rateData.count >= MAX_REQUESTS) {
        return true; // User is rate limited
      } else {
        rateData.count++;
        rateLimitMap.set(ip, rateData);
      }
    } else {
      // Reset the count after the time window
      rateLimitMap.set(ip, { count: 1, timestamp: currentTime });
    }
  } else {
    // First request from this IP
    rateLimitMap.set(ip, { count: 1, timestamp: currentTime });
  }

  return false;
}


export async function POST(req: Request) {

  console.log('Request received:', req);

  try {

    // const ip = req.headers.get('x-forwarded-for') || 'unknown';

    // if (isRateLimited(ip)) {
    //   return NextResponse.json(
    //     { error: 'Too many requests. Please try again later.' },
    //     { status: 429 }
    //   );
    // }

    const body: RequestBody = await req.json();
    const { phoneNumber, email, semdType, fullName, companyOrKvK, questionOrComment } = body;


    const transporter = nodemailer.createTransport({
      host: 'send.one.com',
      port: 587,
      secure: false,
      auth: {
        user: 'alves.nabeiro@gmail.com',
        pass: '_Vamosserricos',
      },
    });

    let mailOptions = {};

    switch (semdType) {
      case "phoneEmail":
        mailOptions = {
          from: "alves.nabeiro@gmail.com",
          to: 'nichita.railean@aol.com', // Replace with your email
          subject: 'New Phone Number Submission',
          text: `Phone Number Submitted: ${phoneNumber}`,
        };
        break;
      case "emailEmail":
        mailOptions = {
          from: "alves.nabeiro@gmail.com",
          to: 'info@sooffactoring.nl',
          subject: 'New Email Submission',
          text: `Email Submitted: ${email}`,
        };
        break;
      case "fullForumEmail":
        mailOptions = {
          from: "alves.nabeiro@gmail.com",
          to: 'info@sooffactoring.nl',
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

    return NextResponse.json({ success: semdType }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
