import React from "react";
import CartDropdown from "../CartDropdown/CartDropdown";
import ShopIcon from "../ShopIcon/Shopicon";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { hideCart, showingCart } from "../../redux/cart/cart.action";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./Header.styles";

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
          <OptionLink to="/signin">SIGN IN</OptionLink>
          <OptionLink to="/signup">SIGN UP</OptionLink>
        </>
      ) : null;

      return node;
    }

    // => 是否在目录中显示sign out
    function signOutRendering() {
      const node = currentUser ? (
        <OptionLink
          onClick={() => {
            auth.signOut();
          }}
        >
          SIGN OUT
        </OptionLink>
      ) : null;
      return node;
    }

    return (
      <HeaderContainer>
        <LogoContainer to="/">
          <Logo />
        </LogoContainer>

        <OptionsContainer>
          <OptionLink to="/shop">SHOP</OptionLink>
          <OptionLink as={"div"}>CONTACT</OptionLink>
          {/* 通过使用as，将(Link)变成 div */}

          {signOutRendering()}

          {signInSignUpRendering()}

          <ShopIcon onPress={() => this.onIconClicked()} />
        </OptionsContainer>

        {isCartDisplay && <CartDropdown />}
      </HeaderContainer>
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
