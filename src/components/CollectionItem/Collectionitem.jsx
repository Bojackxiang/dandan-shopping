import React from "react";
import Button from "../Button/Button";
import { connect } from "react-redux";
import { addItemToCart } from "../../redux/cart/cart.action";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  BackgroundImage,
  NameContainer,
  PriceContainer,
  AddButton,
} from "./collection-item.style";

const CollectionItem = ({ id, name, imageUrl, price, addItemToCart }) => {
  if (id > 4) return null;

  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl}/>
        

      <AddButton
          text="Add to cart"
          onClickHandler={() => {
            addItemToCart({ id, name, imageUrl, price });
          }}
        />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
    </CollectionItemContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);
