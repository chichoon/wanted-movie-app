import { useState } from 'react';
import { useRecoilValue } from 'recoil';

import { searchLoadingState } from '../../utils/atoms';
import { useFetchMovie } from '../../hooks/useFetchMovie';
import { MovieBlock } from '../MovieBlock';

import styles from './movieListContainer.module.scss';
import { ContainerMessage } from './ContainerMessage';

export const MovieListContainer = (): JSX.Element => {
  const [searchPage, setSearchPage] = useState(1);
  const loading = useRecoilValue(searchLoadingState);
  const searchResult = useFetchMovie(searchPage);

  const renderMovieContainer = (): JSX.Element | null => {
    if (loading || searchResult?.Response === 'False')
      return <ContainerMessage loading={loading} message={searchResult?.Error} />;
    return (
      <ul className={styles.movieList}>
        {searchResult?.Search?.map((v, i) => {
          const key = `movie-data-#${i}`;
          return <MovieBlock key={key} movieData={v} />;
        })}
      </ul>
    );
  };

  return <div className={styles.movieContainer}>{renderMovieContainer()}</div>;
};
// TODO: Too many results (검색어: a) 예외처리
// TODO: Movies not found (검색어: harry porter) 예외처리
