/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from 'next/server'

import {
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
  superAdminRoutes,
} from '~/routes'
import { auth } from './auth'
import { inDevEnvironment, ROOT_DOMAIN } from './utils'
import { cookies } from 'next/headers'

export default async function middleware(request: NextRequest) {
  const { nextUrl } = request
  const session = await auth()
  const cookieStore = await cookies()

  const isLoggedIn = session !== null
  const isSuperAdmin = session?.user?.is_superadmin === true

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
  const isAuthRoute = authRoutes.includes(nextUrl.pathname)
  const isSuperAdminRoute = superAdminRoutes.includes(nextUrl.pathname)

  const authToken = cookieStore.get('authToken')
  const domain = inDevEnvironment ? '.localhost' : `.${ROOT_DOMAIN}`

  cookieStore.set('authToken', session?.access_token as string, {
    httpOnly: true,
    secure: !inDevEnvironment,
    sameSite: false,
    domain,
    maxAge: 60 * 60 * 24 * 30,
  })

  console.log({ authToken })

  if (isApiAuthRoute) return null

  const url = request.nextUrl
  let hostname = request.headers
    .get('host')!
    .replace(/\.localhost(:\d+)?/, `.${ROOT_DOMAIN}`)

  hostname = hostname.replace('www.', '')
  const searchParameters = request.nextUrl.searchParams.toString()
  const path = `${url.pathname}${
    searchParameters.length > 0 ? `?${searchParameters}` : ''
  }`

  // Rewrites for dashboard pages and dev subdomains
  if (hostname == `dashboard.${ROOT_DOMAIN}`) {
    if (!isLoggedIn && !isAuthRoute) {
      return NextResponse.redirect(
        new URL(`/login?callbackUrl=${nextUrl.pathname}`, nextUrl)
      )
    } else if (isLoggedIn && isAuthRoute) {
      return NextResponse.redirect(new URL('/', nextUrl))
    }
    if (isSuperAdminRoute && !isSuperAdmin) {
      return NextResponse.redirect(new URL('/dashboard', nextUrl))
    }
    return NextResponse.rewrite(
      new URL(`/dashboard${path === '/' ? '/' : path}`, request.url)
    )
  }

  return
}

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
