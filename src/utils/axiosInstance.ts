import axios from 'axios';
import Cookies from 'js-cookie';
import { getAccessToken, saveAccessToken } from './accesstoken';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, 
});

axiosInstance.interceptors.request.use((config) => {
  const access_token = getAccessToken();
  if (access_token) {
    config.headers.Authorization = `Bearer ${access_token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401 && error.config.url === '/auth/refresh') {
      console.error('Session expired, redirecting to login');
      window.location.href = '/';
    }
    
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const { data } = await axios.post(
          '/auth/refresh',
          {},
          { baseURL: process.env.NEXT_PUBLIC_BACKEND, withCredentials: true }
        );

        saveAccessToken(data.access_token);

        originalRequest.headers.Authorization = `Bearer ${data.access_token}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error('Failed to refresh token:', refreshError);

        window.location.href = '/';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
