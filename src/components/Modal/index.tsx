import cx from 'classnames';

import ModalPortal from 'components/Modal/ModalPortal';
import { IMovie } from 'types/movies';
import styles from './modal.module.scss';

interface IModalType {
  isFavorite: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  movieData: IMovie;
}

export const Modal = ({ isFavorite, setIsModalOpen, movieData }: IModalType) => {
  const { Title, Year, imdbID, Type } = movieData;
  const handleModalButton = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalPortal>
      <div className={styles.modalBackground}>
        <div className={styles.modalContainer}>
          <header>{isFavorite ? '즐겨찾기에서 제거하시겠습니까?' : '즐겨찾기에 추가하시겠습니까?'}</header>
          <main>
            <span>{imdbID}</span>
            <h2>{Title}</h2>
            <span>
              {Type} ・ {Year}
            </span>
          </main>
          <footer>
            <button type='button'>{isFavorite ? '즐겨찾기 제거' : '즐겨찾기'}</button>
            <button type='button' onClick={handleModalButton}>
              취소
            </button>
          </footer>
        </div>
      </div>
    </ModalPortal>
  );
};
