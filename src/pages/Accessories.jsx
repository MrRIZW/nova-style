import products from "../data/products";
import { Link } from "react-router-dom";
import { useState } from "react";

function Accessories() {
  const [sortOption, setSortOption] = useState("default");

  const accessoriesProducts = products.filter(
    (product) => product.category === "accessories"
  );

  const sortedProducts = [...accessoriesProducts].sort((a, b) => {
    if (sortOption === "low") return a.price - b.price;
    if (sortOption === "high") return b.price - a.price;
    return 0;
  });

  return (
    <div className="bg-black text-white min-h-screen px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold tracking-wide">
              Accessories Collection
            </h1>
            <p className="text-gray-400 mt-2">
              {accessoriesProducts.length} Products
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="bg-gray-900 border border-gray-700 text-sm px-4 py-2 outline-none"
            >
              <option value="default">Sort by</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {accessoriesProducts.length === 0 ? (
          <div className="text-center text-gray-400 py-20 border border-gray-800">
            No products found in this category.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {sortedProducts.map((product) => (
              <div
                key={product.id}
                className="group border border-gray-800 p-4 hover:border-gray-600 transition"
              >
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="mt-4">
                  <h2 className="font-semibold text-lg">
                    {product.name}
                  </h2>

                  <p className="text-gray-400 mt-1">
                    ₹{product.price}
                  </p>

                  <Link to={`/product/${product.id}`}>
                    <button className="mt-4 w-full border border-white py-2 text-sm font-semibold hover:bg-white hover:text-black transition">
                      View Product
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default Accessories;