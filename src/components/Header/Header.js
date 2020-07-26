import React from "react";
import "./header.style.scss";
import CartDropdown from "../CartDropdown/CartDropdown";
import ShopIcon from "../ShopIcon/Shopicon";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { hideCart, showingCart } from "../../redux/cart/cart.action";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from 'reselect';

class Header extends React.Component {
  // => shopping icon 被点击了之后
  onIconClicked() {
    const { isCartDisplay, dispatchHideCart, dispatchShowingCart } = this.props;

    if (isCartDisplay) {
      dispatchHideCart();
    } else {
      dispatchShowingCart();
    }
  }

  render() {
    const { currentUser, isCartDisplay } = this.props;

    // => 是否在目录中展示 sign in / sign up
    function signInSignUpRendering() {
      let node = !currentUser ? (
        <>
          <Link to="/signin" className="option">
            SIGN IN
          </Link>
          <Link to="/signup" className="option">
            SIGN UP
          </Link>
        </>
      ) : null;

      return node;
    }

    // => 是否在目录中显示sign out
    function signOutRendering() {
      const node = currentUser ? (
        <div
          className="option"
          onClick={() => {
            auth.signOut();
          }}
        >
          SIGN OUT
        </div>
      ) : null;
      return node;
    }

    return (
      <div className="header">
        <Link to="/" className="logo-container">
          <Logo className="logo" />
        </Link>
        <div className="options">
          <Link to="/shop" className="option">
            SHOP
          </Link>
          <Link to="/contact" className="option">
            CONTACT
          </Link>

          {signOutRendering()}

          {signInSignUpRendering()}

          <ShopIcon onPress={() => this.onIconClicked()} />
        </div>

        {isCartDisplay && <CartDropdown />}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isCartDisplay: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchHideCart: () => dispatch(hideCart()),
  dispatchShowingCart: () => dispatch(showingCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
