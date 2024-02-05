import { useDispatch } from "react-redux";
import { decrease, increase, removeItem } from "../../features/cart/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";

function CartItem({
  id,
  title,
  price,
  amount,
  img,
}: {
  id: number;
  title: string;
  price: number;
  amount: number;
  img: string;
}) {
  const dispatch = useDispatch();
  return (
    <div className="cart__item">
      <div className="img">
        <img src={img} alt={`image of ${title}`} />
      </div>
      <h3>{title}</h3>
      <div className="cart__item--control">
        <button
          type="button"
          className="sm-btn"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease(id));
          }}
        >
          -
        </button>
        <p>{amount}</p>
        <button
          type="button"
          className="sm-btn"
          onClick={() => dispatch(increase(id))}
        >
          +
        </button>
      </div>
      <p>{`${(amount * price).toFixed(2)} $`}</p>
      <button
        type="button"
        className="sm-btn"
        onClick={() => dispatch(removeItem(id))}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
}

export default CartItem;
