import { forwardRef, useImperativeHandle, useRef, useContext } from "react";
import { createPortal } from "react-dom";
import Cart from "./Cart";

const CartModal = forwardRef(function Modal({ title, action }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      className="bg-custom-100 w-[40%] h-[15rem] rounded-md p-4 backdrop-opacity-90"
      ref={dialog}
    >
      <h2 className="text-custom-200 text-2xl font-semibold font-serif ...">
        {title}
      </h2>
      <Cart />
      <form method="dialog" className="flex justify-end items-center mt-4">
        {action}
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default CartModal;
