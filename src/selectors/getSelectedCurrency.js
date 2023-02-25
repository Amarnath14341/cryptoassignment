import { createSelector } from 'reselect';

export const getSelectedCurrencyList = (state) => {
  return state.crypto.currentSelectedCurrency;
};
export const getSelectedCurrency = createSelector(
  getSelectedCurrencyList,
  (selectedCurrencyList) => selectedCurrencyList,
);
