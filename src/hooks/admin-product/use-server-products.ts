import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { ServerProductResponse } from "~/types/admin-product.types";

export const useUserProducts = () => {
  return useQuery({
    queryKey: ["all_user_products"],
    queryFn: () =>
      axios
        .get("/api/get-user-products")
        .then((response) => response.data as unknown as ServerProductResponse),
  });
};
