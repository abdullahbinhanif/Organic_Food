import React from "react";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { removeFromCart } from "../redux/slices/CartSlice";
import { useDispatch } from "react-redux";
const ItemCard = ({ id, name, price, img, qty }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
      <MdDelete
        onClick={() => dispatch(removeFromCart({ id, name, img, price, qty }))}
        className=" absolute right-7 text-gray-700 cursor-pointer"
      />
      <img src={img} alt="" className="w-[50px] h-[50px]" />
      <div className=" leading-5">
        <h2 className="text-gray-800 font-bold">{name}</h2>
        <div className="flex justify-between">
          <span className="text-purple-500 font-bold">${price}</span>
          <div className=" flex justify-center items-center gap-2 absolute right-7">
            <FiPlus className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-purple-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer" />
            <span>{qty}</span>
            <FiMinus className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-purple-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
