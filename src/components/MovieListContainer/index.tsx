import { useState } from 'react';
import { useRecoilValue } from 'recoil';

import { searchLoadingState } from '../../utils/atoms';
import { useFetchMovie } from '../../utils/hooks/useFetchMovie';
import { MovieBlock } from '../MovieBlock';
import { LoadingComponent } from './LoadingComponent';

import styles from './movieListContainer.module.scss';

export const MovieListContainer = (): JSX.Element => {
  const [searchPage, setSearchPage] = useState(1);
  const loading = useRecoilValue(searchLoadingState);
  const searchResult = useFetchMovie(searchPage);

  return (
    <div className={styles.movieContainer}>
      {loading ? (
        <LoadingComponent />
      ) : (
        <ul className={styles.movieList}>
          {searchResult?.Search.map((v, i) => {
            const key = `movie-data-#${i}`;
            return <MovieBlock key={key} movieData={v} />;
          })}
        </ul>
      )}
    </div>
  );
};
