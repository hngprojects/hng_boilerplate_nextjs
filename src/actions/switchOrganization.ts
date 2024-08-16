"use server";

import axios from "axios";

import { auth } from "~/lib/auth";
import { getApiUrl } from "./getApiUrl";

export const getCurrentOrgApi = async ({ orgId }: { orgId: string }) => {
  const payload = { isActive: true };
  const apiUrl = await getApiUrl();
  const session = await auth();
  const response = await axios.put(
    `${apiUrl}/api/v1/users/organisations/${orgId}`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    },
  );
  return response.data;
};
//  `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiIwZjc4ZGExMy0xYTc2LTQyYWItOTg0My1hNTBmNDY2ODBiNjUiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJkZWppd2lsbGlhbXM5QGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJEZWppIiwiZXhwIjoxNzIzNzA4ODUzfQ.qm8sOMQ-EMkyE8no_Dz22UD5N0qqn3nImjvkVWG1UK4`
