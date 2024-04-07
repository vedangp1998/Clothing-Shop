import { createContext } from "react";

const Cartcontext = createContext({
  item: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});

export default Cartcontext;
