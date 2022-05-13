import cx from 'classnames';

import ModalPortal from 'components/Modal/ModalPortal';
import styles from 'modal.module.scss';

interface IModalType {
  isHidden: boolean;
}

export const Modal = ({ isHidden }: IModalType) => {
  return (
    <ModalPortal>
      <div className={cx(styles.modalContainer, { [styles.isHidden]: isHidden })}>
        <header>컨텐츠1</header>
        <main>컨텐츠2</main>
      </div>
    </ModalPortal>
  );
};
