import "./shop.styles.scss";
import CollectionOverview from "../../components/CollectionOverView/CollectionOverview";
import React from "react";
import { Route } from "react-router-dom";
import CollectionPage from "../Collection/CollectionPage";

const ShopPage = ({ match }) => {

  return (
    <div className="shop-page">
      <h1>shop page</h1>
      {/* /shop */}
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      {/* /shop/${category} */}
      <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;

/**
 * 这边 route 里面的参数 match category也能偶获得
 * 这里主要的思想就是 ： nested route
 * !! 1. nested route 外面不能是exact
 * !! 2. route 里component的参数也能获得 route中的参数 比如 match+
 *
 */
