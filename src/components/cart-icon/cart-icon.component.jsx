import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//action from redux for cartdropdown icon
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    
    <span className='item-count'>{itemCount}
    </span>
  </div>
);
//this code to implement the cart dropdown icon
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});
//to add the total amount of items you added in cart display in icon 
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);// to send as a props the tooglecarthidden and itemcount to carticon as props 
//connect mapstateprops and mapdispatchtoprops is used
