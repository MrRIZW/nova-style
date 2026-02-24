import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-black text-white min-h-screen p-10">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p>No products added.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-4"
            >
              <div>
                <h3>{item.name}</h3>
                <p>₹{item.price} x {item.quantity}</p>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 px-4 py-2 rounded"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="text-right mt-6 text-2xl font-bold">
            Total: ₹{total}
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;