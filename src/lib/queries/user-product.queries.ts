import axios from "axios";
import { getCookie } from "cookies-next";

export const getUserProducts = async () => {
  const access_token = getCookie("access_token");

  if (!access_token) {
    return;
  }
  try {
    const response = await axios.get(`${process.env.API_URL}/api/v1/products`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    return response.data;
  } catch {
    return;
  }
};
