"use client"

import Link from 'next/link';
import styles from './CollapseMenu.module.css'
import { ICollapseMenuProps } from './ICollapseMenuProps';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { IoIosArrowForward } from 'react-icons/io';

const CollapseMenu = ({ link, title, elements, isStatuses }: ICollapseMenuProps) => {

  const parametrName = isStatuses ? 'status' : 'id'
  const pathname = usePathname()
  const router = useRouter();
  const searchParams = useSearchParams();
  const qurentParam = searchParams.get(parametrName);

  const addMultipleParams = (parametrName: string, queryParameter: string) => {
    const currentParams = new URLSearchParams('');
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
          {elements.map(({ id, status, title }) => (
            <li className={styles.collapseMenuListItem} key={id}>
              <button
                className={`${styles.collapseMenuListButton} ${qurentParam === `${isStatuses ? status : id}` && styles.checked}`}
                onClick={() => addMultipleParams(parametrName, `${isStatuses ? status : id}`)}
              >
                {title}
              </button>
            </li>
          ))}
        </ul>
      }
    </div>
  )
};

export default CollapseMenu;
