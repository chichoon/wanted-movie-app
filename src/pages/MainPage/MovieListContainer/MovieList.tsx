import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { useRecoilValue } from 'recoil';
import _ from 'lodash';

import { useIntersect } from 'hooks';
import { searchValueState } from 'utils/atoms';
import { fetchMovieData } from 'services';
import { IMovie } from 'types/movies';
import { ContainerMessage } from './ContainerMessage';
import { MovieBlock } from 'components';
import { LoadingIcon } from 'assets/svgs';

import styles from './movieListContainer.module.scss';

interface IMovieListData {
  resource: {
    read: () => AxiosResponse<any, any> | null;
  };
}

export const MovieList = ({ resource }: IMovieListData): JSX.Element => {
  const searchResult = resource.read();
  const totalResults = searchResult?.data.totalResults;
  const response = searchResult?.data.Response;
  const searchValue = useRecoilValue(searchValueState);
  const [movieArray, setMovieArray] = useState<IMovie[]>([]);
  const [isNextPage, setIsNextPage] = useState(true);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    setPages(1);
  }, [searchValue]);

  const getMoreMovie = async () => {
    if (totalResults && totalResults < pages * 10) {
      setIsNextPage(false);
      return;
    }
    const responseData = await fetchMovieData(searchValue, pages + 1);
    if (responseData.Response === 'True') {
      setMovieArray((prevState) => _.uniqBy(prevState.concat(responseData?.Search), 'imdbID'));
      setPages((prevState) => prevState + 1);
    }
  };

  useEffect(() => {
    const arrTemp = _.uniqBy(searchResult?.data.Search as IMovie[], 'imdbID');
    setMovieArray(arrTemp);
  }, [searchValue, searchResult]);

  const intersectTarget = useIntersect(getMoreMovie, 0.6);

  if (!movieArray) return <ContainerMessage isLoading={false} message='검색 결과가 없습니다.' />;
  if (response === 'False') return <ContainerMessage isLoading={false} message={searchResult?.data.Error} />;
  return (
    <ul>
      {movieArray?.map((v, i) => {
        const key = `movie-data-#${i}`;
        return (
          <li key={key}>
            <MovieBlock movieData={v} />
          </li>
        );
      })}
      {isNextPage && (
        <li ref={intersectTarget} className={styles.loadingRef}>
          <LoadingIcon />
        </li>
      )}
    </ul>
  );
};
