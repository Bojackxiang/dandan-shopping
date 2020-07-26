import { addItemToCartUtil } from "../../utils/cart.utils";

const {
  SHOWING_CART,
  HIDE_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_ITEM,
  SUB_ITEM,
} = require("../../constants/Actions");

const initialState = {
  isCartDisplay: false,
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOWING_CART:
      return {
        ...state,
        isCartDisplay: true,
      };
    case HIDE_CART:
      return {
        ...state,
        isCartDisplay: false,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: addItemToCartUtil(state.cartItems, action.payload),
      };
    case REMOVE_FROM_CART:
      const itemId = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== itemId),
      };
    case ADD_ITEM:
      const addItemId = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.id === addItemId) {
            item.quantity += 1;
            return item;
          }
          return item;
        }),
      };
    case SUB_ITEM:
      const subItemId = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.id === subItemId) {
            if (item.quantity - 1 === 0) return item;
            item.quantity -= 1;
            return item;
          }
          return item;
        }),
      };
    default:
      return state;
  }
};

export default cartReducer;
