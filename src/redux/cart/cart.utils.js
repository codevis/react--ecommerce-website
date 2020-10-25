//this file is for quantity of adding the products like buying a same shirt for 5 persons to store as 5 products
export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(//checks whether first product is same in second product
    cartItem => cartItem.id === cartItemToAdd.id
  );
//this code will increase the quantity of items when you click add to cart again the same product
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
