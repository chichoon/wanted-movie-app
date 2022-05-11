import { useState } from 'react';
import { useRecoilValue } from 'recoil';

import { searchLoadingState } from '../../utils/atoms';
import { useFetchMovie } from '../../hooks/useFetchMovie';
import { MovieBlock } from '../MovieBlock';
import { LoadingComponent } from './LoadingComponent';

import styles from './movieListContainer.module.scss';

export const MovieListContainer = (): JSX.Element => {
  const [searchPage, setSearchPage] = useState(1);
  const loading = useRecoilValue(searchLoadingState);
  const searchResult = useFetchMovie(searchPage);

  console.log(searchResult);
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
// TODO: Too many results (검색어: a) 예외처리
// TODO: Movies not found (검색어: harry porter) 예외처리
