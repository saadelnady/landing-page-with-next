import Image from "next/image";

const ProductCard = ({ product }) => {
  console.log(product);
  const handleAddToCart = () => {
    // Get existing cart items from localStorage
    const existingCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];

    // Add the new product to the cart
    existingCartItems.push(product);

    // Save updated cart items back to localStorage
    localStorage.setItem("cartItems", JSON.stringify(existingCartItems));
  };
  return (
    <div className="card mt-4" style={{ width: "18rem" }}>
      <Image
        src={product?.image}
        className="card-img-top object-fit-contain"
        alt={product?.title}
        width={"300px"}
        height={"300px"}
      />
      <div className="card-body">
        <h5 className="card-title">
          {product?.title.slice(0, 20)}
          {product?.title.length > 20 && "..."}
        </h5>
        <p className="card-text">
          {product?.description.slice(0, 20)}
          {product?.description.length > 20 && "..."}
        </p>
        <p className="card-text">Category: {product?.category}</p>
        <p className="card-text">Price: {product?.price}$</p>
        <div className="d-flex justify-content-between">
          <p className="card-text">Rating: {product?.rating?.rate}</p>
          <p className="card-text">Count: {product?.rating?.count} </p>
        </div>
        <button
          className="bg-primary text-white font-bold py-2 px-4 rounded"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
