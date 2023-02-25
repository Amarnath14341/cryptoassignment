import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './homeStyle.css';
import { fetchCryptoCurrencies } from '../actions/fetchcurrencyactions';
import { getCrypto } from '../selectors/getcrypto';
import {
  getCryptoCurrencyLoading,
  getIsUserDataLoading,
  getUserLoading,
} from '../selectors/getCryptoCurrencyLoading';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import TredingCoinsContainer from './TredingCoinsContainer';
import { updatePageNameAction } from '../actions';
import { PAGE_NAMES } from '../consts/PAGE_NAMES';
import HomeHeaderContainer from './HomeHeaderContainer';
import ChartContainer from './chartcontainer';

function HomeContainer({
  cryptoData,
  isCryptoCurrencyLoading,
  fetchCryptoCurrencies,
  updatePageName,
}) {
  useEffect(() => {
    fetchCryptoCurrencies();
    updatePageName(PAGE_NAMES.HOME);
  }, []);

  return isCryptoCurrencyLoading ? (
    <div className="loader-container">
      <Spinner animation="border" variant="primary" />
    </div>
  ) : cryptoData.error ? (
    <h2>cryptoData.error</h2>
  ) : (
    <div>
      <Container>
        <Row>
          <Col className="home-left-container">
            <HomeHeaderContainer />
            <TredingCoinsContainer cryptoCoinsData={cryptoData.coins} />
          </Col>
          <Col className="home-right-container">
            <ChartContainer cryptoCoinsData={cryptoData.coins} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cryptoData: getCrypto(state),
    isCryptoCurrencyLoading: getCryptoCurrencyLoading(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCryptoCurrencies: () => dispatch(fetchCryptoCurrencies()),
    updatePageName: (pageName) => dispatch(updatePageNameAction(pageName)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
