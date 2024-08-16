/* eslint-disable no-console */
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
    console.error("Invite Validation Failed:", validatedFields.error);
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

    console.log(
      "inviteMembers Response:",
      JSON.stringify(
        {
          status: response.status,
          data: response.data,
        },
        undefined,
        2,
      ),
    );

    return {
      data: response.data.data,
      status: response.status,
    };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error(
        "inviteMembers Axios Error:",
        JSON.stringify(
          {
            status: error.response.status,
            error: error.response.data.message || "Failed to send invites.",
            fullResponse: error.response.data,
          },
          undefined,
          2,
        ),
      );
      return {
        error: error.response.data.message || "Failed to send invites.",
        status: error.response.status,
      };
    } else {
      console.error("inviteMembers Unexpected Error:", error);
      return {
        error: "An unexpected error occurred.",
      };
    }
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

    console.log(
      "fetchOrganizations Full Response:",
      JSON.stringify(
        {
          status: response.status,
          organizations,
        },
        undefined,
        2,
      ),
    );

    return {
      data: organizations,
      status: response.status,
    };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error(
        "fetchOrganizations Axios Error:",
        JSON.stringify(
          {
            status: error.response.status,
            error:
              error.response.data.message || "Failed to fetch organizations.",
            fullResponse: error.response.data,
          },
          undefined,
          2,
        ),
      );
      return {
        error: error.response.data.message || "Failed to fetch organizations.",
        status: error.response.status,
      };
    } else {
      console.error("fetchOrganizations Unexpected Error:", error);
      return {
        error: "An unexpected error occurred.",
      };
    }
  }
};
