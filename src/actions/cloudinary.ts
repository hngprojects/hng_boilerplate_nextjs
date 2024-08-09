"use server";

import { CloudinaryAsset } from "~/types";

export default async function cloudinary(formData: FormData) {
  try {
    const request = await fetch(
      `https://api.cloudinary.com/v1_1/dnik53vns/image/upload`,
      {
        method: "POST",
        body: formData,
      },
    );
    const response: CloudinaryAsset = await request.json();
    return response.url;
  } catch {
    throw new Error("Error Occured uploading data");
  }
}
