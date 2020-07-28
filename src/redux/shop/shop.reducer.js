import { UPDATE_COLLECTION } from "../../constants/Actions";

export default (state, action) => {
  switch (action.type) {
    case UPDATE_COLLECTION:
      const collectionKeys = Object.keys(action.payload);
      const tempCollection = [];
      collectionKeys.forEach((key) => tempCollection.push(action.payload[key]));
      return tempCollection;
    default:
      return [];
  }
};
