import { clearCart } from "../features/cart/cartSlice";
import { closeModal } from "../features/modal/modalSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function Modal() {
  const dispatch = useDispatch();

  useEffect(() => {
    function addClick(e: MouseEvent) {
      const confirm = document.getElementById("confirm");
      if (e.target !== confirm) dispatch(closeModal());
    }
    const modal = document.getElementById("modal");
    modal?.addEventListener("click", addClick);
    return () => modal?.removeEventListener("click", addClick);
  }, [dispatch]);

  return (
    <div id="modal">
      <div>
        <p>Clear all items in the cart?</p>
        <button
          type="button"
          id="confirm"
          onClick={() => {
            dispatch(clearCart());
            dispatch(closeModal());
          }}
        >
          Confirm
        </button>
        <button
          type="button"
          id="cancel"
          onClick={() => {
            dispatch(closeModal());
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Modal;
