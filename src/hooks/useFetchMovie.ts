import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import { ISearchResult, IMovie } from '../types/movies.d';
import { getMovieData } from '../services/getMovieData';
import { searchValueState } from '../utils/atoms';

interface IFetchedData extends ISearchResult {
  Search?: Array<IMovie>;
}

export const useFetchMovie = (): IFetchedData | null => {
  const searchValue = useRecoilValue(searchValueState);
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    const fetchSearchResult = async () => {
      try {
        const responseData = await getMovieData(searchValue, 1);
        setSearchResult(responseData);
      } catch (error) {
        setSearchResult(null);
      }
    };
    searchValue !== '' && fetchSearchResult();
  }, [searchValue]);
  return searchResult;
};
