import React, { useState } from 'react';
import styles from './CollapseMenu.module.css';
import { IoIosArrowForward } from 'react-icons/io';

interface CollapseMenuProps {
  title: string;
  items: string[];
  itemTitle: string;
  onItemClick: (item: string) => void;
}

const CollapseMenu: React.FC<CollapseMenuProps> = ({ title, items, itemTitle, onItemClick }) => {
  const [active, setActive] = useState(false);
  const [checked, setChecked] = useState('');

  const openCloseMenu = () => {
    setActive(!active);
  };

  return (
    <section className={`${styles.collapseMenu} ${active ? styles.active : ''}`}>
      <button className={styles.collapseMenuTitle} onClick={openCloseMenu}>
        <h3>{title}</h3>
        <div className={styles.collapseMenuArrow}>
          <IoIosArrowForward />
        </div>
      </button>
      <ul className={`${styles.collapseMenuList} ${!active ? styles.opened : ''}`}>
        <li className={styles.collapseMenuListItem}>
          <button className={`${styles.collapseMenuListButton} ${checked == '' && styles.checked}`} onClick={() => { }}>
            {itemTitle}({items.length})
          </button>
        </li>
        {items.map((item, index) => (
          <li className={styles.collapseMenuListItem} key={index}>
            <button className={`${styles.collapseMenuListButton} ${checked == item && styles.checked}`} onClick={() => onItemClick(item)}>
              {item}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CollapseMenu;
