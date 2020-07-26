import React from "react";
import "./collection-item.style.scss";
import Button from "../Button/Button";
import { connect } from "react-redux";
import {
  addItemToCart,
} from "../../redux/cart/cart.action";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";


const CollectionItem = ({
  id,
  name,
  imageUrl,
  price,
  cartItems,
  addItemToCart,
}) => {
  if (id > 4) return null;

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="collection-footer ">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        inverted
        text="Add to cart"
        onClickHandler={() => {
          addItemToCart({ id, name, imageUrl, price });
        }}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);
