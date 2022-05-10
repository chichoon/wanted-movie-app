import { atom } from 'recoil';

export const searchLoadingState = atom<boolean>({
  key: '#searchLoadingState',
  default: false,
});
