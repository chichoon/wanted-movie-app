import { atom } from 'recoil';
import { IFavoriteData } from 'types/movies.d';

export const favoriteDataState = atom<IFavoriteData>({
  key: '#favoriteDataState',
  default: {
    Movies: [],
    imdbIDs: [],
  },
});
