import React from 'react'
import Register from '~/components/auth/register'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Register | HNG Boilerplate',
  description: `Sign up for an account on the HNG boilerplate. Join our developer-friendly ecosystem today.`,
}

const page = () => {
  return <Register />
}

export default page
