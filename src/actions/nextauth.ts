'use server'

import * as z from 'zod'
import { LoginSchema } from '~/schemas'
import { createFetchUtil } from './fetchutil'
import { User } from '~/types'
import { cookies } from 'next/headers'
import { envConfig } from '~/config/env.config'

export interface LoginResponse {
  user: User
  access_token: string
}

export const nextLogin = async (values: z.infer<typeof LoginSchema>) => {
  const baseURL = process.env.BASEURL

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
  const res = await fetch(`${envConfig.APP_URL}/api/social/google`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id_token: idToken }),
  })

  if (!res.ok) {
    throw new Error(`Error: ${res.status}`)
  }

  const data: { data: User; access_token: string } = await res.json()
  console.log(data, 'action')

  return {
    data: data.data,
    access_token: data.access_token,
    success: true,
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
