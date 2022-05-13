import cx from 'classnames';

import ModalPortal from 'components/Modal/ModalPortal';
import styles from './modal.module.scss';

interface IModalType {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal = ({ setIsModalOpen }: IModalType) => {
  const handleModalButton = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalPortal>
      <div className={styles.modalBackground}>
        <div className={styles.modalContainer}>
          <header>컨텐츠1</header>
          <main>
            컨텐츠2
            <button type='button' onClick={handleModalButton}>
              닫기
            </button>
          </main>
        </div>
      </div>
    </ModalPortal>
  );
};
