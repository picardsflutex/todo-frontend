import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import axiosInstance from "./utils/axiosInstance"
import { jwtDecode } from "jwt-decode"
import { JwtPayload } from "./types"
import { saveAccessToken } from "./utils/accesstoken"

export type additionalData = {
  user_id: number,
  role: string,
  token: string
}
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google,
    GitHub,
    Credentials({
      credentials: {
        email: {label: 'email', type: 'email', required: true},
        password: {label: 'password', type: 'password', required: true},
        action: { label: 'action', type: 'hidden', required: true, value: 'signin' },
      },
      authorize: async ({action, email, password}) => {
        const response = await axiosInstance.post(`/auth/${action}`, {
          email,
          password
        })

        const { access_token } = response.data;

        const user:JwtPayload = jwtDecode(access_token)
        
        return {
          id: String(user.id),
          email: user.email,
          name: user.name
        };
      }
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.id = account.providerAccountId;
        token.provider = account.provider;
      }
      return token;
    },
    async session({session, token}) {
      const response = await axiosInstance.post(`/auth/oauth/${token.provider}`, {
        providerAccountId: token.id,
        email: session.user.email
      })

      const { access_token } = response.data;
      saveAccessToken(access_token)

      const currentUser = jwtDecode(access_token)
      session.user = {...session.user, ...currentUser}
      return session;
    },
  },
})