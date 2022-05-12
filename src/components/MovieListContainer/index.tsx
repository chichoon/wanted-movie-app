import { Suspense, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { LoadingIcon } from '../../assets/svgs';
import { useFetchMovie } from '../../hooks/useFetchMovie';
import { useIntersect } from '../../hooks/useIntersect';

import { getMovieData } from '../../services/getMovieData';
import { IMovie, ISearchResult } from '../../types/movies.d';
import { searchValueState } from '../../utils/atoms';
import { MovieBlock } from '../MovieBlock';
import { ContainerMessage } from './ContainerMessage';
import styles from './movieListContainer.module.scss';

export const MovieListContainer = (): JSX.Element => {
  const firstMovieData = useFetchMovie();
  const [searchResult, setSearchResult] = useState<ISearchResult>({
    Response: null,
    totalResults: 0,
    Error: '',
  });
  const [pages, setPages] = useState(1);
  const [movieArray, setMovieArray] = useState<IMovie[]>([]);
  const [isNextPage, setIsNextPage] = useState(true);
  const searchValue = useRecoilValue(searchValueState);

  const getMoreMovie = async () => {
    if (searchResult.totalResults && searchResult.totalResults < pages * 10) {
      setIsNextPage(false);
      return;
    }
    const responseData = await getMovieData(searchValue, pages + 1);
    setSearchResult((prevState) => ({
      Response: responseData?.Response,
      totalResults: prevState?.totalResults,
      Error: responseData?.Error,
    }));
    setMovieArray((prevState) => prevState.concat(responseData?.Search));
    setPages((prevState) => prevState + 1);
  };
  const intersectTarget = useIntersect(getMoreMovie, 0.6);

  useEffect(() => {
    setSearchResult({
      Response: firstMovieData?.Response ?? null,
      totalResults: firstMovieData?.totalResults,
      Error: firstMovieData?.Error,
    });
    setMovieArray(firstMovieData?.Search ?? []);
  }, [firstMovieData]);

  useEffect(() => {
    setMovieArray([]);
  }, [searchValue]);

  const renderMovieContainer = (): JSX.Element | null => {
    if (!firstMovieData) return null;
    if (searchResult.Response === 'False') return <ContainerMessage isLoading={false} message={searchResult.Error} />;
    return (
      <ul className={styles.movieList}>
        {movieArray.map((v, i) => {
          const key = `movie-data-#${i}`;
          return <MovieBlock key={key} movieData={v} />;
        })}
        {isNextPage && (
          <li ref={intersectTarget} className={styles.loadingRef}>
            <LoadingIcon />
          </li>
        )}
      </ul>
    );
  };

  return (
    <div className={styles.movieContainer}>
      <Suspense fallback={<ContainerMessage isLoading message='' />}>{renderMovieContainer()}</Suspense>
    </div>
  );
};
// TODO: Too many results (검색어: a) 예외처리
// TODO: Movies not found (검색어: harry porter) 예외처리
