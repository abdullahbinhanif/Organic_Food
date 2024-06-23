import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import CategorySlice from "./slices/CategorySlice";
const store = configureStore({
  reducer: {
    cart: CartSlice,
    category: CategorySlice,
  },
});
export default store;
