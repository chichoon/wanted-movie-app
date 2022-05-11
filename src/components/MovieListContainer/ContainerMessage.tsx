import { LoadingIcon, SadIcon } from '../../assets/svgs';
import styles from './movieListContainer.module.scss';

interface IErrorMessageProps {
  loading: boolean;
  message: string | undefined;
}

export const ContainerMessage = ({ loading, message }: IErrorMessageProps): JSX.Element => {
  return (
    <div className={styles.containerMessage}>
      {loading ? <LoadingIcon className={styles.loadingIcon} /> : <SadIcon />}
      <h3>{loading ? 'Loading...' : message}</h3>
    </div>
  );
};
