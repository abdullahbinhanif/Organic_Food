import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";

import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
const Cart = () => {
  const [activeCart, setActiveCart] = useState(true);
  const cartItem = useSelector((state) => state.cart.cart);
  const totalQty = cartItem.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItem.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  return (
    <>
      <div
        className={`  fixed right-0 top-0 w-full lg:w-[20vw] h-full p-5  bg-white ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } translate-all duration-500 z-50 `}
      >
        <div className="flex  justify-between items-center my-3">
          <span className="text-xl font-bold text-gray-800 ">My Order</span>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-black hover:border-purple-500 cursor-pointer"
          />
        </div>
        {cartItem.length > 0 ? (
          cartItem.map((food) => {
            return (
              <ItemCard
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
              />
            );
          })
        ) : (
          <h2 className="text-center text-xl font-bold text-gray-800">
            {" "}
            Your cart is empty
          </h2>
        )}

        <div className=" absolute bottom-0">
          <h3 className="font-semibold text-gray-800">Items :{totalQty}</h3>
          <h3 className="font-semibold text-gray-800">
            Total Amount :${totalPrice}
          </h3>
          <hr className="w-[90vw] lg:w-[18vw] my-2" />
          <button className="bg-purple-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5">
            Checkout
          </button>
        </div>
      </div>
      <FiShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className={` rounded-full bg-white shadow-md text-5xl p-2 fixed bottom-4 right-5 ${
          totalQty > 0 && "animate-bounce delay-500 transition-all"
        }`}
      />
    </>
  );
};

export default Cart;
