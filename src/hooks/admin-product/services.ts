// services/productService.ts
import axios from "axios";

import { getApiUrl } from "~/actions/getApiUrl";

const createAxiosInstanceWithAuth = (accessToken: string) => {
  const axiosInstance = axios.create({
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return axiosInstance;
};

export const addProductService = async (
  product: { name: string; quantity: number; price: number; category: string },
  accessToken: string,
) => {
  const apiUrl = await getApiUrl();
  const orgId = localStorage.getItem("current_orgid");
  if (!orgId) throw new Error("Organization ID not found.");

  const axiosWithAuth = createAxiosInstanceWithAuth(accessToken);

  const response = await axiosWithAuth.post(
    `${apiUrl}/api/v1/organizations/${orgId}/products`,
    product,
  );

  return response.data;
};
