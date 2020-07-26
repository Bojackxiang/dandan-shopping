import { createSelector } from "reselect";
import { cartItemCount } from "../../utils/cart.utils";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.isCartDisplay
);

// 穿进去一个东西会不同的往上调取函数

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItemCount(cartItems)
);

export const cartTotalPrice = createSelector([selectCartItems], (cartItems) => {
  return cartItems.reduce((accPrice, nextItem) => {
    return (accPrice += nextItem.quantity * nextItem.price);
  }, 0);
});
