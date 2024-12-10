"use client"

import { IAuthProps } from './IAuthProps';
import styles from './Auth.module.css'
import { axiosPublic } from '@/lib/utils';

const Auth = ({ ...props }: IAuthProps) => {

  const signIn = async () => {
    const response = await axiosPublic.post(`/auth/signin`, {
      email: 'picardsflutex1@gmail.com',
      password: '12341234'
    })
    localStorage.setItem("session", JSON.stringify(response.data))
  }

  return <main {...props}>
    <button onClick={() => signIn()}>SingIn</button>
  </main>;
};

export default Auth;
