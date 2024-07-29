import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  resource: NextApiResponse,
) {
  if (request.method === "POST") {
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL as string, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request.body),
      });

      const data = await response.json();

      resource.status(response.status).json(data);
    } catch {
      resource.status(500).json({ error: "Something went wrong." });
    }
  } else {
    resource.setHeader("Allow", ["POST"]);
    resource.status(405).end(`Method ${request.method} Not Allowed`);
  }
}
