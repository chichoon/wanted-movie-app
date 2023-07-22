import { Suspense, memo } from 'react';
import { useRecoilState } from 'recoil';
import { useUnmount } from 'react-use';

import { searchValueState } from 'utils/atoms';
import { fetchWrappedMovieData } from 'services';
import { ContainerMessage } from './ContainerMessage';
import { MovieList } from './MovieList';

import styles from './movieListContainer.module.scss';
import { ErrorBoundary } from 'react-error-boundary';

// eslint-disable-next-line react/display-name
const MemoizedErrorFallback = memo(({ error }: { error: Error }) => {
  return <div>Something went wrong! {error.message}</div>;
});

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
        <ErrorBoundary FallbackComponent={MemoizedErrorFallback}>
          <Suspense fallback={<ContainerMessage isLoading />}>
            <MovieList resource={res} />
          </Suspense>
        </ErrorBoundary>
      )}
    </div>
  );
};
