import { IMovie } from '../../utils/Interfaces';
import styles from './MovieBlock.module.scss';

export const MovieBlock = (movieData: IMovie): JSX.Element => {
  const { Title, Year, imdbID, Type, Poster } = movieData;
  return <li className={styles.movieBlock}>{Title}</li>;
};
