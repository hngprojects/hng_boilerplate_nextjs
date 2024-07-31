import { useEffect, useState } from "react";

import { useToast } from "~/components/ui/use-toast";
import { getApiUrl } from "~/utils/getApiUrl";

const useApiUrl = () => {
  const [apiUrl, setApiUrl] = useState<string | null>("");
  const { toast } = useToast();

  useEffect(() => {
    const fetchApiUrl = async () => {
      try {
        const url = await getApiUrl();
        setApiUrl(url);
      } catch {
        toast({
          title: "Error",
          description: "Failed to fetch API URL",
          variant: "destructive",
        });
      }
    };

    fetchApiUrl();
  }, [toast]);

  return apiUrl;
};

export default useApiUrl;

// const fetchMember = async () => {
//   try {
//     await axios.get(`${apiUrl}/api/v1/:org_id/members`);
//   } catch (error) {
//     console.error(error);
//   }
// };

// const updateMemberRole = async (data: object) => {
//   try {
//     await axios.patch(`${apiUrl}/api/v1/member/:id`, data);
//   } catch (error) {
//     console.error(error);
//   }
// };

// const deleteMember = async () => {
//   try {
//     await axios.delete(`${apiUrl}/api/v1/members/:id`);
//   } catch (error) {
//     console.error(error);
//   }
// };

// const exportMembers = async () => {
//   try {
//     await axios.get(`${apiUrl}/api/v1/members/export`);
//   } catch (error) {
//     console.error(error);
//   }
// };

// const generateInviteLink = async () => {
//   try {
//     await axios.patch(`${apiUrl}/api/v1/invite/`);
//   } catch (error) {
//     console.error(error);
//   }
// };

// const sendInviteToMembers = async () => {
//   try {
//     await axios.post(`${apiUrl}/api/v1/invite`);
//   } catch (error) {
//     console.error(error);
//   }
// };
