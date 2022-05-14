import { LoadingIcon, SadIcon } from 'assets/svgs';

import styles from './movieListContainer.module.scss';

interface IErrorMessageProps {
  isLoading: boolean;
  message?: string | undefined;
}

export const ContainerMessage = ({ isLoading, message }: IErrorMessageProps): JSX.Element => {
  const getErrorMessageKR = (): string | undefined => {
    if (isLoading) return 'Loading...';
    if (message === 'Movie not found!') return '검색 결과가 없습니다.';
    if (message === 'Too many results.') return '검색 결과가 너무 많습니다.';
    return message;
  };

  return (
    <div className={styles.containerMessage}>
      {isLoading ? <LoadingIcon className={styles.loadingIcon} /> : <SadIcon />}
      <h3>{getErrorMessageKR()}</h3>
    </div>
  );
};
