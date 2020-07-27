import React from "react";
import { connect } from "react-redux";
import { selectedCollection } from "../../redux/shop/shop.selector";
import "./collection.style.scss";
import CollectionItem from "../../components/CollectionItem/Collectionitem";

const CollectionPage = ({ match, collectionData }) => {
  const categoryName = match.params.categoryId;

  return (
    <div className="collection-page">
      <h2 className="title">{categoryName}</h2>
      <div className="items">
        {collectionData.map((item) => (
          <CollectionItem
            key={item.id}
            item={item}
            name={item.name}
            id={item.id}
            imageUrl={item.imageUrl}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  // !! 下面的但参数的请求获取数据方式
  collectionData: selectedCollection(ownProps.match.params.categoryId)(state),
});

export default connect(mapStateToProps, null)(CollectionPage);
