import "./shop.styles.scss";
import CollectionOverview from "../../components/CollectionOverView/CollectionOverview";
import CollectionPage from "../Collection/CollectionPage";
import React, { Component } from "react";
import { Route } from "react-router-dom";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { shopSelector } from "../../redux/shop/shop.selector";
import { updateShopCollection } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/withSipnner";

const CollectionOverLayWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
  state = {
    loading: false,
    url:
      "https://online-shopping-7d657.firebaseio.com//databases/{database}/collections.json",
  };

  unsubscribeSnapShop = null;

  componentDidMount() {
    this.setState({ ...this.state, loading: true });
    const collectionRef = firestore.collection("collections");

    collectionRef.get().then((snapShot) => {
      const data = convertCollectionsSnapshotToMap(snapShot);

      this.props.updateCollection(data);

      this.setState({ ...this.state, loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;

    return (
      <>
        <div className="shop-page">
          <h1>shop page</h1>
          {/* /shop */}
          <Route
            exact
            path={`${match.path}`}
            render={(props) => (
              <CollectionOverLayWithSpinner isLoading={loading} {...props} />
            )}
          />
          {/* /shop/${category} */}
          <Route
            path={`${match.path}/:categoryId`}
            render={(props) => <CollectionPageWithSpinner {...props} />}
          />
        </div>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  shop: shopSelector,
});

const mapDispatchToState = (dispatch) => ({
  updateCollection: (collection) => dispatch(updateShopCollection(collection)),
});

export default connect(mapStateToProps, mapDispatchToState)(ShopPage);

/**
 * 这边 route 里面的参数 match category也能偶获得
 * 这里主要的思想就是 ： nested route
 * !! 1. nested route 外面不能是exact
 * !! 2. route 里component的参数也能获得 route中的参数 比如 match+
 *
 */
