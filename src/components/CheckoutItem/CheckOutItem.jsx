import React from "react";
import { connect } from "react-redux";
import "./checkoutitem.styles.scss";
import {
  removeItemFromCart,
  addItem,
  subItem,
} from "../../redux/cart/cart.action";

const CheckoutItem = ({ clearItem, addItem, removeItem, cartItem }) => {
  const { id, price, name, imageUrl, quantity } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(id)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(id)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(id)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (id) => dispatch(removeItemFromCart(id)),
  addItem: (id) => dispatch(addItem(id)),
  removeItem: (id) => dispatch(subItem(id)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
