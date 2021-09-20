import { combineReducers } from 'redux';
import cryptoCurrencyReducer from './cryptoCurrencyReducer';

const allReducers = combineReducers({
  crypto: cryptoCurrencyReducer,
});

export default allReducers;
