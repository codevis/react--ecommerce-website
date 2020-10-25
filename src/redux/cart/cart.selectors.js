//this implement the reselect which installed as npm install reselect
// for cart icon increses the cart items adding into the cart
import { createSelector } from 'reselect';

const selectCart = state => state.cart;
//these four selectors are used to implement the cart components simple and used wherever we want
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);
export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>  
        accumalatedQuantity + cartItem.quantity,
      0
    )
);
export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity * cartItem.price,
      0
    )
);
