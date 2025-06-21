"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendWelcomeEmail = void 0;
const functions = __importStar(require("firebase-functions"));
const nodemailer = __importStar(require("nodemailer"));
const dotenv = __importStar(require("dotenv"));
const admin = __importStar(require("firebase-admin"));
const template_1 = require("./template");
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
exports.sendWelcomeEmail = functions.https.onCall(async (request) => {
    var _a;
    if (!GMAIL_USER || !GMAIL_PASS) {
        throw new Error('Missing Gmail credentials in environment variables');
    }
    const email = (_a = request.data) === null || _a === void 0 ? void 0 : _a.email;
    if (!email) {
        throw new functions.https.HttpsError('invalid-argument', 'The "email" field is required.');
    }
    // Generate the OTP outside so it's accessible in both try blocks
    const otp = generateOTP();
    // Prepare OTP data
    const otpData = {
        email,
        otp,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        expiresAt: admin.firestore.Timestamp.fromDate(new Date(Date.now() + 10 * 60 * 1000)),
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
            await db.collection('otps').doc(docId).set(otpData, { merge: true });
        }
        else {
            await db.collection('otps').add(otpData);
        }
    }
    catch (firestoreError) {
        console.error('Failed to save or update OTP:', firestoreError);
        throw new functions.https.HttpsError('internal', 'Failed to save or update OTP in Firestore');
    }
    // Email sending logic
    const mailOptions = {
        from: GMAIL_USER,
        to: email,
        subject: 'Welcome to Journey Ceylon!',
        html: (0, template_1.generateOtpEmailTemplate)(otp),
    };
    try {
        await transporter.sendMail(mailOptions);
        return { success: true, message: `Email sent to ${email}` };
    }
    catch (error) {
        console.error('Email sending failed:', error.message);
        throw new functions.https.HttpsError('internal', 'Email sending failed');
    }
});
//# sourceMappingURL=index.js.map