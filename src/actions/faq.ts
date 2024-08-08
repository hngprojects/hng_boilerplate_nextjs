"use server";

import axios from "axios";

import { auth } from "~/lib/auth";

const apiUrl = process.env.API_URL;

interface Properties {
  question: string;
  answer: string;
  category: string;
}

interface UpdateProperties {
  question: string;
  answer: string;
  category: string;
}

export const CreateFaqs = async (payload: Properties) => {
  //
  try {
    const session = await auth();

    const response = await axios.post(`${apiUrl}/api/v1/faqs`, payload, {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    });

    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    return axios.isAxiosError(error) && error.response
      ? {
          error: error.response.data.message || "Unable to Create FAQS",
          status: error.response.status,
        }
      : {
          error: "An unexpected error occurred.",
        };
  }
};

export const UpdateFaqs = async (payload: UpdateProperties, id: string) => {
  //
  try {
    const session = await auth();

    const response = await axios.put(`${apiUrl}/api/v1/faqs/${id}`, payload, {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    });

    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    return axios.isAxiosError(error) && error.response
      ? {
          error: error.response.data.message || "Unable to Create FAQS",
          status: error.response.status,
        }
      : {
          error: "An unexpected error occurred.",
        };
  }
};

export const DeleteFaqs = async (id: string) => {
  //
  try {
    const session = await auth();

    const response = await axios.delete(`${apiUrl}/api/v1/faqs/${id}`, {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    });

    return {
      message: response.data.message,
      status: response.status,
    };
  } catch (error) {
    return axios.isAxiosError(error) && error.response
      ? {
          error: error.response.data.message || "Unable to Create FAQS",
          status: error.response.status,
        }
      : {
          error: "An unexpected error occurred.",
        };
  }
};
