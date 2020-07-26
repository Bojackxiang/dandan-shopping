import {
  SHOWING_CART,
  HIDE_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_ITEM,
  SUB_ITEM,
} from "../../constants/Actions";

export const showingCart = () => {
  return {
    type: SHOWING_CART,
  };
};

export const hideCart = () => {
  return {
    type: HIDE_CART,
  };
};

export const addItemToCart = (itemInfo) => {
  return {
    type: ADD_TO_CART,
    payload: itemInfo,
  };
};

export const removeItemFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};

export const addItem = (id) => {
  return {
    type: ADD_ITEM,
    payload: id,
  };
};

export const subItem = (id) => {
  return {
    type: SUB_ITEM,
    payload: id,
  };
};
