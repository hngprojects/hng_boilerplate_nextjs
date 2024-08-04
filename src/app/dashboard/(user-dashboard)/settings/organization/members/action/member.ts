import axios from "axios";
import { useEffect, useState } from "react";

import { getApiUrl } from "~/actions/getApiUrl";
import { useToast } from "~/components/ui/use-toast";

const useApiUrl = () => {
  const [apiUrl, setApiUrl] = useState<string>("");
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

// Function to fetch organization members
export const fetchOrganization = async (apiUrl: string) => {
  const response = await axios.get(`${apiUrl}/api/v1/`);
  return response.data;
};

// Function to fetch a member
export const fetchMember = async (apiUrl: string) => {
  const response = await axios.get(`${apiUrl}/api/v1/:org_id/members`);
  return response.data;
};

// Function to update member role
export const updateMemberRole = async (apiUrl: string, data: object) => {
  const response = await axios.patch(`${apiUrl}/api/v1/member/:id`, data);
  return response.data;
};

// Function to delete a member
export const deleteMember = async (apiUrl: string) => {
  const response = await axios.delete(`${apiUrl}/api/v1/members/:id`);
  return response.data;
};

// Function to export members
export const exportMembers = async (apiUrl: string) => {
  const response = await axios.get(`${apiUrl}/api/v1/members/export`);
  return response.data;
};

// Function to generate an invite link
export const generateInviteLink = async (apiUrl: string) => {
  const response = await axios.patch(`${apiUrl}/api/v1/invite/`);
  return response.data;
};

// Function to send invites to members
export const sendInviteToMembers = async (apiUrl: string) => {
  const response = await axios.post(`${apiUrl}/api/v1/invite`);
  return response.data;
};
