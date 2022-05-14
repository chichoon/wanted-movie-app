import { useSetRecoilState } from 'recoil';
import _ from 'lodash';

import { favoriteDataState } from 'utils/atoms';
import ModalPortal from 'components/MovieBlock/ModalPortal';
import { IMovie } from 'types/movies';
import styles from './modal.module.scss';

interface IModalType {
  isFavorite: boolean;
  setIsFavorite: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  movieData: IMovie;
}

export const Modal = ({ isFavorite, setIsFavorite, setIsModalOpen, movieData }: IModalType) => {
  const { Title, Year, imdbID, Type } = movieData;
  const setFavoriteData = useSetRecoilState(favoriteDataState);

  const addFavorite = () => {
    setFavoriteData((prevState) => {
      return {
        Movies: _.concat(prevState.Movies, movieData),
        imdbIDs: _.concat(prevState.imdbIDs, movieData.imdbID),
      };
    });
  };

  const deleteFavorite = () => {
    setFavoriteData((prevState) => {
      return {
        Movies: _.filter(prevState.Movies, (value) => value.imdbID !== movieData.imdbID),
        imdbIDs: _.filter(prevState.imdbIDs, (value) => value !== movieData.imdbID),
      };
    });
  };

  const handleFavoriteButtonClick = async () => {
    if (isFavorite) deleteFavorite();
    else addFavorite();
    setIsFavorite((prevState) => !prevState);
    setIsModalOpen(false);
  };

  const handleCloseButtonClick = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalPortal>
      <div className={styles.modalBackground}>
        <div className={styles.modalContainer}>
          <h2>{isFavorite ? '즐겨찾기에서 제거하시겠습니까?' : '즐겨찾기에 추가하시겠습니까?'}</h2>
          <section className={styles.modalDescription}>
            <span>{imdbID}</span>
            <h3>{Title}</h3>
            <span>
              {Type} ・ {Year}
            </span>
          </section>
          <section className={styles.modalButton}>
            <button type='button' onClick={handleFavoriteButtonClick}>
              {isFavorite ? '즐겨찾기 제거' : '즐겨찾기'}
            </button>
            <button type='button' onClick={handleCloseButtonClick}>
              취소
            </button>
          </section>
        </div>
      </div>
    </ModalPortal>
  );
};
