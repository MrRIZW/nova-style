import { useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();

  if (!product) return <div>Product not found</div>;

  return (
    <div className="bg-black text-white min-h-screen p-10">
      <div className="grid md:grid-cols-2 gap-10">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-xl"
        />

        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-400 mt-4">
            {product.description}
          </p>
          <p className="text-2xl mt-6">₹{product.price}</p>

          <button
            onClick={() => addToCart(product)}
            className="mt-6 bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-300 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;