import { FavoriteListContainer } from './FavoriteListContainer';

import styles from './favoritePage.module.scss';

export const FavoritePage = (): JSX.Element => {
  return (
    <main className={styles.favoritePage}>
      <h1>좋아요한 영화 목록</h1>
      <FavoriteListContainer />
    </main>
  );
};
