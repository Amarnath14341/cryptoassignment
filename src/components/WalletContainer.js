import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import './walletStyle.css';
import { getSelectedCurrency } from '../selectors/getSelectedCurrency';
import { CryptoCoin } from './CryptoCoin';
import { updatePageNameAction } from '../actions';
import { PAGE_NAMES } from '../consts/PAGE_NAMES';
import { getCurrentPageName } from '../selectors/getCurrentPageName';
import { Link } from 'react-router-dom';

function WalletContainer({
  selectedCurrency,
  updatePageName,
  currentPageName,
}) {
  useEffect(() => {
    updatePageName(PAGE_NAMES.WALLET);
  }, []);
  return (
    <div>
      <Container>
        <Row>
          <Col className="wallet-container">
            <Link className="back-link" to="/">
              <Button variant="secondary" size="sm">
                Go To Home
              </Button>
            </Link>
            <h6>Your Wallet</h6>

            {selectedCurrency.map((val, id) => {
              return (
                <CryptoCoin
                  key={id}
                  value={val}
                  id={id}
                  currentPageName={currentPageName}
                />
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentPageName: getCurrentPageName(state),
    selectedCurrency: getSelectedCurrency(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updatePageName: (pageName) => dispatch(updatePageNameAction(pageName)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletContainer);
