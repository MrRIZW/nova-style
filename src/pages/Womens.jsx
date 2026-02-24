import products from "../data/products";
import { Link } from "react-router-dom";

function Womens() {

  const womensProducts = products.filter(
    (product) => product.category === "womens"
  );

  return (
    <div className="bg-black text-white min-h-screen px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-12">
        WOMENS COLLECTION
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {womensProducts.map((product) => (
          <div
            key={product.id}
            className="bg-gray-900 p-4 rounded-xl hover:scale-105 transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-lg"
            />

            <h2 className="mt-4 font-semibold">
              {product.name}
            </h2>

            <p className="text-gray-400">
              ₹{product.price}
            </p>

            <Link to={`/product/${product.id}`}>
              <button className="mt-4 w-full bg-white text-black py-2 rounded-lg hover:bg-gray-200 transition">
                View Product
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Womens;