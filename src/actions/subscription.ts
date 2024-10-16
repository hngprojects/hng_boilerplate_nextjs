'use server'

import { Calls } from './axios'
import { getEnvVariables } from './getenv'

export const makeSubscription = async (
  email: string,
  backend: string = 'python'
) => {
  const { python, php } = await getEnvVariables('PYTHON_BASEURL', 'PHP_BASEURL')

  let baseURL
  if (backend === 'python') {
    baseURL = python
  } else if (backend === 'php') {
    baseURL = php
  } else {
    return {
      error: 'Unsupported backend type',
      success: false,
    }
  }

  const $http = Calls(baseURL)

  if (!email) {
    return {
      error: 'Please provide your email',
      success: false,
    }
  }

  const payload = { email }

  try {
    const response = await $http.post('/subscribe', payload)

    return {
      data: response.data,
      success: true,
    }
  } catch (error) {
    return {
      error:
        error instanceof Error
          ? error.message
          : 'An error occurred during subscription',
      success: false,
    }
  }
}
