import axios from 'axios';
import {
  FEATCH_CRYTO_CURRENCIES_FAILURE,
  FEATCH_CRYTO_CURRENCIES_REQUEST,
  FEATCH_CRYTO_CURRENCIES_SUCCESS,
} from '../consts/cryptorequesttypes';

export const fetchCryptoCurrenciesRequest = () => {
  return {
    type: FEATCH_CRYTO_CURRENCIES_REQUEST,
  };
};

export const fetchCryptoCurrenciesSuccess = (coins) => {
  return {
    type: FEATCH_CRYTO_CURRENCIES_SUCCESS,
    payload: coins,
  };
};

export const fetchCryptoCurrenciesFailuer = (error) => {
  return {
    type: FEATCH_CRYTO_CURRENCIES_FAILURE,
    payload: error,
  };
};

export const fetchCryptoCurrencies = (error) => {
  return (dispatch) => {
    dispatch(fetchCryptoCurrenciesRequest());
    axios
      .get('https://api.coinstats.app/public/v1/coins?skip=0&limit=100¤cy=INR')
      .then((response) => {
        const coins = response.data.coins;
        dispatch(fetchCryptoCurrenciesSuccess(coins));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchCryptoCurrenciesFailuer(errorMsg));
      });
  };
};
