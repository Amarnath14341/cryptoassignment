import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import { getSelectedCurrency } from '../selectors/getSelectedCurrency';

function HomeHeaderContainer({ selectedCurrency }) {
  return (
    <div className="home-header-container">
      <span>Make you first investment today</span>
      <div className="coin-button-container">
        <Link
          to="/wallet"
          className={selectedCurrency.length ? 'link-enabled' : 'link-disabled'}
        >
          <Button disabled={!selectedCurrency.length} variant="light" size="sm">
            Go To Wallet
          </Button>
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedCurrency: getSelectedCurrency(state),
  };
};

export default connect(mapStateToProps)(HomeHeaderContainer);
