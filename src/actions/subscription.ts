'use server'

import { Calls } from './axios'
import { getBaseURL } from './getenv'

export const makeSubscription = async (email: string, backend: string = '') => {
  const baseURL = await getBaseURL(backend)

  if (!baseURL) {
    return {
      message: 'Unable to determine backend URL',
      success: false,
    }
  }

  const $http = Calls(baseURL)

  if (!email) {
    return {
      message: 'Please provide your email',
      success: false,
    }
  }

  const payload = { email }

  try {
    const response = await $http.post('/newsletter-subscription', payload)

    return {
      data: response.data,
      success: true,
      message: 'Subscribed',
    }
  } catch (error) {
    return {
      message:
        error instanceof Error
          ? error.message
          : 'An error occurred during subscription',
      success: false,
    }
  }
}
