import styles from './favoriteListContainer.module.scss';

import { IFavoriteData } from 'types/movies.d';
import { Suspense } from 'react';
import { FavoriteList } from './FavoriteList';

export const FavoriteListContainer = () => {
  return (
    <div className={styles.favoriteContainer}>
      <Suspense fallback={<p>Loading...</p>}>
        <FavoriteList />
      </Suspense>
    </div>
  );
};
