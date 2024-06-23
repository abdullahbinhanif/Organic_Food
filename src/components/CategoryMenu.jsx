import React, { useEffect, useState } from "react";
import FoodData from "../data/FoodData";
import { setCategory } from "../redux/slices/CategorySlice";
import { useDispatch, useSelector } from "react-redux";
const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
    console.log(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  const dispacth = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);
  return (
    <div className="ml-6">
      <h3 className="text-xl font-semibold">Find the best food</h3>
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth  lg:overflow-x-hidden">
        <button
          onClick={() => dispacth(setCategory("All"))}
          className={`px-3 py-2 bg-purple-600 font-bold rounded-lg hover:bg-purple-600 hover:text-white ${
            selectedCategory === "All" && "bg-purple-500 text-white"
          }`}
        >
          All
        </button>
        {categories.map((category, index) => {
          return (
            <button
              onClick={() => dispacth(setCategory(category))}
              key={index}
              className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-purple-600 hover:text-white ${
                selectedCategory === category && "bg-purple-500 text-white"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMenu;
