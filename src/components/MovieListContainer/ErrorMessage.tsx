import { SadIcon } from '../../assets/svgs';
import styles from './movieListContainer.module.scss';

interface IErrorMessageProps {
  errorString: string | undefined;
}

export const ErrorMessage = ({ errorString }: IErrorMessageProps): JSX.Element => {
  return (
    <div className={styles.errorMessage}>
      {errorString ? (
        <>
          <SadIcon />
          <h3>{errorString}</h3>
        </>
      ) : null}
    </div>
  );
};
