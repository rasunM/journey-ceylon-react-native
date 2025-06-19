import * as Yup from 'yup';

const emailField = Yup.string()
  .email('Invalid email address')
  .required('Email is required');

const passwordField = Yup.string()
  .min(6, 'Password must be at least 6 characters')
  .required('Password is required');

const confirmPasswordField = Yup.string()
  .oneOf([Yup.ref('password'), ''], 'Passwords must match')
  .required('Confirm Password is required');

// Validation schema for sign up form
export const SignUpSchema = Yup.object().shape({
  userName: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(20, 'No longer 20 characters')
    .required('Name is required'),
  email: emailField,
  password: passwordField,
  confirmPassword: confirmPasswordField,
});

// Validation schema for login form
export const LoginSchema = Yup.object().shape({
  email: emailField,
  password: passwordField,
});

// Validation schema for forgot password form
export const ForgotPasswordSchema = Yup.object().shape({
  email: emailField,
});

// Validation schema for reset password form
export const ResetPasswordSchema = Yup.object().shape({
  password: passwordField,
  confirmPassword: confirmPasswordField,
});

