import axios from "axios";

import { memoizedRefreshToken, Tokens } from "./refreshToken";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND;

axios.interceptors.request.use(
  async (config) => {
    const localSession = localStorage.getItem("session")
    const session : Tokens = localSession ? JSON.parse(localSession) : null;

    if (session.access_token) {
      config.headers.Authorization = `Bearer ${session.access_token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error?.config;

    if (error?.response?.status === 401 && !config?.sent) {
      config.sent = true;

      const result = await memoizedRefreshToken();

      if (result?.access_token) {
        config.headers = {
          ...config.headers,
          authorization: `Bearer ${result?.access_token}`,
        };
      }

      return axios(config);
    }
    return Promise.reject(error);
  }
);

export const axiosPrivate = axios;
