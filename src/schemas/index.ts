import * as z from "zod";

export const RegisterSchema = z.object({
  first_name: z.string().min(3, {
    message: "first name must be at least 2 characters.",
  }),
  last_name: z.string().min(3, {
    message: "first name must be at least 2 characters.",
  }),
  email: z.string().email(),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
});

export const LoginSchema = z.object({
  email: z.string().min(3, {
    message: "Feild is required",
  }),
  password: z.string().min(3, {
    message: "Password is required",
  }),
});

export const OtpSchema = z.object({
  otp: z.string(),
});
