import React from "react";
import CollectionItem from "./../Collection-Item/CollectionItem";
import "./PreviewCollection.scss";

const PreviewCollection = ({ title, items }) => (
  <div className="collection-preview">
    <h1>{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...itemProps }) => {
          return <CollectionItem key={id} {...itemProps} />;
        })}
    </div>
  </div>
);

export default PreviewCollection;
