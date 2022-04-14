import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../store/cart/cart-actions';

import { CheckoutItemContainer, CheckoutItemImage, ItemInfo, ItemQuantity, RemoveItemButton} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;

    return (
        <CheckoutItemContainer>
            <CheckoutItemImage>
                <img src={imageUrl} alt='item' />
            </CheckoutItemImage>
            <ItemInfo>{name}</ItemInfo>
            <ItemQuantity>
                <div onClick={() => removeItem(cartItem)}>
                    &#10094;
                </div>
                <span>{quantity}</span>
                <div onClick={() => addItem(cartItem)}>
                    &#10095;
                </div>
            </ItemQuantity>
            <ItemInfo>{price}</ItemInfo>
            <RemoveItemButton onClick={() => clearItem(cartItem)}>
                &#10005;
            </RemoveItemButton>
        </CheckoutItemContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});

export default connect(
    null, 
    mapDispatchToProps
)(CheckoutItem);