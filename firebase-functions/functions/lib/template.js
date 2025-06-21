"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateOtpEmailTemplate = void 0;
const generateOtpEmailTemplate = (otp) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Your OTP Code</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #eef1f7;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background-color: #ffffff;
      border-radius: 12px;
      box-shadow: 0 8px 20px rgba(0,0,0,0.1);
      padding: 40px 30px;
      text-align: center;
    }
    .logo {
      font-size: 28px;
      font-weight: bold;
      color: #007bff;
      margin-bottom: 10px;
    }
    .headline {
      font-size: 20px;
      color: #333333;
      margin-bottom: 20px;
    }
    .message {
      color: #555555;
      font-size: 16px;
      margin-bottom: 30px;
    }
    .otp {
      font-size: 38px;
      letter-spacing: 12px;
      color: #007bff;
      font-weight: bold;
      background-color: #f0f4ff;
      padding: 12px 24px;
      border-radius: 8px;
      display: inline-block;
      user-select: text;
    }
    .footer {
      margin-top: 40px;
      font-size: 12px;
      color: #999999;
      border-top: 1px solid #eeeeee;
      padding-top: 10px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="logo">Travel Ceylon</div>
    <div class="headline">Your One-Time Password (OTP)</div>
    <div class="message">
      Please use the code below to verify your email address. <br />
      This OTP will expire in 10 minutes.
    </div>
    <div class="otp">${otp}</div>
    <div class="footer">
      If you did not request this email, you can safely ignore it.
    </div>
  </div>
</body>
</html>
`;
exports.generateOtpEmailTemplate = generateOtpEmailTemplate;
//# sourceMappingURL=template.js.map