import { createSelector } from 'reselect';

export const getCurrentPageNameValue = (state) => {
  return state.crypto.pageName;
};

export const getCurrentPageName = createSelector(
  getCurrentPageNameValue,
  (currentPageNameValue) => {
    return currentPageNameValue;
  },
);
