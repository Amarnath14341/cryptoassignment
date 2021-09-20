import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCryptoCurrencies } from '../actions/fectCurrencyActions';
import { getCrypto } from '../selectors/getCrypto';
import {
  getIsUserDataLoading,
  getUserLoading,
} from '../selectors/getCryptoCurrencyLoading';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CryptoCoin } from './CryptoCoin';
import { addToCartAction } from '../actions';
import { getCurrentPageName } from '../selectors/getCurrentPageName';

function TredingCoinsContainer({
  cryptoCoinsData,
  addToCart,
  currentPageName,
}) {
  const handleButtonClick = (value) => {
    addToCart(value);
  };

  return (
    <div className="trending-coins-container">
      <h6>Trending Coins</h6>
      {cryptoCoinsData.map((val, id) => {
        return (
          <CryptoCoin
            key={id}
            value={val}
            id={id}
            currentPageName={currentPageName}
            handleButtonClick={handleButtonClick}
          />
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentPageName: getCurrentPageName(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (curencyDetails) => dispatch(addToCartAction(curencyDetails)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TredingCoinsContainer);
