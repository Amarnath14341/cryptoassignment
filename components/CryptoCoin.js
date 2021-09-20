import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import { PAGE_NAMES } from '../consts/PAGE_NAMES';
import NumberIncrementersContainer from './NumberIncrementersContainer';

export const CryptoCoin = ({
  value,
  id,
  currentPageName,
  handleButtonClick,
}) => {
  return (
    <Row id={id} className="crypto-coin-conatiner">
      <Col xs={4} className="coin-logo-name-container">
        <div className="coin-logo-container">
          <a href={value.websiteUrl}>
            <img src={value.icon} alt="logo" width="30px" />
          </a>
        </div>
        <div className="coin-name-details-container">
          <span className="coin-name-container">{value.name}</span>
          <span className="coin-symbol-container">{value.symbol}</span>
        </div>
      </Col>
      <Col xs={3} className="coin-value-details-container">
        <div className="coin-value-details-container">
          <span className="coin-price-container">
            ₹{value.price.toFixed(2)}
          </span>
          <span
            className={
              'coin-priceChange1w-container ' +
              (value.priceChange1w > 0 ? 'green-color' : 'red-color')
            }
          >
            {value.priceChange1w}%
          </span>
        </div>
      </Col>
      <Col xs={5} className="coin-add-to-cart-container">
        {currentPageName === PAGE_NAMES.HOME && (
          <div className="coin-button-container">
            <Button
              variant="primary"
              size="sm"
              onClick={() => handleButtonClick(value)}
            >
              Add To Wallet
            </Button>
          </div>
        )}
        {currentPageName === PAGE_NAMES.WALLET && (
          <div className="edit-currency-container">
            <NumberIncrementersContainer value={value} />
          </div>
        )}
      </Col>
    </Row>
  );
};
