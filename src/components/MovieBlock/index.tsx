import { useState } from 'react';
import { useRecoilState } from 'recoil';
import cx from 'classnames';

import { ImageNotFoundIcon, StarIcon } from 'assets/svgs';
import { IMovie } from 'types/movies.d';
import { favoriteDataState } from 'utils/atoms';
import styles from './movieBlock.module.scss';
import { useMount } from 'react-use';

const store = require('store');

interface IMovieBlock {
  movieData: IMovie;
}

export const MovieBlock = ({ movieData }: IMovieBlock): JSX.Element => {
  const { Title, Year, imdbID, Type, Poster } = movieData;
  const [favoriteData, setFavoriteData] = useRecoilState(favoriteDataState);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleStarClick = () => {
    if (!isFavorite) {
      setFavoriteData((prevState) => ({
        Movies: [...prevState.Movies, movieData],
        imdbIDs: [...prevState.imdbIDs, imdbID],
      }));
      setIsFavorite(true);
    } else {
      setFavoriteData((prevState) => {
        const idx = prevState.imdbIDs.indexOf(imdbID);
        return {
          Movies: [...prevState.Movies.slice(0, idx), ...prevState.Movies.slice(idx)] as IMovie[],
          imdbIDs: [...prevState.imdbIDs.slice(0, idx), ...prevState.imdbIDs.slice(idx)] as string[],
        };
      });
      setIsFavorite(false);
    }
    store.set('storageData', favoriteData);
  };
  // TODO: hook이나 별개 로직으로 분리하는 방법 찾기

  useMount(() => {
    if (favoriteData.imdbIDs.includes(imdbID)) setIsFavorite(true);
  });

  return (
    <div className={styles.movieBlock}>
      <section className={styles.movieBlockLeft}>
        {Poster === 'N/A' ? (
          <div className={styles.imageNotFoundBlock}>
            <ImageNotFoundIcon className={styles.imageNotFoundIcon} />
          </div>
        ) : (
          <img src={Poster} alt={Title} />
        )}
      </section>
      <section className={styles.movieBlockMiddle}>
        <span>{imdbID}</span>
        <h2>{Title}</h2>
        <span>
          {Type} ・ {Year}
        </span>
      </section>
      <section className={styles.movieBlockRight}>
        <button
          type='button'
          className={cx(styles.favoriteButton, { [styles.favorited]: isFavorite })}
          onClick={handleStarClick}
        >
          <StarIcon className={styles.favoriteIcon} />
        </button>
      </section>
    </div>
  );
};
