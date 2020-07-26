import React from "react";
import "./cartdropdown.style.scss";
import Button from "../Button/Button";
import CartItem from "../cart-item/cartItem";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { hideCart } from "../../redux/cart/cart.action";


const CartDropdown = ({ cartItems, history, hideCartDropDown }) => {

  

  const goToCheckout = (history) => {
    history.push('/checkout')
    hideCartDropDown()

  }

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {!cartItems.length? (
          <span className="empty-message">You dont have any item yet</span>
        ) : (
          cartItems.map((cartItem) => {
            return <CartItem key={cartItem.id} item={cartItem} />;
          })
        )}
      </div>
      <Button className="button" text="Go To Check out" onClickHandler={() => goToCheckout(history)}/>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  hideCartDropDown: () => dispatch(hideCart())
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));
