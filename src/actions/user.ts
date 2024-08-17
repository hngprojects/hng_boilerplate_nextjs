"use server";

import axios from "axios";
import { getApiUrl } from './getApiUrl';
import { auth } from '~/lib/auth';

export const fetchUserData = async () => {
  try {
    const apiUrl = await getApiUrl();
    const session = await auth();

    
    if (!session?.access_token) {
      return {
        error: "Authentication token is missing.",
        status: 401, 
      };
    }

    // Making the API request
    const response = await axios.get(`${apiUrl}/api/last-login`, {
      headers: {
        Authorization: `Bearer ${session.access_token}`, 
      },
    });

    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return {
        error: error.response.data.message || "Unable to fetch user data.",
        status: error.response.status,
      };
    } else {
      return {
        error: "An unexpected error occurred.",
        status: 500, // Internal Server Error
      };
    }
  }
};
