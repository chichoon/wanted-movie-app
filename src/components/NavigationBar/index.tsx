import { useNavigate } from 'react-router-dom';

import styles from './navigationBar.module.scss';

export const NavigationBar = () => {
  const navi = useNavigate();

  const handleSearchButton = () => {
    navi('/');
  };

  const handleFavoriteButton = () => {
    navi('/favorites');
  };
  return (
    <nav className={styles.navBar}>
      <ul className={styles.navList}>
        <li className={styles.navTab}>
          <button type='button' onClick={handleSearchButton}>
            검색하기
          </button>
        </li>
        <li className={styles.navTab}>
          <button type='button' onClick={handleFavoriteButton}>
            즐겨찾기
          </button>
        </li>
      </ul>
    </nav>
  );
};
