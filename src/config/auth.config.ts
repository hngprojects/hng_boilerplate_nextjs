import { NextAuthConfig, Session } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import Credentials from 'next-auth/providers/credentials'
import Google from 'next-auth/providers/google'
import { nextLogin, googleAuth } from '~/actions/nextauth'
import { inDevEnvironment } from '~/utils'
import { LoginSchema } from '~/schemas'
import { CustomJWT } from '~/types'

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials)
        if (!validatedFields.success) {
          return null
        }

        const { email, password, rememberMe } = validatedFields.data
        const response = await nextLogin({ email, password, rememberMe })

        if (!response) {
          return null
        }

        if (!response || !('data' in response)) {
          return null
        }

        const user = response.data as CustomJWT
        user.access_token = response.access_token
        return user
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  debug: inDevEnvironment,
  callbacks: {
    async signIn({ account, profile, user }) {
      if (account?.provider === 'google' && profile?.email) {
        return true
      }

      if (account?.provider === 'twitter') {
        return true
      }

      return !!user
    },
    async jwt({ token, user, account }) {
      if (account?.provider === 'google') {
        if (!account?.id_token) {
          return token
        }

        const response = await googleAuth(account?.id_token)

        console.log(response, 'google response')

        if (!response || !('data' in response)) {
          return token
        }

        token = response.data as CustomJWT
        token.access_token = response.access_token
        return token
      }

      return {
        ...token,
        ...user,
      } as CustomJWT
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      const customToken = token as CustomJWT

      console.log(customToken, 'token from res')
      if (!customToken || !customToken.id) {
        return {
          ...session,
          user: {
            id: '',
            first_name: '',
            last_name: '',
            email: '',
            image: '',
          },
          access_token: undefined,
          userOrg: undefined,
          currentOrgId: undefined,
          expires: new Date(0).toISOString(),
        }
      }

      session.user = {
        id: customToken.id as string,
        first_name: customToken.first_name,
        last_name: customToken.last_name,
        image: customToken.avatar_url || '',
        email: customToken.email as string,
      }
      session.access_token = customToken.access_token
      session.userOrg = customToken.organisations

      return session
    },
  },
  pages: {
    signIn: '/login',
    error: '/error',
  },
  secret: process.env.AUTH_SECRET,
  trustHost: true,
} satisfies NextAuthConfig
