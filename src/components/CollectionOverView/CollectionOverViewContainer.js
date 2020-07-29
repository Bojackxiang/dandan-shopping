// 基本的需要
import { connect } from "react-redux";
import { compose } from "redux";
import WithSpinner from "../with-spinner/withSipnner";
import CollectionOverview from "./CollectionOverview";

const mapStateToProps = (state) => ({
  isLoading: state.shop.isFetching,
});

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
  )(CollectionOverview);

export default CollectionsOverviewContainer;

// 这里的connect 就相当于
/**
 * <WithSpinner {...mapStateToProps}/>
 */


