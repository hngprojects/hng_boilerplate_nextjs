import axios from "axios";
import { getCookie } from "cookies-next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const response = new NextResponse();
  const access_token = getCookie("access_token", {
    res: response,
    req: request,
  });

  if (!access_token) {
    return;
  }
  try {
    const response_data = await axios.get(
      `${process.env.API_URL}/api/v1/products`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      },
    );

    return NextResponse.json(response_data.data);
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}
