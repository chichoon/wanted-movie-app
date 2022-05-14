import { useRecoilValue } from 'recoil';

import { MovieBlock } from 'components';
import { IMovie } from 'types/movies';
import { favoriteDataState } from 'utils/atoms';

import styles from './favoriteListContainer.module.scss';

export const FavoriteListContainer = () => {
  const favoriteData = useRecoilValue(favoriteDataState);

  return (
    <div className={styles.favoriteContainer}>
      <ul>
        {favoriteData.Movies.map((v: IMovie) => (
          <li key={`fav-list-${v.imdbID}`}>
            <MovieBlock movieData={v} />
          </li>
        ))}
      </ul>
    </div>
  );
};
