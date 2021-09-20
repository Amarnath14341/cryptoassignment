import { ACTION_NAMES } from '../ACTION_NAMES';

export const incrementAction = (curencyData) => {
  return {
    type: ACTION_NAMES.INCREMENT,
    payload: curencyData,
  };
};

export const decrementAction = (curencyData) => {
  return {
    type: ACTION_NAMES.DECREMENT,
    payload: curencyData,
  };
};

export const deleteItemAction = (curencyItem) => {
  return {
    type: ACTION_NAMES.DELETE_CURRENCY,
    payload: curencyItem,
  };
};

export const addToCartAction = (currencyDetails) => {
  return {
    type: ACTION_NAMES.ADD_TO_CART,
    payload: currencyDetails,
  };
};

export const updatePageNameAction = (pageName) => {
  return {
    type: ACTION_NAMES.UPDATE_PAGE_NAME,
    payload: pageName,
  };
};
