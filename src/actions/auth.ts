'use server'

import axios from 'axios'
import * as z from 'zod'

import { LoginSchema, RegisterSchema } from '~/schemas'
import { AuthResponse, ErrorResponse } from '~/types'
import { getBaseURL } from './getenv'

const credentialsAuth = async (
  values: z.infer<typeof LoginSchema>
): Promise<AuthResponse | ErrorResponse> => {
  const baseURL = await getBaseURL()
  const validatedFields = LoginSchema.safeParse(values)
  if (!validatedFields.success) {
    return {
      message: 'Something went wrong',
      status_code: 401,
    }
  }
  const { email, password } = validatedFields.data
  const payload = { email, password }
  try {
    const response = await axios.post(`${baseURL}/auth/login`, payload)

    return {
      data: response.data.user,
      access_token: response.data.access_token,
    }
  } catch (error) {
    return {
      message:
        axios.isAxiosError(error) &&
        error.response &&
        error.response.data.message
          ? error.response.data.message
          : 'Something went wrong',
      status_code:
        axios.isAxiosError(error) && error.response
          ? error.response.status
          : undefined,
    }
  }
}

export const registerUser = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values)
  const baseURL = await getBaseURL()
  if (!validatedFields.success) {
    return {
      error: 'registration  Failed. Please check your inputs.',
    }
  }
  try {
    const response = await axios.post(
      `${baseURL}/api/v1/auth/register`,
      validatedFields.data
    )

    return {
      status: response.status,
      data: response.data,
    }
  } catch (error) {
    return axios.isAxiosError(error) && error.response
      ? {
          error: error.response.data.message || 'Registration failed.',
          status: error.response.status,
        }
      : {
          error: 'An unexpected error occurred.',
        }
  }
}

// export const verifyOtp = async (values: z.infer<typeof OtpSchema>) => {
//     const token = values.token;
//     const email = values.email;

//     const payload = { token, email };

//     try {
//         const response = await axios.post(
//             `${apiUrl}/api/v1/auth/verify-otp`,
//             payload,
//         );
//         return {
//             status: response.status,
//             message: response.data.message,
//             data: response.data,
//         };
//     } catch (error) {
//         return axios.isAxiosError(error) && error.response
//             ? {
//                 error: error.response.data.message || "OTP verification failed.",
//                 status: error.response.status,
//             }
//             : {
//                 error: "An unexpected error occurred.",
//             };
//     }
// };

export const resendOtp = async (email: string) => {
  const baseURL = await getBaseURL()
  try {
    const response = await axios.post(`${baseURL}/api/v1/auth/request/token`, {
      email,
    })

    return {
      status: response.status,
      message: response.data.message,
    }
  } catch (error) {
    return axios.isAxiosError(error) && error.response
      ? {
          error: error.response.data.message || 'Resend OTP failed.',
          status: error.response.status,
        }
      : {
          error: 'An unexpected error occurred.',
        }
  }
}

export { credentialsAuth }
