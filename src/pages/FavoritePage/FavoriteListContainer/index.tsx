import styles from './favoriteListContainer.module.scss';

import { MovieBlock } from 'components';
import { useRecoilValue } from 'recoil';

import { IMovie } from 'types/movies';
import { favoriteDataState } from 'utils/atoms';

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
