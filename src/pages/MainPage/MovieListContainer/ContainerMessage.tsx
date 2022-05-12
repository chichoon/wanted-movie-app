import { LoadingIcon, SadIcon } from 'assets/svgs';
import styles from './movieListContainer.module.scss';

interface IErrorMessageProps {
  isLoading: boolean;
  message: string | undefined;
}

export const ContainerMessage = ({ isLoading, message }: IErrorMessageProps): JSX.Element => {
  return (
    <div className={styles.containerMessage}>
      {isLoading ? <LoadingIcon className={styles.loadingIcon} /> : <SadIcon />}
      <h3>{isLoading ? 'Loading...' : message}</h3>
    </div>
  );
};
