import { MovieListContainer, SearchInput } from '../../components';
import styles from './MainPage.module.scss';

export const MainPage: React.FC = () => {
  return (
    <div className={styles.mainPage}>
      <SearchInput />
      <MovieListContainer />
    </div>
  );
};
