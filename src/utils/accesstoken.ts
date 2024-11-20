import Cookies from 'js-cookie';

export const saveAccessToken = (token: string) => Cookies.set('access_token', token, { secure: true });

export const getAccessToken = () => Cookies.get('access_token');

export const clearTokens = () => Cookies.remove('access_token');
