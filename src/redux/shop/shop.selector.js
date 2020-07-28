import { createSelector } from "reselect";
import { SHOP_DATA } from "../../constants/shop";

export const shopData = (state) => {
  return state.shop;
};

export const shopSelector = createSelector([shopData], (collectionData) => {
  let mapData = [];
  const keys = Object.keys(collectionData);
  keys.forEach((key) => {
    mapData.push(collectionData[key]);
  });

  return mapData;
});

export const selectCollections = createSelector([shopSelector], (shop) => {
  return shop;
});

export const selectedCollection = (collectionParam) => {
  return createSelector([shopSelector], (shopData) => {
    return SHOP_DATA[collectionParam].items;
  });
};

// 对于 component 来说，他们也可以接受一个function 来获取相应的数据
