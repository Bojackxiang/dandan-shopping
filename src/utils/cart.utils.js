export const addItemToCartUtil = (cartItems, item) => {
  const existedItem = cartItems.find((cartItem) => cartItem.id === item.id);

  if (existedItem) {
    return cartItems.map((cartItem) => {
      if (item.id === cartItem.id) {
        return { ...cartItem, quantity: (cartItem.quantity += 1) };
      }
      return cartItem;
    });
  } else {
    return [...cartItems, { ...item, quantity: 1 }];
  }
};

export const cartItemCount = (itemList) => {
  const totalNum = itemList.reduce((acc, item) => acc + item.quantity, 0);

  return totalNum;
};

/**
 * reduce 的使用方法: 
 * 1. reduce 也一定要有 return 才能返回出来数据
 */
