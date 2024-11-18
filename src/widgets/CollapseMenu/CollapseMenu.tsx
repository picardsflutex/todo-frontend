"use client"

import Link from 'next/link';
import styles from './CollapseMenu.module.css'
import { ICollapseMenuProps } from './ICollapseMenuProps';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { IoIosArrowForward } from 'react-icons/io';

const CollapseMenu = ({ link, title, elements }: ICollapseMenuProps) => {

  const parametrName = title.toLowerCase()
  const pathname = usePathname()
  const router = useRouter();
  const searchParams = useSearchParams();
  const qurentParam = searchParams?.get(parametrName);

  const addMultipleParams = (parametrName: string, queryParameter: string) => {
    const currentParams = new URLSearchParams(searchParams?.toString() || '');
    currentParams.set(parametrName, queryParameter);

    router.push(`?${currentParams.toString()}`);
  };

  return (
    <div className={`${styles.collapseMenu} ${pathname === link && styles.active}`}>
      <Link className={styles.collapseLink} href={link}></Link>
      <div className={styles.collapseMenuTitle}>
        <h3>{title}</h3>
        <div className={styles.collapseMenuArrow}>
          <IoIosArrowForward />
        </div>
      </div>
      {
        elements &&
        <ul className={`${styles.collapseMenuList} ${pathname !== link && styles.opened}`}>
          <li className={styles.collapseMenuListItem}>
            <button
              className={`${styles.collapseMenuListButton} ${!qurentParam && styles.checked}`}
              onClick={() => addMultipleParams(parametrName, '')}
            >
              All {title?.toLowerCase()} ({elements.length})
            </button>
          </li>
          {elements.map((item, index) => (
            <li className={styles.collapseMenuListItem} key={index}>
              <button
                className={`${styles.collapseMenuListButton} ${qurentParam === item && styles.checked}`}
                onClick={() => addMultipleParams(parametrName, item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      }
    </div>
  )
};

export default CollapseMenu;
