import * as z from "zod";

const passwordSchema = z
  .string()
  .min(1, { message: "Password is required" })
  .min(8, { message: "Password must be at least 8 characters long" })
  .refine((value) => /[a-z]/.test(value), {
    message: "Password must contain at least one lowercase letter",
  })
  .refine((value) => /[A-Z]/.test(value), {
    message: "Password must contain at least one uppercase letter",
  })
  .refine((value) => /\d/.test(value), {
    message: "Password must contain at least one number",
  })
  .refine((value) => /[\W_]/.test(value), {
    message: "Password must contain at least one special character",
  });

export const RegisterSchema = z.object({
  first_name: z.string().min(1, { message: "First name is required." }).min(3, {
    message: "First name must be at least 3 characters",
  }),
  last_name: z.string().min(1, { message: "Last name is required." }).min(3, {
    message: "Last name must be at least 3 characters",
  }),
  email: z.string().min(1, { message: "Field is required" }).email({
    message: "Invalid email address",
  }),
  password: passwordSchema,
});

export const LoginSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Invalid email address",
  }),
  password: passwordSchema,
  rememberMe: z.boolean().default(false).optional(),
});

export const organizationSchema = z.object({
  email: z.string().email({
    message: "Email must be a valid email address.",
  }),
  name: z.string().min(2, {
    message: "Company name must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Company description must be at least 2 characters.",
  }),
  industry: z.string().min(1, {
    message: "Please select an industry.",
  }),
  type: z.string().min(1, {
    message: "Please select an organization type.",
  }),
  country: z.string().min(1, {
    message: "Please select a country.",
  }),
  state: z.string().min(1, {
    message: "Please select a state.",
  }),
  address: z.string().min(1, {
    message: "Please enter company address.",
  }),
});

export const OtpSchema = z.object({
  token: z.string(),
  email: z.string().email().optional(),
});

export const ContactSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Email is invalid" }),
  name: z.string().min(1, { message: "Name is required" }),
  phone: z.string().min(1, { message: "Phone is required" }),
  message: z.string().min(1, { message: "Message is required" }),
});

export const productSchema = z.object({
  name: z.string().min(2, {
    message: "name is required",
  }),
  description: z.string().min(2, {
    message: "Company description must be at least 2 characters.",
  }),
  size: z
    .enum(["Small", "Standard", "Large"], {
      errorMap: () => ({
        message:
          "Size must be one of the following values: Small, Standard, Large",
      }),
    })
    .optional(),
  image_url: z.string().optional(),
  quantity: z.string(),
  price: z.string(),
  category: z.string(),
});
