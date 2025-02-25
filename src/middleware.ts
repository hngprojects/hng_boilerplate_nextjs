import { NextRequest, NextResponse } from 'next/server'

import { apiAuthPrefix } from '~/routes'
import { ROOT_DOMAIN } from './utils'

export default async function middleware(request: NextRequest) {
  const { nextUrl } = request

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
  if (isApiAuthRoute) return null

  const url = request.nextUrl
  let hostname = request.headers
    .get('host')!
    .replace(/\.localhost(:\d+)?/, `.${ROOT_DOMAIN}`)
  hostname = hostname.replace('www.', '')
  const searchParams = request.nextUrl.searchParams.toString()
  const path = `${url.pathname}${
    searchParams.length > 0 ? `?${searchParams}` : ''
  }`

  console.log('++++++++++++++++++++++++++++++++++++')
  console.log('HOSTNAME: ', hostname)
  console.log('PATHNAME: ', url.pathname)
  console.log('PATH: ', path)
  console.log('++++++++++++++++++++++++++++++++++++')
  if (hostname == `nestjs.${ROOT_DOMAIN}`) {
    return NextResponse.rewrite(
      new URL(`/nestjs${path === '/' ? '/' : path}`, request.url)
    )
  }
  if (hostname == `php.${ROOT_DOMAIN}`) {
    return NextResponse.rewrite(
      new URL(`/php${path === '/' ? '/' : path}`, request.url)
    )
  }
  if (hostname == `go.${ROOT_DOMAIN}`) {
    return NextResponse.rewrite(
      new URL(`/go${path === '/' ? '/' : path}`, request.url)
    )
  }
  return
}

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
