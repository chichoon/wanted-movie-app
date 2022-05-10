import { atom } from 'recoil';
import { IFavoriteData } from '../Interfaces';

export const favoriteDataState = atom<IFavoriteData>({
  key: '#favoriteDataState',
  default: {
    Movies: [],
    imdbIDs: [],
  },
});
