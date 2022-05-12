import { ImageNotFoundIcon } from '../../assets/svgs';
import { IMovie } from '../../types/movies.d';
import styles from './movieBlock.module.scss';

interface IMovieBlock {
  movieData: IMovie;
}

export const MovieBlock = ({ movieData }: IMovieBlock): JSX.Element => {
  const { Title, Year, imdbID, Type, Poster } = movieData;

  return (
    <li className={styles.movieBlock}>
      <section className={styles.movieBlockLeft}>
        {Poster === 'N/A' ? (
          <div className={styles.imageNotFoundBlock}>
            <ImageNotFoundIcon className={styles.imageNotFoundIcon} />
          </div>
        ) : (
          <img src={Poster} alt={Title} />
        )}
      </section>
      <section className={styles.movieBlockRight}>
        <span>{imdbID}</span>
        <dl>
          <dt>{Title}</dt>
          <dd>{Year}</dd>
        </dl>
        <span>{Type}</span>
      </section>
    </li>
  );
};
