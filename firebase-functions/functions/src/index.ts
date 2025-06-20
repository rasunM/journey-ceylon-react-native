import * as functions from 'firebase-functions';
import * as nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';

dotenv.config();

// Gmail credentials
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASS = process.env.GMAIL_PASS;

// Create reusable transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_PASS,
  },
});

// Callable function to send email
export const sendWelcomeEmail = functions.https.onCall(
  async (request: functions.https.CallableRequest<any>) => {
    if (!GMAIL_USER || !GMAIL_PASS) {
      throw new Error('Missing Gmail credentials in environment variables');
    }

    const email = request.data?.email;

    if (!email) {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'The "email" field is required.',
      );
    }

    const mailOptions = {
      from: GMAIL_USER,
      to: email,
      subject: 'Welcome to Journey Ceylon!',
      text: 'Hi, welcome to Journey Ceylon!',
    };

    try {
      await transporter.sendMail(mailOptions);
      return {success: true, message: `Email sent to ${email}`};
    } catch (error: any) {
      console.error('Email sending failed:', error.message);
      throw new functions.https.HttpsError('internal', 'Email sending failed');
    }
  },
);
