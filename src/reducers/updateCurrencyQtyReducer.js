export const updateCurrencyQtyReducer = (state, payload) => {
  if (!payload) {
    return state;
  }

  const updatedItems = state.currentSelectedCurrency.map((el) =>
    el.symbol === payload.symbol ? payload : el,
  );

  return {
    ...state,
    currentSelectedCurrency: updatedItems,
  };
};
