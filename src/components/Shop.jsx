import Product from "./Product";
import DUMMY_PRODUCTS from "../../dummy-products";

const Shop = ({ onAddItemToCart }) => {
  return (
    <>
      <section className="">
        <p className="font-serif ... text-custom-500">
          ELEGENT CLOTHING FOR EVERYONE
        </p>
        <ul className="flex flex-wrap gap-8 justify-center items-center">
          {DUMMY_PRODUCTS.map((product) => {
            return (
              <li key={product.id}>
                <Product {...product} onAddToCart={onAddItemToCart} />
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Shop;
