import { createSelector } from 'reselect';

export const getIsCryptoCurrencyLoading = (state) => {
  return state.crypto.loading;
};
export const getCryptoCurrencyLoading = createSelector(
  getIsCryptoCurrencyLoading,
  (isCryptoCurrencyLoading) => isCryptoCurrencyLoading,
);
