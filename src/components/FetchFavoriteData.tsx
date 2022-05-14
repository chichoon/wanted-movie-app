import { useSetRecoilState } from 'recoil';
import { useMount } from 'react-use';

import { favoriteDataState } from 'utils/atoms';
import { IFavoriteData } from 'types/movies';

const store = require('store');

const INITIAL_FAVORITE: IFavoriteData = {
  Movies: [],
  imdbIDs: [],
};

export const FetchFavoriteData = () => {
  const setFavoriteData = useSetRecoilState(favoriteDataState);

  useMount(() => {
    const storageData = store.get('storageData');
    if (!storageData) {
      store.set('storageData', INITIAL_FAVORITE);
      setFavoriteData(INITIAL_FAVORITE);
    } else setFavoriteData(storageData);
  });

  return null;
};
