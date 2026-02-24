import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-black text-white min-h-screen px-6 py-16">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-10">Your Cart</h1>

        {cart.length === 0 ? (
          <div className="text-center py-20 border border-gray-800">
            <p className="text-gray-400 mb-6">Your cart is empty.</p>
            <Link
              to="/new-arrivals"
              className="bg-white text-black px-6 py-3 font-semibold hover:bg-gray-200 transition"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-10">

            {/* Cart Items */}
            <div className="md:col-span-2 space-y-6">

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-6 border border-gray-800 p-6"
                >
                  {/* Product Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover"
                  />

                  {/* Product Details */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">
                      {item.name}
                    </h3>
                    <p className="text-gray-400 mb-2">
                      ₹{item.price}
                    </p>
                    <p className="text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-400 transition text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}

            </div>

            {/* Order Summary */}
            <div className="border border-gray-800 p-8 h-fit">
              <h2 className="text-xl font-semibold mb-6">
                Order Summary
              </h2>

              <div className="flex justify-between mb-4 text-gray-400">
                <span>Subtotal</span>
                <span>₹{total}</span>
              </div>

              <div className="flex justify-between mb-4 text-gray-400">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <div className="border-t border-gray-800 my-4"></div>

              <div className="flex justify-between text-lg font-bold mb-6">
                <span>Total</span>
                <span>₹{total}</span>
              </div>

              <button className="w-full bg-white text-black py-3 font-semibold hover:bg-gray-200 transition">
                Proceed to Checkout
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default Cart;