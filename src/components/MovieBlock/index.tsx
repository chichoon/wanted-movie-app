import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import cx from 'classnames';

import { ImageNotFoundIcon, StarIcon } from 'assets/svgs';
import { IMovie } from 'types/movies.d';
import { favoriteDataState } from 'utils/atoms';
import styles from './movieBlock.module.scss';
import ModalPortal from 'components/Modal/ModalPortal';
import { Modal } from 'components/Modal';

const store = require('store');

interface IMovieBlock {
  movieData: IMovie;
}

export const MovieBlock = ({ movieData }: IMovieBlock): JSX.Element => {
  const { Title, Year, imdbID, Type, Poster } = movieData;
  const favoriteData = useRecoilValue(favoriteDataState);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleStarClick = () => {
    setIsModalOpen(true);
  };
  // TODO: hook이나 별개 로직으로 분리하는 방법 찾기

  useEffect(() => {
    if (favoriteData.imdbIDs.includes(imdbID)) setIsFavorite(true);
  }, [favoriteData, imdbID]);

  useEffect(() => {
    store.set('storageData', favoriteData);
  }, [favoriteData]);

  return (
    <>
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
          <h3>{Title}</h3>
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
      <ModalPortal>
        {isModalOpen && (
          <Modal
            isFavorite={isFavorite}
            setIsFavorite={setIsFavorite}
            setIsModalOpen={setIsModalOpen}
            movieData={movieData}
          />
        )}
      </ModalPortal>
    </>
  );
};
