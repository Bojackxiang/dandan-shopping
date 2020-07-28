const { UPDATE_COLLECTION } = require("../../constants/Actions");

export const updateShopCollection = (collectionMap) => ({
  type: UPDATE_COLLECTION,
  payload: collectionMap,
});
