import { MovieListContainer } from './MovieListContainer';
import { SearchInput } from './SearchInput';

import styles from './MainPage.module.scss';

export const MainPage = (): JSX.Element => {
  return (
    <main className={styles.mainPage}>
      <SearchInput />
      <MovieListContainer />
    </main>
  );
};
