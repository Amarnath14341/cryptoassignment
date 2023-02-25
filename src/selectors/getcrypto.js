import { createSelector } from 'reselect';

export const getCryptoList = (state) => {
  return state.crypto;
};
export const getCrypto = createSelector(
  getCryptoList,
  (cryptoList) => cryptoList,
);
