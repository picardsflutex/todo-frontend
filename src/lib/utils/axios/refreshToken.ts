import mem from "mem";

import { axiosPublic } from "./axiosPublic";

export type Tokens = {
  access_token: string,
  refresh_token: string,
}

const refreshTokenFn = async () => {
  const localSession = localStorage.getItem("session")
  const currentSession : Tokens = localSession ? JSON.parse(localSession) : null;
  
  try {
    const response = await axiosPublic.post(
      "/auth/refresh",
      {},
      {
        headers: {
          Authorization: `Bearer ${currentSession.refresh_token}`,
        },
      }
    );

    const session : Tokens = response.data
    if (!session)
      localStorage.removeItem("session");

    localStorage.setItem("session", JSON.stringify(session));

    return session;
  } catch (error) {
    localStorage.removeItem("session");
  }
};

const maxAge = 10000;

export const memoizedRefreshToken = mem(refreshTokenFn, {
  maxAge,
});