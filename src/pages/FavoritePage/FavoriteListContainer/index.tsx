import styles from './favoriteListContainer.module.scss';

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
