import React, {useMemo} from "react";

import { ReactComponent as Icon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from "../../redux/cart/cart.selector";

import "./shopicon.style.scss";


const Shopicon = ({ onPress, itemCount }) => {

  const count = useMemo(() => {
    return itemCount
  }, [itemCount])


  return (
    <div className="cart-icon" onClick={onPress}>
      <Icon className="shopping-icon" />
      <span className="item-count">{count}</span>
    </div>
  );
};


// 这个create selectot只适用与mapStateToProps
// 有了createStructorSelector之后state都不用再传进去了

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})
export default connect(mapStateToProps)(Shopicon);
