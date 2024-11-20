export type Role = "ADMIN" | "MANAGER" | "SEO" | "USER";

export type JwtPayload = {
  name: string | null;
  id: number;
  email: string;
  username: string | null;
  role: Role;
}