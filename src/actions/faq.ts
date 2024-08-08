"use server";

import axios from "axios";
import { useSession } from "next-auth/react";
import { auth } from "~/lib/auth";

const apiUrl = process.env.API_URL;

interface Props{
  question:string,
  answer:string
}

interface UpdateProps{
  id:string,
  question:string,
  answer:string
}


export const CreateFaqs = async (payload:Props) => {
  
  // 
  try {
    const session = await auth();

    const response = await axios.post(
      `${apiUrl}/api/v1/faqs`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${session?.access_token}`,
        },
      },
    );

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

export const UpdateFaqs = async (payload:UpdateProps) => {
  
  // 
  try {
    const session = await auth();

    const response = await axios.put(
      `${apiUrl}/api/v1/faqs/${payload?.id}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${session?.access_token}`,
        },
      },
    );

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

export const DeleteFaqs = async (payload:UpdateProps) => {
  
  // 
  try {
    const session = await auth();

    const response = await axios.delete(
      `${apiUrl}/api/v1/faqs/${payload?.id}`,
      {
        headers: {
          Authorization: `Bearer ${session?.access_token}`,
        },
      },
    );

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
