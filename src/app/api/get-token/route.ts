// import { NextApiRequest, NextApiResponse } from 'next'
// import { cookies } from 'next/headers'
// import Cors from 'cors'

// const cors = Cors({
//     methods: ['GET'],
//     origin: /\.localhost/, // Adjust this regex to match your subdomains
//     credentials: true,
// })

// function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: Function) {
//     return new Promise((resolve, reject) => {
//         fn(req, res, (result: any) => {
//             if (result instanceof Error) {
//                 return reject(result)
//             }
//             return resolve(result)
//         })
//     })
// }

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     await runMiddleware(req, res, cors)

//     if (req.method !== 'GET') {
//         return res.status(405).end()
//     }

//     const cookieStore = await cookies()
//     const authToken = cookieStore.get('authToken')

//     if (authToken) {
//         res.status(200).json({ authToken: authToken.value })
//     } else {
//         res.status(401).json({ error: 'No auth token found' })
//     }
// }

// // 'use client'

// // export async function getAuthToken(): Promise<string | null> {
// //     try {
// //         const response = await fetch('https://yourdomain.com/api/get-auth-token', {
// //             method: 'GET',
// //             credentials: 'include', // This is crucial for including cookies in the request
// //         })

// //         if (response.ok) {
// //             const data = await response.json()
// //             return data.authToken
// //         } else {
// //             console.error('Failed to fetch auth token')
// //             return null
// //         }
// //     } catch (error) {
// //         console.error('Error fetching auth token:', error)
// //         return null
// //     }
// // }

import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const cookieStore = await cookies()
  const authToken = cookieStore.get('authToken')
  const allCookie = cookieStore.getAll()
  console.log('allCookie', allCookie)

  const origin = request.headers.get('origin')
  console.log(request.headers)
  if (!authToken) {
    return NextResponse.json({ error: 'No auth token found' }, { status: 401 })
  }

  // Validate the origin
  const allowedOrigins = process.env.ALLOWED_ORIGINS
    ? process.env.ALLOWED_ORIGINS.split(',')
    : []

  if (!origin || !allowedOrigins.includes(origin)) {
    return new NextResponse(null, { status: 403 })
  }

  return NextResponse.json(
    { authToken: authToken.value },
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': origin,
        'Access-Control-Allow-Credentials': 'true',
      },
    }
  )
}

export async function OPTIONS(request: NextRequest) {
  const origin = request.headers.get('origin')
  const allowedOrigins = process.env.ALLOWED_ORIGINS
    ? process.env.ALLOWED_ORIGINS.split(',')
    : []

  if (!origin || !allowedOrigins.includes(origin)) {
    return new NextResponse(null, { status: 403 })
  }

  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Max-Age': '86400',
    },
  })
}
