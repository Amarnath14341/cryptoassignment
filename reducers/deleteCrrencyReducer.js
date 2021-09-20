export const deleteCrrencyReducer = (state, payload) => {
  if (!payload) {
    return state;
  }

  const updateCurrencyItems = state.currentSelectedCurrency.filter(
    (item) => item.symbol !== payload.symbol,
  );

  if (!updateCurrencyItems) {
    return state;
  }

  return {
    ...state,
    currentSelectedCurrency: updateCurrencyItems,
  };
};
