import { MovieListContainer, SearchInput } from '../../components';
import styles from './MainPage.module.scss';

export const MainPage = (): JSX.Element => {
  return (
    <div className={styles.mainPage}>
      <SearchInput />
      <MovieListContainer />
    </div>
  );
};
