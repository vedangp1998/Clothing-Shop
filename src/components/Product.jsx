import Cartcontext from "../store/shoping-cart-context";
import { useContext } from "react";

const Product = ({ id, image, title, description, price }) => {
  const { addItemToCart } = useContext(Cartcontext);
  return (
    <>
      <article className="max-w-96">
        <img className="w-full rounded-md" src={image} alt="Product" />
        <div className=" font-serif ...shadow-md">
          <div className=" bg-blend-overlay">
            <p className="text-custom-600">{title}</p>
            <p className="text-custom-600">${price}</p>
            <p className="text-custom-700 text-wrap">{description}</p>
          </div>
          <p className="flex justify-end items-end mt-8">
            <button
              onClick={() => {
                addItemToCart(id);
              }}
              className="bg-custom-300 p-2 rounded-lg "
            >
              Add to Cart
            </button>
          </p>
        </div>
      </article>
    </>
  );
};

export default Product;
