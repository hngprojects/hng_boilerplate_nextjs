"use server";

import axios from "axios";
import * as z from "zod";

import { auth } from "~/lib/auth";
import { getApiUrl } from "./getApiUrl";

// Schema for validating email input
const inviteSchema = z.object({
  emails: z.string().nonempty("Emails are required"),
  org_id: z.string().optional(),
});

export const inviteMembers = async (emails: string, org_id?: string) => {
  const apiUrl = await getApiUrl();
  const session = await auth();

  const validatedFields = inviteSchema.safeParse({ emails, org_id });
  if (!validatedFields.success) {
    return {
      error: "Invite Failed. Please check your inputs.",
    };
  }

  try {
    const response = await axios.post(
      `${apiUrl}/api/v1/organisations/invites/send`,
      {
        emails: emails.split(",").map((email) => email.trim()), // Convert emails string to an array
        org_id, // Use organization id if provided
      },
      {
        headers: {
          Authorization: `Bearer ${session?.access_token}`,
        },
      },
    );

    return {
      data: response.data.data,
      status: response.status,
    };
  } catch (error) {
    return axios.isAxiosError(error) && error.response
      ? {
          error: error.response.data.message || "Failed to send invites.",
          status: error.response.status,
        }
      : {
          error: "An unexpected error occurred.",
        };
  }
};

export const fetchOrganizations = async () => {
  const apiUrl = await getApiUrl();
  const session = await auth();

  try {
    const response = await axios.get(`${apiUrl}/api/v1/organisations`, {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    });

    // Extracting the relevant data
    const organizations = response.data.data.map(
      (org: { id: string; name: string }) => ({
        id: org.id,
        name: org.name,
      }),
    );

    return {
      data: organizations,
      status: response.status,
    };
  } catch (error) {
    return axios.isAxiosError(error) && error.response
      ? {
          error:
            error.response.data.message || "Failed to fetch organizations.",
          status: error.response.status,
        }
      : {
          error: "An unexpected error occurred.",
        };
  }
};

export const acceptInvite = async (inviteLink: string) => {
  const apiUrl = await getApiUrl();
  const session = await auth();

  // Extract the token from the invite link
  const token = inviteLink.split("?")[1]; // Assuming the token is the only query parameter

  if (!token) {
    return {
      error: "Invalid invite link. No token found.",
    };
  }

  try {
    const response = await axios.post(
      `${apiUrl}/api/v1/organisations/invites/accept`,
      {
        invite_token_guid: token,
      },
      {
        headers: {
          Authorization: `Bearer ${session?.access_token}`,
        },
      },
    );

    // Handle the response as needed
    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    return axios.isAxiosError(error) && error.response
      ? {
          error: error.response.data.message || "Failed to accept invite.",
          status: error.response.status,
        }
      : {
          error: "An unexpected error occurred.",
        };
  }
};

export const generateInviteLink = async (
  org_id: string,
  invite_token: string,
) => {
  const apiUrl = await getApiUrl();
  const session = await auth();

  try {
    const response = await axios.get(
      `${apiUrl}/api/v1/organisations/${org_id}/invites`,
      {
        params: { invite_token },
        headers: {
          Authorization: `Bearer ${session?.access_token}`,
        },
      },
    );

    // Extract the invite link from the nested data object
    const inviteLink = response.data.data.invite_link;

    return {
      data: inviteLink,
      status: response.status,
    };
  } catch (error) {
    return axios.isAxiosError(error) && error.response
      ? {
          error:
            error.response.data.message || "Failed to generate invite link.",
          status: error.response.status,
        }
      : {
          error: "An unexpected error occurred.",
        };
  }
};
