import { combineReducers } from 'redux';
import cryptoCurrencyReducer from './cryptocurrencyreducer';

const allReducers = combineReducers({
  crypto: cryptoCurrencyReducer,
});

export default allReducers;
