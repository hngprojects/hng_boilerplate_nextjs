'use server'

import { cache } from 'react'
import { isAxiosError } from 'axios'
import { Calls } from '../axios'

export const getFaqs = cache(async () => {
  const $http = Calls()

  try {
    const response = await $http.get('/faqs')

    return {
      data: response.data.data,
      success: true,
    }
  } catch (error) {
    return {
      success: false,
      message:
        isAxiosError(error) && error.response && error.response.data.message
          ? error.response.data.message
          : 'Something went wrong',
      status_code:
        isAxiosError(error) && error.response
          ? error.response.status
          : undefined,
    }
  }
})
