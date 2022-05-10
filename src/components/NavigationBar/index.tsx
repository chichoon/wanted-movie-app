import styles from './navigationBar.module.scss';

export const NavigationBar = () => {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.navList}>
        <li className={styles.navTab}>
          <button type='button'>검색하기</button>
        </li>
        <li className={styles.navTab}>
          <button type='button'>즐겨찾기</button>
        </li>
      </ul>
    </nav>
  );
};
