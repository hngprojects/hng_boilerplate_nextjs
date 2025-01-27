'use server'

import axios from 'axios'
import * as z from 'zod'
import { LoginSchema, RegisterSchema } from '~/schemas'
import { AuthResponse, ErrorResponse } from '~/types'
import { cookies } from 'next/headers'
import { getBaseURL } from './getenv'
import { ROOT_DOMAIN, inDevEnvironment } from '~/utils'

const credentialsAuth = async (
  values: z.infer<typeof LoginSchema>,
  backend?: string
): Promise<AuthResponse | ErrorResponse> => {
  const baseURL = await getBaseURL(backend)
  const validatedFields = LoginSchema.safeParse(values)
  if (!validatedFields.success) {
    return {
      message: 'Something went wrong',
      status_code: 401,
      success: false,
    }
  }
  const { email, password } = validatedFields.data
  const payload = { email, password }
  try {
    const response = await axios.post(`${baseURL}/auth/login`, payload)
    const cookieStore = await cookies()

    const domain = inDevEnvironment ? 'localhost:3000' : ROOT_DOMAIN

    cookieStore.set('GauthToken', response.data.access_token, {
      httpOnly: true,
      secure: !inDevEnvironment,
      sameSite: 'none',
      domain: domain,
      maxAge: 60 * 60 * 24 * 30,
    })

    cookieStore.set('authToken', response.data.access_token, {
      httpOnly: true,
      secure: !inDevEnvironment,
      sameSite: 'none',
      // domain: `dashboard.${domain}`,
      maxAge: 60 * 60 * 24 * 30,
    })

    // const authToken = cookieStore.get('authToken');

    // console.log({ authToken })

    return {
      data: response.data.user,
      access_token: response.data.access_token,
      success: true,
      message: 'login success',
    }
  } catch (error) {
    return {
      success: false,
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

export const registerUser = async (
  values: z.infer<typeof RegisterSchema>,
  backend?: string
) => {
  const validatedFields = RegisterSchema.safeParse(values)
  const baseURL = await getBaseURL(backend)
  if (!validatedFields.success) {
    return {
      error: 'registration  Failed. Please check your inputs.',
    }
  }
  try {
    const response = await axios.post(
      `${baseURL}/auth/register`,
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
//             `${apiUrl}//auth/verify-otp`,
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
    const response = await axios.post(`${baseURL}/auth/request/token`, {
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
