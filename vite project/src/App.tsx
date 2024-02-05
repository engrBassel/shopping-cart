import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { useEffect } from "react";
import { Header, Cart, Modal } from "./components";
import { calcTotal, getCartItems } from "./features/cart/cartSlice";
import "./App.css";

function App() {
  const { cartItems, isLoading } = useSelector(
      (store: RootState) => store.cart
    ),
    { isOpen } = useSelector((store: RootState) => store.modal),
    dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(calcTotal());
  }, [cartItems, dispatch]);

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  if (isLoading) {
    return <h1 className="loading">Loading...</h1>;
  }

  return (
    <>
      {isOpen && <Modal />}
      <Header />
      <Cart />
    </>
  );
}

export default App;
