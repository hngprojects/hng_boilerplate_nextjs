import axios from "axios";
import { useEffect, useState } from "react";

import { useToast } from "~/components/ui/use-toast";
import { getApiUrl } from "~/utils/getApiUrl";

// Custom hook to fetch API URL
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
  try {
    const response = await axios.get(`${apiUrl}/api/v1/`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Function to fetch a member
export const fetchMember = async (apiUrl: string) => {
  try {
    const response = await axios.get(`${apiUrl}/api/v1/:org_id/members`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Function to update member role
export const updateMemberRole = async (apiUrl: string, data: object) => {
  try {
    const response = await axios.patch(`${apiUrl}/api/v1/member/:id`, data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Function to delete a member
export const deleteMember = async (apiUrl: string) => {
  try {
    const response = await axios.delete(`${apiUrl}/api/v1/members/:id`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Function to export members
export const exportMembers = async (apiUrl: string) => {
  try {
    const response = await axios.get(`${apiUrl}/api/v1/members/export`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Function to generate an invite link
export const generateInviteLink = async (apiUrl: string) => {
  try {
    const response = await axios.patch(`${apiUrl}/api/v1/invite/`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Function to send invites to members
export const sendInviteToMembers = async (apiUrl: string) => {
  try {
    const response = await axios.post(`${apiUrl}/api/v1/invite`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
