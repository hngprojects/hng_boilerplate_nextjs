/* eslint-disable no-console */
/* eslint-disable unicorn/prevent-abbreviations */
import { NextApiRequest, NextApiResponse } from "next";

import { fetchStripeUrl } from "~/actions/payments";

export default async function handler(
  request: NextApiRequest,
  res: NextApiResponse,
) {
  if (request.method === "POST") {
    try {
      const { currentOrgId, formData, plan } = request.body;
      const response = await fetchStripeUrl(currentOrgId, formData, plan);
      res.status(200).json(response);
    } catch (error) {
      console.error("Error in Stripe API Route:", error);
      res.status(500).json({ error: "Something went wrong" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${request.method} Not Allowed`);
  }
}
