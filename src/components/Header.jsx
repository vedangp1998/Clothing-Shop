import Logo from "/logo.png";
import CartModal from "./CartModal";
import { useRef, useContext } from "react";
import Cartcontext from "../store/shoping-cart-context";

const Header = ({}) => {
  const { items } = useContext(Cartcontext);

  const modal = useRef();

  const cartQuantity = items.length;

  const handleOpenCartClick = () => {
    modal.current.open();
  };

  let modalActions = (
    <button className="font-serif ...  rounded-md text-md bg-custom-400 text-custom-700 px-5 py-2 mt-0 ">
      Close
    </button>
  );

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <div className="flex gap-2">
          <button className="font-serif ...  rounded-md text-md bg-custom-400 text-custom-700 px-5 py-2 mt-0 ">
            Close
          </button>
          <button className="font-serif ...  rounded-md text-md bg-custom-400 text-custom-700 px-5 py-2 mt-0 ">
            Checkout
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <CartModal ref={modal} title="YOUR CART" action={modalActions} />
      <section className="flex justify-around m-4 items-center">
        <div className="flex items-center gap-4">
          <img className="h-20 w-20" src={Logo} alt="Logo" />
          <span className="font-serif ... text-4xl font-medium text-amber-900 text-custom-100">
            ELEGANT CONTEXT
          </span>
        </div>
        <p>
          <button
            onClick={handleOpenCartClick}
            className=" px-6 py-2 rounded-md  text-custom-400 bg-custom-100"
          >
            Cart ({cartQuantity})
          </button>
        </p>
      </section>
    </>
  );
};

export default Header;
