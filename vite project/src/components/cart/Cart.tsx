import { useSelector } from "react-redux";
import { RootState } from "../../store";
import CartItem from "./CartItem";

function CartContainer() {
  const { cartItems, amount, total } = useSelector(
    (store: RootState) => store.cart
  );

  if (amount < 1) {
    return (
      <h3 className="container empty-message">Your cart is currently empty!</h3>
    );
  }
  return (
    <div className="container cart">
      <div className="cart__items">
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <h4>
        Total: <span>{`${total.toFixed(2)} $`}</span>
      </h4>
    </div>
  );
}

export default CartContainer;
