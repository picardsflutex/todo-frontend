// import axios from 'axios';
// import Cookies from 'js-cookie';

// const axiosInstance = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_BACKEND,
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   withCredentials: true,
// });

// axiosInstance.interceptors.request.use((config) => {
//   const access_token = Cookies.get('access_token');

//   if (access_token) {
//     config.headers.Authorization = `Bearer ${access_token}`;
//   }

//   return config;
// });

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     if (error.response?.status === 401 && error.config.url === '/auth/refresh') {
//       console.error('Session expired, redirecting to login');
//       // window.location.href = '/';
//     }

//     const originalRequest = error.config;

//     if (
//       error.response?.status === 401 &&
//       !originalRequest._retry
//     ) {
//       originalRequest._retry = true;

//       try {
//         const { data } = await axios.post(
//           '/auth/refresh',
//           {},
//           { baseURL: process.env.NEXT_PUBLIC_BACKEND, withCredentials: true }
//         );

//         const { access_token } = data;

//         Cookies.set('access_token', access_token, { expires: 7 });

//         originalRequest.headers.Authorization = `Bearer ${access_token}`;
        
//         return axiosInstance(originalRequest);
//       } catch (refreshError) {
//         console.error('Failed to refresh token:', refreshError);

//         // window.location.href = '/';
//         return Promise.reject(refreshError);
//       }
//     }

//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;

import axios from 'axios'


const baseURL = 'http://127.0.0.1:8000'

const local_token = localStorage.getItem('access_token')
let access_token = local_token ? JSON.parse(local_token) : null

const axiosInstance = axios.create({
    baseURL,
    headers:{Authorization: `Bearer ${access_token}`}
});

axiosInstance.interceptors.request.use(async req => {
    if(!authTokens){
        authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null
        req.headers.Authorization = `Bearer ${authTokens?.access}`
    }

    const response = await axios.post(`${baseURL}/api/token/refresh/`, {
        refresh: authTokens.refresh
      });

    localStorage.setItem('access_token', JSON.stringify(response.data))
    req.headers.Authorization = `Bearer ${response.data.access}`
    return req
})


export default axiosInstance;