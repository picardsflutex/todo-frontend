"use client"

import { IAuthProps } from './IAuthProps';
import styles from './Auth.module.css'
import { signOut } from 'next-auth/react';

const Auth = ({ ...props }: IAuthProps) => {



  return <main {...props}>
    <button onClick={() => signOut}>SignOut</button>
  </main>;
};

export default Auth;
