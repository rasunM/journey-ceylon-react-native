import * as functions from 'firebase-functions';
import * as nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
import * as admin from 'firebase-admin';
import {generateOtpEmailTemplate} from './template';

admin.initializeApp();
const db = admin.firestore();

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

// Helper to generate 4-digit OTP
function generateOTP() {
  return Math.floor(1000 + Math.random() * 9000).toString();
}

// Callable function
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

    // Generate the OTP outside so it's accessible in both try blocks
    const otp = generateOTP();

    // Prepare OTP data
    const otpData = {
      email,
      otp,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      expiresAt: admin.firestore.Timestamp.fromDate(
        new Date(Date.now() + 10 * 60 * 1000), // expires in 10 minutes
      ),
    };

    // Firestore logic
    try {
      const existing = await db
        .collection('otps')
        .where('email', '==', email)
        .limit(1)
        .get();

      if (!existing.empty) {
        const docId = existing.docs[0].id;
        await db.collection('otps').doc(docId).set(otpData, {merge: true});
      } else {
        await db.collection('otps').add(otpData);
      }
    } catch (firestoreError) {
      console.error('Failed to save or update OTP:', firestoreError);
      throw new functions.https.HttpsError(
        'internal',
        'Failed to save or update OTP in Firestore',
      );
    }

    // Email sending logic
    const mailOptions = {
      from: GMAIL_USER,
      to: email,
      subject: 'Welcome to Journey Ceylon!',
      html: generateOtpEmailTemplate(otp),
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
