import { atom } from 'recoil';
import { IFavoriteData } from '../../utils/Interfaces';

export const favoriteDataState = atom<IFavoriteData>({
  key: '#favoriteDataState',
  default: {
    Movies: [],
    imdbIDs: [],
  },
});
