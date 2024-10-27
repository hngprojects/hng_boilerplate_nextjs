'use server'

import * as z from 'zod'
import { LoginSchema } from '~/schemas'
import { getBaseURL } from './getenv'
import { createFetchUtil, HttpError } from './fetchutil'
import { User } from '~/types'
import { cookies } from 'next/headers'

interface LoginResponse {
  user: User
  access_token: string
}

export const nextLogin = async (values: z.infer<typeof LoginSchema>) => {
  const cookieStore = await cookies()
  const backend = cookieStore.get('backend')?.value
  const baseURL = await getBaseURL(backend)

  if (!baseURL) {
    return {
      status: 500,
      message: 'Base URL not defined',
      success: true,
    }
  }
  const api = createFetchUtil({ baseUrl: baseURL })

  const response = await api<{ data: LoginResponse; access_token: string }>(
    '/auth/login',
    {
      method: 'POST',
      body: values,
    }
  )

  return {
    data: response.data.user,
    access_token: response.access_token,
    success: true,
  }
}

export const googleAuth = async (idToken: string) => {
  const cookieStore = await cookies()
  const backend = cookieStore.get('backend')?.value

  console.log(backend)
  const baseURL = await getBaseURL(backend)
  if (!baseURL) {
    return {
      status: 500,
      message: 'Base URL not defined',
      success: true,
    }
  }
  const api = createFetchUtil({ baseUrl: baseURL })

  try {
    const res = await api<{ data: LoginResponse; access_token: string }>(
      '/auth/google',
      {
        method: 'POST',
        body: { id_token: idToken },
      }
    )

    return {
      data: res.data.user,
      access_token: res.access_token,
      success: true,
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: 'Invalid form data',
        errors: error.errors,
      }
    } else if (error instanceof HttpError) {
      console.error(
        'HTTP Error:',
        error.message,
        'Status:',
        error.response.status
      )
      return {
        success: false,
        message:
          error.responseBody?.message || `Server error: ${error.message}`,
        statusCode: error.statusCode,
        responseBody: error.responseBody,
      }
    } else {
      return { success: false, message: 'An unexpected error occurred' }
    }
  }
}

export const setBackend = async (backend?: string) => {
  const cookieStore = await cookies()
  if (backend) {
    cookieStore.set('backend', backend)
  }

  return {
    sucess: true,
  }
}
