import React from "react";
import "./preview.style.scss";
import CollectionItem from "../CollectionItem/Collectionitem";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview ">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items.slice(0, 4).map(({ id, ...rest }) => {
          return <CollectionItem id={id} {...rest} key={id} />;
        })}
      </div>
    </div>
  );
};

export default CollectionPreview;
