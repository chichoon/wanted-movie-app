import { useState, useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { ISearchResult } from '../utils/Interfaces';
import { getMovieData } from '../services/getMovieData';
import { searchLoadingState, searchValueState } from '../utils/atoms';

export const useFetchMovie = (page: number): ISearchResult | undefined => {
  const searchValue = useRecoilValue(searchValueState);
  const setLoading = useSetRecoilState(searchLoadingState);
  const [searchResult, setSearchResult] = useState(undefined);

  useEffect(() => {
    const fetchSearchResult = async () => {
      setLoading(true);
      try {
        const response = await getMovieData(searchValue, page);
        setSearchResult(response.data);
      } catch (error) {
        setSearchResult(undefined);
      } finally {
        setLoading(false);
      }
    };
    searchValue !== '' && fetchSearchResult();
  }, [page, searchValue, setLoading]);
  return searchResult;
};
