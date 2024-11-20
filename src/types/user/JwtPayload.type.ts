export type JwtPayload = {
  name: string | null;
  id: number;
  email: string;
  username: string | null;
  role: string;
}