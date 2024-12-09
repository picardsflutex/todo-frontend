import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import axiosInstance from "./lib/utils/axiosInstance"
import { jwtDecode } from "jwt-decode"
import { JwtPayload, Role } from "./lib/types"

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
          name: user.name,
          role: user.role,
          userId: user.id,
          username: user.username
        };
      }
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      if (user) {
        token.userId = user.id;
        token.username = user.username;
        token.role = user.role;
      }
      if (account) {
        token.id = account.providerAccountId;
        token.provider = account.provider;
      }
      return token;
    },
    async session({session, token}) {               
      if(token.provider === 'credentials'){
        session.user = {
          ...session.user,
          id: String(token.userId),
          userId: token.userId as string | number,
          username: token.username,
          role: token.role as Role,
        };
      } else{      
      const response = await axiosInstance.post(`/auth/oauth/${token.provider}`, {
        providerAccountId: token.id,
        email: session.user.email
      })

      const { access_token } = response.data;

      const currentUser = jwtDecode(access_token)
      session.user = {...session.user, ...currentUser}
      }
      return session;
    },
  }
})