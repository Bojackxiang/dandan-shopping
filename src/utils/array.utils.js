export const shopDataHandler = (shopData) => {
    const collectionKeys = Object.keys(shopData);
      const tempCollection = [];
      collectionKeys.forEach((key) => tempCollection.push(shopData[key]));

      return tempCollection
}