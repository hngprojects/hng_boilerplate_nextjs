"use client";

import * as z from "zod";

export const formSchema = z.object({
  emailAddress: z.string().email(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  quantity: z.number(),
});

export const imageSchema = z.object({
  image: z.string().refine(
    (value) => {
      const allowedImageTypes = ["image/jpeg", "image/png", "image/gif"]; // Add more as needed
      const file = new File([new Blob()], value, { type: value });
      return allowedImageTypes.includes(file.type);
    },
    { message: "Invalid image format. Only JPEG, PNG, and GIF are allowed" },
  ),
});
