import { useState } from 'react';
import styles from './SearchInput.module.scss';

export const SearchInput: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className={styles.searchInput}>
      <input type='text' value={searchValue} />
    </div>
  );
};
