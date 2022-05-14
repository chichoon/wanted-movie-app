import { Suspense } from 'react';
import { useRecoilState } from 'recoil';
import { useUnmount } from 'react-use';

import { searchValueState } from 'utils/atoms';
import { fetchWrappedMovieData } from 'services';
import { ContainerMessage } from './ContainerMessage';
import { MovieList } from './MovieList';

import styles from './movieListContainer.module.scss';

export const MovieListContainer = (): JSX.Element => {
  const [searchValue, setSearchValue] = useRecoilState(searchValueState);

  const res = fetchWrappedMovieData(searchValue, 1);

  useUnmount(() => {
    setSearchValue('');
  });

  return (
    <div className={styles.movieContainer}>
      {searchValue === '' ? (
        <ContainerMessage isLoading={false} message='Movie not found!' />
      ) : (
        <Suspense fallback={<ContainerMessage isLoading />}>
          <MovieList resource={res} />
        </Suspense>
      )}
    </div>
  );
};
// TODO: Suspense & Lazy loading 적용해보기
