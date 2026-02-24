import products from "../data/products";
import { Link } from "react-router-dom";

function Trending() {
  const trendingProducts = products.slice(0, 4);

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold tracking-wide">
            Trending Now
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            Discover the most popular styles this season.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {trendingProducts.map((product) => (
            <div
              key={product.id}
              className="bg-gray-900 rounded-2xl overflow-hidden group transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">
                  {product.name}
                </h3>

                <p className="text-gray-400 mb-4">
                  ₹{product.price}
                </p>

                <Link to={`/product/${product.id}`}>
                  <button className="w-full bg-white text-black py-2.5 rounded-full font-medium hover:bg-gray-200 transition duration-300">
                    View Product
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <Link to="/new-arrivals">
            <button className="bg-white text-black px-10 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300 shadow-md">
              View More
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Trending;