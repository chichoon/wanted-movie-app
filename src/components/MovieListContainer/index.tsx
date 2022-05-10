import { useState } from 'react';
import { useRecoilState } from 'recoil';

import { searchValueState } from '../../utils/atoms/searchValueState';
import { useFetchMovie } from '../../utils/hooks/useFetchMovie';
import { MovieBlock } from '../MovieBlock';

import styles from './MovieListContainer.module.scss';

export const MovieListContainer = (): JSX.Element => {
  const [searchValue, setSearchValue] = useRecoilState(searchValueState);
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
