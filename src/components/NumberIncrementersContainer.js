import { decrementAction, deleteItemAction, incrementAction } from '../actions';
import { connect } from 'react-redux';

function NumberIncrementersContainer({
  value,
  incrementQty,
  decreaseQty,
  deleteItem,
}) {
  const handleIncrementItem = () => {
    const qtyValue = value.qty ? value.qty + 1 : 1;
    const updateCurrencyData = { ...value, ...{ qty: qtyValue } };
    incrementQty(updateCurrencyData);
  };

  const handleDecreaseItem = () => {
    const qtyValue = value.qty ? value.qty - 1 : 0;
    const updateCurrencyData = { ...value, ...{ qty: qtyValue } };
    decreaseQty(updateCurrencyData);
  };

  const handleDeleteItem = () => {
    deleteItem(value);
  };

  return (
    <>
      <button className="decrement-button" onClick={handleDecreaseItem}>
        -
      </button>
      <input className="inputne qty-input" value={value.qty ? value.qty : 0} />
      <button className="increment-button" onClick={handleIncrementItem}>
        +
      </button>
      <button className="delete-button" onClick={handleDeleteItem}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-trash"
          viewBox="0 0 16 16"
        >
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
          <path
            fill-rule="evenodd"
            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
          />
        </svg>
      </button>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementQty: (incValue) => dispatch(incrementAction(incValue)),
    decreaseQty: (decValue) => dispatch(decrementAction(decValue)),
    deleteItem: (deleteItem) => dispatch(deleteItemAction(deleteItem)),
  };
};

export default connect(null, mapDispatchToProps)(NumberIncrementersContainer);
