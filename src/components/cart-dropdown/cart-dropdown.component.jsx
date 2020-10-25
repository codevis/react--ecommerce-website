
//it is icon having the  value of your cart value to show...
// this will link to header component...
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
//button used in the icon comoponent
import CustomButton from '../custom-button/custom-button.component';
//this component will add the items in icon component(header componet cart icon ) to show the items you added on your cart
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';


import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());//when we click checkout page then the  cart icon will dissaper 
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

//this component will add the items in icon component(header componet cart icon ) to show the items you added on your cart
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
//this pass the data as props in this component so we can acess it
