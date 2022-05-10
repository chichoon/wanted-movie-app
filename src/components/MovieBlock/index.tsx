import { IMovie } from '../../utils/Interfaces';
import styles from './movieBlock.module.scss';

interface IMovieBlock {
  movieData: IMovie;
}

export const MovieBlock = ({ movieData }: IMovieBlock): JSX.Element => {
  const { Title, Year, imdbID, Type, Poster } = movieData;
  return (
    <li className={styles.movieBlock}>
      <section className={styles.movieBlockLeft}>
        <img src={Poster} alt={Title} />
      </section>
      <section className={styles.movieBlockRight}>
        <h2>{Title}</h2>
        <span>{Year}</span>
        <span>{imdbID}</span>
        <span>{Type}</span>
      </section>
    </li>
  );
};
