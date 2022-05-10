import { IMovie } from '../../utils/Interfaces';
import styles from './MovieBlock.module.scss';

interface IMovieBlock {
  movieData: IMovie;
}

export const MovieBlock = ({ movieData }: IMovieBlock): JSX.Element => {
  const { Title, Year, imdbID, Type, Poster } = movieData;
  return <li className={styles.movieBlock}>{Title}</li>;
};
