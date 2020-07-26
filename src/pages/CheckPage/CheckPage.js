import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./checkout.styles.scss";
import CheckOutItem from "../../components/CheckoutItem/CheckOutItem";
import {
  selectCartItems,
  cartTotalPrice,
} from "../../redux/cart/cart.selector";
import StripeBtn from "../../components/StripeButton/StripeBtn";

const CheckPage = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => (
        <CheckOutItem
          key={cartItem.id}
          cartItem={cartItem}
          id={cartItem.id}
          quantity={cartItem.quantity}
        />
      ))}

      <div className="total">TOTAL: ${total}</div>
      <div className="total">
        <StripeBtn price={total} />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: cartTotalPrice,
});

export default connect(mapStateToProps)(CheckPage);
