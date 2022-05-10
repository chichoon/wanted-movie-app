import { atom } from 'recoil';
import { ISearchResult } from '../../utils/Interfaces';

export const searchResultState = atom<ISearchResult | undefined>({
  key: 'searchResultState',
  default: undefined,
});
