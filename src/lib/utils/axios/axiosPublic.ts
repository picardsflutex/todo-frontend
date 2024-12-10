import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true
});