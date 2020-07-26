import { createSelector } from "reselect";

export const shopData = (state) => state.shop;

export const shopSelector = createSelector([shopData], (collectionData) => {
  let mapData = [];
  const keys = Object.keys(collectionData);
  keys.forEach((key) => {
    mapData.push(collectionData[key]);
  });
  return mapData;
});

export const selectCollections = createSelector([shopData], (shop) => {
  return shop;
});

export const selectedCollection = (collectionParam) => {
  return createSelector([selectCollections], (shopData) => {
    return shopData[collectionParam].items;
  });
};

// 对于 component 来说，他们也可以接受一个function 来获取相应的数据
