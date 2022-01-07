import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from 'db/prisma'

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'Email',
      id: 'credentials',
      async authorize (credentials, req) {
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        const { email, password } = credentials
        let user = null
        try {
          user = await prisma.user.findFirst({
            where: {
              email,
              password
            },
            select: {
              email: true,
              role: true,
              id: true,
              createdAt: true,
              name: true,
              labId: true,
              password: false
            }
          })
        } catch (error) {
          console.log(error)
        }
        if (user === null || user === false) {
          return null
        }
        return user
      }
    })
  ],
  secret: process.env.SECRET,
  session: {
    jwt: true,
    strategy: 'jwt' | 'database',
    maxAge: 30 * 24 * 60 * 60 // 30 days
  },
  jwt: {
    secret: process.env.SECRET,
    signingKey: process.env.SIGN_IN_KEY,
    encryption: true,
    encryptionKey: process.env.ENCRYPTION_KEY
    // encode: async ({ secret, token, maxAge }) => {},
    // decode: async ({ secret, token, maxAge }) => {},
  },
  pages: {
    signIn: '/', // Displays signin buttons
    // signOut: '/auth/signout', // Displays form with sign out button
    error: '/' // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // Used for check email page
  },
  callbacks: {
    async signIn ({ user, account, profile }) {
      if (typeof user?.email === typeof undefined) {
        return false
      }
      return true
    },
    async session ({ session, token }) {
      // console.log('Session token')
      // console.log(token)
      if (typeof token !== typeof undefined) {
        session.token = token
      }
      // console.log('session callback returning')
      // console.log(session)
      return session
    },
    async jwt ({ token, user }) {
      // console.log('JWT Token User')
      // console.log(token.user)
      if (typeof user !== typeof undefined) {
        token.user = user
      }
      return token
    }
    // redirect ({ url, baseUrl }) {
    //   if (url.startsWith(baseUrl)) return url
    //   // Allows relative callback URLs
    //   else if (url.startsWith('/')) return new URL(url, baseUrl).toString()
    //   return baseUrl
    // }
  },
  events: {
    async signIn (user, acc) {
      // console.log('[USER_EVENTS]: ', user, acc)
      return user
    }
    // async signout (token, session) {
    // The message object will contain one of these depending on if you use JWT or database persisted sessions:

    // token: The JWT token for this session.
    // session: The session object from your adapter that is being ended
    // }
  }
})
