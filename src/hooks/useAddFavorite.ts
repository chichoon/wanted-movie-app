import { useRecoilState } from 'recoil';
import { useMount } from 'react-use';
import _ from 'lodash';

import { IMovie } from 'types/movies';
import { favoriteDataState } from 'utils/atoms';

const store = require('store');

export const useAddFavorite = (movieData: IMovie) => {
  const [favoriteData, setFavoriteData] = useRecoilState(favoriteDataState);
  const isFavorite = true;

  useMount(() => {
    const promise = new Promise<void>((resolve) => {
      setFavoriteData((prevState) => {
        return {
          Movies: _.concat(prevState.Movies, movieData),
          imdbIDs: _.concat(prevState.imdbIDs, movieData.imdbID),
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
