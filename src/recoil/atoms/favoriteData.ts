import { atom } from 'recoil';
import { IMovie } from '../../utils/Interfaces';

export const favoriteData = atom<Array<IMovie>>({
  key: 'favoriteData',
  default: [],
});
