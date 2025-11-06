import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaStar, FaStarHalf, FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import ProdContext from "../../context/ProdContext";
import Pic from "../../assets/newArrival.png";

const Product = () => {
  const { id } = useParams();
  const { products, state, dispatch } = useContext(ProdContext);

  const [currentProduct, setCurrentProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("L");
  const [selectedColor, setSelectedColor] = useState("#816DFA");

  const sizes = ["L", "XL", "XS"];
  const colors = ["#816DFA", "#000000", "#CDBA7B"];
  const minQty = 1;
  const maxQty = 50;

  useEffect(() => {
    const found = products.find((p) => p._id === id);
    if (found) {
      setCurrentProduct(found);
    } else {
      fetch(`http://localhost:3010/api/products/${id}`)
        .then((res) => res.json())
        .then((data) => setCurrentProduct(data))
        .catch((err) => console.error("Error fetching product:", err));
    }
  }, [id, products]);

  const decrement = () => setQuantity((prev) => Math.max(prev - 1, minQty));
  const increment = () => setQuantity((prev) => Math.min(prev + 1, maxQty));
  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    const numericValue =
      value === "" ? "" : Math.min(Math.max(Number(value), minQty), maxQty);
    setQuantity(numericValue);
  };

  const renderStars = () => {
    const rating = currentProduct?.rating || 4.5;
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const stars = [];
    for (let i = 0; i < fullStars; i++)
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    if (halfStar)
      stars.push(<FaStarHalf key="half" className="text-yellow-500" />);
    return stars;
  };

  const handleAddToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...product, qty: quantity },
    });
  };

  const handleRemoveFromCart = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
  };

  const inCart = (product) =>
    state.cart && state.cart.some((item) => item._id === product._id);

  const subDetail = (title, value) => (
    <div className="flex">
      <p className="w-32 text-[#9F9F9F] font-['Poppins'] font-light text-[16px]">
        {title}
      </p>
      <p className="text-[#9F9F9F] font-['Poppins'] font-light text-[16px]">
        : {value}
      </p>
    </div>
  );

  if (!currentProduct) return <h1 className="text-center mt-10">Loading...</h1>;

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex items-center gap-2 text-gray-600 text-sm mb-6">
        <Link to="/" className="hover:font-bold">
          Home
        </Link>
        <MdKeyboardArrowRight className="text-black text-[25px]" />
        <Link to="/shop" className="hover:font-bold">
          Shop
        </Link>
        <MdKeyboardArrowRight className="text-black text-[25px]" />
        <p className="text-black ml-3">{currentProduct.title}</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Product Images */}
        <div className="md:w-1/2 flex gap-4">
          <div className="flex flex-col gap-2 w-1/6">
            {[...Array(4)].map((_, idx) => (
              <img
                key={idx}
                src={
                  currentProduct.img && currentProduct.img.length > 0
                    ? `http://localhost:3010/uploads/${currentProduct.img[0]}`
                    : Pic
                }
                alt={`Thumbnail ${idx + 1}`}
                className="cursor-pointer border rounded-md"
              />
            ))}
          </div>

          <div className="w-5/6">
            <img
              src={
                currentProduct.img && currentProduct.img.length > 0
                  ? `http://localhost:3010/uploads/${currentProduct.img[0]}`
                  : Pic
              }
              alt={currentProduct.title}
              className="w-full object-cover rounded-md"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 flex flex-col">
          <h2 className="text-3xl font-semibold mb-2">
            {currentProduct.title}
          </h2>
          <p className="text-gray-600 mb-4">Rs. {currentProduct.price}</p>

          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center">{renderStars()}</div>
            <div className="w-px h-6 bg-gray-400"></div>
            <p className="text-gray-600 ml-3">5 Customer Reviews</p>
          </div>

          <p className="text-gray-800 mb-6">{currentProduct.description}</p>

          {/* Size */}
          <div className="mb-4">
            <p className="mb-2">Size</p>
            <div className="flex gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-[5px] hover:shadow-lg transition ${
                    selectedSize === size ? "bg-[#FBEBB5]" : "bg-[#FAF4F4]"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color */}
          <div className="mb-4">
            <p className="mb-2">Color</p>
            <div className="flex gap-2">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 hover:shadow-lg transition-all duration-200 ${
                    selectedColor === color
                      ? "border-[#FBEBB5]"
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Quantity + Add to Cart */}
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <button
                type="button"
                onClick={decrement}
                className="bg-gray-100 hover:bg-gray-200 px-3 py-2"
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                onChange={handleChange}
                className="w-16 text-center border-x border-gray-300 outline-none"
              />
              <button
                type="button"
                onClick={increment}
                className="bg-gray-100 hover:bg-gray-200 px-3 py-2"
              >
                +
              </button>
            </div>

            {inCart(currentProduct) ? (
              <button
                onClick={() => handleRemoveFromCart(currentProduct._id)}
                className="border border-black hover:bg-red-500 hover:shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center transition"
              >
                Remove From Cart
              </button>
            ) : (
              <button
                onClick={() => handleAddToCart(currentProduct)}
                className="border border-black hover:bg-[#FBEBB5] hover:shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center transition"
              >
                Add To Cart
              </button>
            )}
          </div>

          <hr className="border-t border-gray-300 mt-7" />

          {/* Product Sub-details */}
          <div className="flex flex-col mt-4">
            {subDetail("SKU", "SS001")}
            {subDetail("Category", currentProduct.category)}
            {subDetail("Tags", "Sofa, Chair, Home, Shop")}

            <div className="flex items-center">
              <p className="w-32 text-[#9F9F9F] font-['Poppins'] font-light text-[16px]">
                Share
              </p>
              <div className="flex items-center text-[#9F9F9F] font-['Poppins'] font-light text-[16px]">
                <span className="mr-2">:</span>
                <div className="flex items-center space-x-3">
                  <FaFacebook className="text-black cursor-pointer" />
                  <FaLinkedin className="text-black cursor-pointer" />
                  <AiFillTwitterCircle className="text-black cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-300 mt-7" />
    </div>
  );
};

export default Product;
