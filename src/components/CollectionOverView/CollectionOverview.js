import CollectionPreview from "../CollectionPreview/CollectionPreview";
import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { shopSelector } from "../../redux/shop/shop.selector";
class CollectionOverview extends Component {
  render() {
    const { shop } = this.props;

    return shop.map(({ id, ...collectionProps }) => {
      return <CollectionPreview key={id} id={id} {...collectionProps} />;
    });
  }
}

const mapStateToProps = createStructuredSelector({
  shop: shopSelector,
});

export default connect(mapStateToProps, null)(CollectionOverview);
