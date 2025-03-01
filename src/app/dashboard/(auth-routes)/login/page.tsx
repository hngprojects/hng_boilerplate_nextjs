import React from 'react'
import Login from '~/components/auth/login'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login | HNG Boilerplate',
  description: `Access your account on the HNG boilerplate. Secure and seamless authentication for developers.`,
}

const page = () => {
  return <Login />
}

export default page
