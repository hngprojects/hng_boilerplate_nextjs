import { z } from "zod";

export const NewProductSchema = z.object({
  product_name: z.string().min(3, { message: "Product name is required" }),
  description: z
    .string()
    .min(3, { message: "Description is required" })
    .max(160, { message: "Description is too long" }),
  category: z.string().min(3, { message: "Category is required" }),
  price: z
    .string()
    .min(1, { message: "Price is required" })
    .refine(
      (value) => {
        if (typeof Number(value) === "number") {
          return Number(value) > 0;
        }
        return true;
      },
      {
        message: "Price must be a positive number",
      },
    ),
  quantity: z
    .string()
    .min(1, { message: "Quantity is required" })
    .refine(
      (value) => {
        if (typeof Number(value) === "number") {
          return Number(value) > 0;
        }
        return true;
      },
      {
        message: "Quantity must be a positive number",
      },
    ),
  media: z.object(
    {
      url: z.string(),
      id: z.string(),
    },
    { message: "Media is required" },
  ),
});

export type NewProduct = z.infer<typeof NewProductSchema>;
