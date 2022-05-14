import { useRecoilState } from 'recoil';
import { useMount } from 'react-use';
import _ from 'lodash';

import { favoriteDataState } from 'utils/atoms';
import { IMovie } from 'types/movies';

const store = require('store');

export const useDeleteFavorite = (movieData: IMovie) => {
  const [favoriteData, setFavoriteData] = useRecoilState(favoriteDataState);
  const isFavorite = false;

  useMount(() => {
    const promise = new Promise<void>((resolve) => {
      setFavoriteData((prevState) => {
        return {
          Movies: _.filter(prevState.Movies, (value) => value.imdbID !== movieData.imdbID),
          imdbIDs: _.pull(prevState.imdbIDs, movieData.imdbID),
        };
      });
      resolve();
    });
    promise.then(() => {
      store.set('storageData', favoriteData);
    });
  });
  return { favoriteData, isFavorite };
};
