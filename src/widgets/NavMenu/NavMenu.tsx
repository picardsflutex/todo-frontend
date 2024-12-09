"use client"

import styles from './NavMenu.module.css'

import Link from 'next/link';

import { RxExit } from 'react-icons/rx';
import { Logo } from '@/shared';
import { DASHBOARD_ROUTES } from '@/lib/routes/routes';
import { usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import Cookie from 'js-cookie';

const NavMenu = () => {
  const pathname = usePathname()

  const handleSighnOut = () => {
    signOut({ redirect: true, redirectTo: 'api/auth/signin' })
    // Cookie.remove('access_token')
  }

  return <nav className={styles.navigation}>
    <ul className={styles.navigationList}>
      <div className={styles.logo}>
        <Logo />
      </div>
      {DASHBOARD_ROUTES.map((route) => (
        <li
          className={
            `${styles.navigationItem} ${pathname === route.path ? styles.active : ''}`
          }
          key={route.name}
        >
          <Link className={styles.navigationLink} href={route.path}>
            <route.icon />
          </Link>
        </li>
      ))}
    </ul>
    <button className={styles.button} onClick={() => handleSighnOut()}>
      <RxExit />
    </button>
  </nav>;
};

export default NavMenu;
