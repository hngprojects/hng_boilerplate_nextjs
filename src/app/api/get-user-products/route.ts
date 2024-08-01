import axios from "axios";
import { NextResponse } from "next/server";

import { auth } from "~/lib/auth";

export async function GET() {
  const session = await auth();

  if (!session?.access_token) {
    return;
  }
  try {
    const response_data = await axios.get(
      `${process.env.API_URL}/api/v1/products`,
      {
        headers: {
          Authorization: `Bearer ${session?.access_token}`,
        },
      },
    );

    return NextResponse.json(response_data.data);
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}
