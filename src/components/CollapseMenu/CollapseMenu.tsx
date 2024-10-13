import React from 'react';
import styles from './CollapseMenu.module.css';
import { IoIosArrowForward } from 'react-icons/io';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

interface CollapseMenuProps {
  link: string;
  title: string;
  items?: string[];
  parentTitle?: string;
}

const CollapseMenu: React.FC<CollapseMenuProps> = ({ link, title, items, parentTitle: itemTitle }) => {

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const lastSegment = location.pathname.split('/').filter(Boolean).pop();

  const onItemClick = (item:string) => {
    item 
      ?
    setSearchParams({[link]: item})
      :
    setSearchParams({});
  }

  return (
      <div className={`${styles.collapseMenu} ${lastSegment === link ? styles.active : ''}`}>
        {items ?
        <>
          <Link to={link}>
            <button className={styles.collapseMenuTitle} onClick={() => {}}>
              <h3>{title}</h3>
              <div className={styles.collapseMenuArrow}>
                <IoIosArrowForward />
              </div>
            </button>
          </Link>
          <ul className={`${styles.collapseMenuList} ${lastSegment !== link ? styles.opened : ''}`}>
            <li className={styles.collapseMenuListItem}>
              <button className={`${styles.collapseMenuListButton} ${!searchParams.get(link) && styles.checked}`} onClick={() => onItemClick('')}>
                {itemTitle}({items.length})
              </button>
            </li>
            {items.map((item, index) => (
              <li className={styles.collapseMenuListItem} key={index}>
                <button className={`${styles.collapseMenuListButton} ${searchParams.get(link) === item && styles.checked}`} onClick={() => onItemClick(item)}>
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </> :
        <>
          <Link to={link}>
            <button className={styles.collapseMenuTitle}>
              <h3>{title}</h3>
            </button>
          </Link>
        </>
        }
        
      </div>
  );
};

export default CollapseMenu;
