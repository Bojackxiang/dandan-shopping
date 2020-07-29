import "./shop.styles.scss";
import CollectionOverview from "../../components/CollectionOverView/CollectionOverview";
import CollectionPage from "../Collection/CollectionPage";
import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import {
  updateShopCollection,
  fetchCollectionAsync,
} from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/withSipnner";
import CollectionsOverviewContainer from "../../components/CollectionOverView/CollectionOverViewContainer";

// const CollectionOverLayWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
  state = {
    loading: this.props.isFetching,
  };

  unsubscribeSnapShop = null;

  componentDidMount() {
    const { updateCollection } = this.props;
    updateCollection();
  }

  render() {
    const { match } = this.props;
    const { isFetching } = this.props;
    console.log(isFetching);

    return (
      <>
        <div className="shop-page">
          <h1>shop page</h1>
          {/* /shop */}
          <Route
            exact
            path={`${match.path}`}
            component={CollectionsOverviewContainer}
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

// const mapStateToProps = createStructuredSelector({
//   shop: shopSelector,
// });
const mapStateToProps = (state) => ({
  shop: state.shop.shop,
  isFetching: state.shop.isFetching,
});

const mapDispatchToState = (dispatch) => ({
  updateCollection: () => dispatch(fetchCollectionAsync()),
});

export default connect(mapStateToProps, mapDispatchToState)(ShopPage);

/**
 * 这边 route 里面的参数 match category也能偶获得
 * 这里主要的思想就是 ： nested route
 * !! 1. nested route 外面不能是exact
 * !! 2. route 里component的参数也能获得 route中的参数 比如 match+
 *
 */
