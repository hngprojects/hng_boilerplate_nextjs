'use server'

import axios from 'axios'
import * as z from 'zod'
import { envConfig } from '~/config/env.config'
import { LoginSchema, RegisterSchema } from '~/schemas'
import { AuthResponse, ErrorResponse } from '~/types'

const credentialsAuth = async (
  values: z.infer<typeof LoginSchema>
): Promise<AuthResponse | ErrorResponse> => {
  const baseURL = envConfig.BASEURL
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

export const registerUser = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values)
  const baseURL = envConfig.BASEURL
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

export const resendOtp = async (email: string) => {
  const baseURL = process.env.BASEURL
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
