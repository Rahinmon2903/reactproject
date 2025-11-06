import React, { useContext } from "react";
import { useCart } from "../Context/CartContext";

const ProductCard = ({ ele }) => {
  const { cart, dispatch } = useCart();

  const InCart = cart.find((item) => item.id == ele.id);

  const handleADD = () => dispatch({ type: "ADD", payload: ele });
  const handleREMOVE = () => dispatch({ type: "REMOVE", payload: ele.id });

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="p-8 rounded-t-lg" src={ele.image} alt={ele.title} />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-1">
            {ele.title}
          </h4>

          <h5 className="text-sm font-medium tracking-tight text-gray-600 dark:text-gray-400">
            {ele.description}
          </h5>
        </a>

        <div className="flex items-center mt-2.5 mb-5">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
            ⭐ {ele.rating.rate}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${ele.price}
          </span>
          <button
            onClick={InCart ? handleREMOVE : handleADD}
            className={`text-white focus:ring-4 focus:outline-none 
  font-medium rounded-lg text-sm px-5 py-2.5 text-center  
  dark:focus:ring-blue-800 ${
    InCart ? "bg-red-600 hover:bg-red-700" : "bg-blue-600 hover:bg-blue-700"
  }`}
          >
            {InCart ? "Remove from Cart" : "ADD to cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
