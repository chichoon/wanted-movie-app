import { useState } from 'react';
import { SearchIcon } from '../../assets/svgs';
import styles from './SearchInput.module.scss';

export const SearchInput = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };

  return (
    <div className={styles.searchInput}>
      <form className={styles.searchForm}>
        <SearchIcon className={styles.searchIcon} />
        <input type='text' value={searchValue} placeholder='영화 제목을 입력하세요' onChange={handleInputChange} />
        <button type='submit'>검색</button>
      </form>
    </div>
  );
};
