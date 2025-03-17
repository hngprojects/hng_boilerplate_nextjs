import { NextRequest, NextResponse } from 'next/server'
import { getSubdomain, ROOT_DOMAIN } from '~/utils'
import { envConfig } from '~/config/env.config'
import { createFetchUtil, HttpError } from '~/actions/fetchutil'
import { z } from 'zod'

interface User {
  id: string
  email: string
  first_name: string
  last_name: string
  avatar_url: string | null
  is_superadmin: boolean
}

interface Organisation {
  organisation_id: string
  name: string
  user_role: string
  is_owner: boolean
}

interface LoginResponse {
  status_code: number
  message: string
  access_token: string
  data: {
    user: User
    organisations: Organisation[]
  }
}

export async function POST(request: NextRequest) {
  let hostname = request.headers
    .get('host')!
    .replace(/\.localhost(:\d+)?/, `.${ROOT_DOMAIN}`)
  hostname = hostname.replace('www.', '')
  const subdomain = getSubdomain(hostname, ROOT_DOMAIN) as
    | 'php'
    | 'java'
    | 'nestjs'
    | 'csharp'
    | 'python-fastapi'
    | 'golang'
    | ''

  const { id_token } = await request.json()

  if (!id_token) {
    return NextResponse.json(
      { message: 'No idToken provided' },
      { status: 400 }
    )
  }

  let baseurl
  switch (subdomain) {
    case 'php':
      baseurl = envConfig.PHP_BASE_URL
      break
    case 'java':
      baseurl = envConfig.JAVA_BASE_URL
      break
    case 'nestjs':
      baseurl = envConfig.NESTJS_BASE_URL
      break
    case 'csharp':
      baseurl = envConfig.CSHARP_BASE_URL
      break
    case 'python-fastapi':
      baseurl = envConfig.PYTHON_BASE_URL
      break
    case 'golang':
      baseurl = envConfig.GOLANG_BASE_URL
      break
    case '':
      baseurl = envConfig.BASEURL
      break
    default:
      baseurl = envConfig.BASEURL
  }

  if (!baseurl) {
    return NextResponse.json(
      { message: 'Unable to determine backend URL' },
      { status: 500 }
    )
  }

  const api = createFetchUtil({ baseUrl: baseurl })

  try {
    const res = await api<LoginResponse>('/auth/google', {
      method: 'POST',
      body: { id_token: id_token },
    })

    console.log(res, 'response')

    return NextResponse.json({
      data: res.data.user,
      access_token: res.access_token,
      success: true,
    })
  } catch (error) {
    console.dir(error, { depth: null })
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid form data',
          errors: error.errors,
        },
        { status: 400 }
      )
    } else if (error instanceof HttpError) {
      console.error(
        'HTTP Error:',
        error.message,
        'Status:',
        error.response.status
      )
      return NextResponse.json(
        {
          success: false,
          message:
            error.responseBody?.message || `Server error: ${error.message}`,
          statusCode: error.statusCode,
          responseBody: error.responseBody,
        },
        { status: error.statusCode }
      )
    } else {
      return NextResponse.json(
        {
          success: false,
          message: 'An unexpected error occurred',
        },
        { status: 500 }
      )
    }
  }
}

// http://49.12.208.6:3008/api/docs#/Authentication/RegistrationController_googleAuth
