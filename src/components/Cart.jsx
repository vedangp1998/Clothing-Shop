const Cart = ({ items, onUpdateItemQuantity }) => {
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  const removeHandler = () => {
    onUpdateItemQuantity(item.id, -1);
  };

  const addHandler = () => {
    onUpdateItemQuantity(item.id, 1);
  };
  return (
    <div>
      {items.length === 0 && (
        <p className="font-serif ... mt-2 px-0.5">No Items in Cart!</p>
      )}
      {items.length > 0 && (
        <ul className="bg-custom-100">
          {items.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li
                key={item.id}
                className="flex justify-between items-center bg-custom-600 my-4 p-1"
              >
                <div>
                  <span>{item.name}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="flex items-center">
                  <button
                    className="bg-transperent p-1 rounded-xl hover:bg-custom-300"
                    onClick={() => onUpdateItemQuantity(item.id, -1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="bg-transperent p-1 rounded-xl hover:bg-custom-300"
                    onClick={() => onUpdateItemQuantity(item.id, 1)}
                  >
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p className="font-serif ... mt-2 items-end justify-end flex">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
};

export default Cart;
