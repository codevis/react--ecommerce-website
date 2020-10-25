import CartActionTypes from './cart.types';
//this cart utils is for quantity of adding the products like buying a same shirt for 5 persons to store as 5 products
import { addItemToCart, removeItemFromCart  } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,//to hide a dropdown
  cartItems: []//this for adding buying items in cart-dropdown component when you clicks add to cart
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden//for using the cartdropdown functionality
      };
    case CartActionTypes.ADD_ITEM://this for adding buying items in cart-dropdown component when you clicks add to cart
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)//to increase the quantity of items in cart icon component 
      };
   
      case CartActionTypes.REMOVE_ITEM:
        return {
          ...state,
          cartItems: removeItemFromCart(state.cartItems, action.payload)
        };
      case CartActionTypes.CLEAR_ITEM_FROM_CART:
        return {
          ...state,
          cartItems: state.cartItems.filter(
            cartItem => cartItem.id !== action.payload.id//if it matches you exit item then remove it from cart
            
          )
        };
      default:
        return state;
    }
  };
export default cartReducer;
