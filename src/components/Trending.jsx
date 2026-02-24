import products from "../data/products";
import { Link } from "react-router-dom";

function Trending() {

  // 🔥 Only show first 4 products
  const trendingProducts = products.slice(0, 4);

  return (
    <div className="bg-black text-white py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">
        TRENDING NOW
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {trendingProducts.map((product) => (
          <div
            key={product.id}
            className="bg-gray-900 rounded-xl p-4 hover:scale-105 transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-lg"
            />

            <h3 className="mt-4 text-lg font-semibold">
              {product.name}
            </h3>

            <p className="text-gray-400">₹{product.price}</p>

            <Link to={`/product/${product.id}`}>
              <button className="mt-4 w-full bg-white text-black py-2 rounded-lg hover:bg-gray-200 transition">
                View Product
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* ✅ View More Button */}
      <div className="flex justify-center mt-12">
        <Link to="/new-arrivals">
          <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition">
            VIEW MORE
          </button>
        </Link>
      </div>

    </div>
  );
}

export default Trending;