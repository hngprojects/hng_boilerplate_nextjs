import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useUserProducts = () => {
  return useQuery({
    queryKey: ["all_user_products"],
    queryFn: () =>
      axios.get("/api/get-user-products").then((response) => response.data),
    refetchIntervalInBackground: true,
    refetchInterval: 60_000, // 60 seconds
  });
};
