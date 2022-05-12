import { ImageNotFoundIcon } from 'assets/svgs';
import { IMovie } from 'types/movies.d';
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
        <h2>{Title}</h2>
        <span>
          {Type} ・ {Year}
        </span>
      </section>
    </li>
  );
};
