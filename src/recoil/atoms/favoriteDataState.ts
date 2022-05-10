import { atom } from 'recoil';
import { IMovie } from '../../utils/Interfaces';

export const favoriteDataState = atom<Array<IMovie>>({
  key: '#favoriteDataState',
  default: [],
});
