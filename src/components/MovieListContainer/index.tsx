import { useState } from 'react';

import { useFetchMovie } from '../../utils/hooks/useFetchMovie';
import { MovieBlock } from '../MovieBlock';

import styles from './MovieListContainer.module.scss';

export const MovieListContainer = (): JSX.Element => {
  const [searchPage, setSearchPage] = useState(1);
  const { searchResult, loading } = useFetchMovie(searchPage);

  return (
    <div className={styles.movieContainer}>
      <ul className={styles.movieList}>
        {searchResult?.Search.map((v, i) => {
          const key = `movie-data-#${i}`;
          return <MovieBlock key={key} movieData={v} />;
        })}
      </ul>
    </div>
  );
};
