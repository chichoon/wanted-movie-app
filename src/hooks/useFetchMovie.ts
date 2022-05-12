import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import { ISearchResult, IMovie } from 'types/movies.d';
import { getMovieData } from 'services/getMovieData';
import { searchValueState } from 'utils/atoms';

interface IFetchedData extends ISearchResult {
  Search?: Array<IMovie>;
}

const INITIAL_DATA: IFetchedData = {
  Response: 'False',
  totalResults: 0,
  Error: 'Unknown Error.',
  Search: [],
};

export const useFetchMovie = (): IFetchedData => {
  const searchValue = useRecoilValue(searchValueState);
  const [searchResult, setSearchResult] = useState(INITIAL_DATA);

  useEffect(() => {
    const fetchSearchResult = async () => {
      const responseData = await getMovieData(searchValue, 1);
      setSearchResult(responseData);
    };
    searchValue !== '' && fetchSearchResult();
  }, [searchValue]);
  return searchResult;
};
