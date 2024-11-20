import { Role } from "./types"

declare module "next-auth" {

  interface User {
    userId: number | string,
    username?: string | null,
    role: Role
  }

  interface Account {
    providerAccountId: string
    provider: string
  }
}

import { JWT } from "next-auth/jwt"
 
declare module "next-auth/jwt" {
  interface JWT {
    userId?: number | string,
    username?: string | null,
    role?: Role
  }
}