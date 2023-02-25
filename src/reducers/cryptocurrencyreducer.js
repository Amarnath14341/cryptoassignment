import { ACTION_NAMES } from '../ACTION_NAMES';
import {
  FEATCH_CRYTO_CURRENCIES_FAILURE,
  FEATCH_CRYTO_CURRENCIES_REQUEST,
  FEATCH_CRYTO_CURRENCIES_SUCCESS,
} from '../consts/cryptorequesttypes';
import { deleteCrrencyReducer } from './deleteCrrencyReducer';
import { updateCurrencyQtyReducer } from './updateCurrencyQtyReducer';
import { updatePageNameReducer } from './updatePageNameReducer';
import { updateSelectedCrrencyReducer } from './updateSelectedCrrencyReducer';

const initialState = {
  loading: false,
  coins: [],
  error: '',
  currentSelectedCurrency:[],
  pageName: '',
};

const cryptoCurrencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FEATCH_CRYTO_CURRENCIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FEATCH_CRYTO_CURRENCIES_SUCCESS:
      return {
        ...state,
        loading: false,
        coins: action.payload,
        error: '',
      };
    case FEATCH_CRYTO_CURRENCIES_FAILURE:
      return {
        ...state,
        loading: false,
        coins: [],
        error: action.payload,
      };
    case ACTION_NAMES.ADD_TO_CART:
    return updateSelectedCrrencyReducer(state, action.payload);
    case ACTION_NAMES.UPDATE_PAGE_NAME:
    return updatePageNameReducer(state, action.payload);
    case ACTION_NAMES.INCREMENT:
    case ACTION_NAMES.DECREMENT:
    return updateCurrencyQtyReducer(state, action.payload);
    case ACTION_NAMES.DELETE_CURRENCY:
    return deleteCrrencyReducer(state, action.payload);
    default:
      return state;
  }
};

export default cryptoCurrencyReducer;
