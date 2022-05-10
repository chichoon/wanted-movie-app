import styles from './NavigationBar.module.scss';

export const NavigationBar = () => {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.navUl}>
        <li className={styles.navTab}>검색하기</li>
        <li className={styles.navTab}>즐겨찾기</li>
      </ul>
    </nav>
  );
};
