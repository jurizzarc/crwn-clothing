import React from 'react';

import { CartItemContainer, ItemImage, ItemDetails } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
    return (
        <CartItemContainer>
            <ItemImage src={imageUrl} alt='item' />
            <ItemDetails>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x ${price}</span>
            </ItemDetails>
        </CartItemContainer>
    );
};

export default CartItem;