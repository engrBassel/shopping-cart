import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { openModal } from "../features/modal/modalSlice";

function Header() {
  const amount = useSelector((store: RootState) => store.cart.amount);
  const dispatch = useDispatch();
  return (
    <header className="container">
      <h1>Shopping Cart</h1>
      <div className="header__icon">
        <FontAwesomeIcon icon={faCartShopping} size="3x" />
        <h2>{amount}</h2>
      </div>
      <button
        type="button"
        onClick={() => {
          dispatch(openModal());
        }}
      >
        Clear cart
      </button>
    </header>
  );
}

export default Header;
