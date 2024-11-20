"use client"

import styles from './NavMenu.module.css'

import Link from 'next/link';

import { RxExit } from 'react-icons/rx';
import { Logo } from '@/shared';
import { DASHBOARD_ROUTES } from '@/routes/routes';
import { usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';

const NavMenu = () => {
  const pathname = usePathname()


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
    <button className={styles.button} onClick={() => signOut({ redirect: true, redirectTo: '/dashboard/projects' })}>
      <RxExit />
    </button>
  </nav>;
};

export default NavMenu;
