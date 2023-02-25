export const updateSelectedCrrencyReducer = (state, payload) => {
  if (!payload) {
    return state;
  }

  const isSelectedCurrenyAvailable = state.currentSelectedCurrency.find(
    (item) => item.symbol === payload.symbol,
  );
  if (isSelectedCurrenyAvailable) {
    return state;
  }

  return {
    ...state,
    currentSelectedCurrency: [...state.currentSelectedCurrency, payload],
  };
};
