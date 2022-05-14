import { useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { searchValueState } from 'utils/atoms/searchValueState';
import { SearchIcon } from 'assets/svgs';

import styles from './searchInput.module.scss';

export const SearchInput = (): JSX.Element => {
  const [inputValue, setinputValue] = useState('');
  const setSearchValue = useSetRecoilState(searchValueState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setinputValue(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchValue(inputValue);
  };

  return (
    <div className={styles.searchInput}>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <SearchIcon className={styles.searchIcon} />
        <input type='text' value={inputValue} placeholder='영화 제목을 입력하세요' onChange={handleInputChange} />
        <button type='submit'>검색</button>
      </form>
    </div>
  );
};
