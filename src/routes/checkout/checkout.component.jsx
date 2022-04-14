import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../store/cart/cart-selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
// import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import PaymentForm from '../../components/payment-form/payment-form.component';

import { CheckoutPageContainer, CheckoutHeader, CheckoutHeaderBlock, CheckoutTotal } from './checkout.styles';

const CheckoutPage = ({ cartItems, total }) => {
    return (
        <CheckoutPageContainer>
            <CheckoutHeader>
                <CheckoutHeaderBlock>
                    <span>Product</span>
                </CheckoutHeaderBlock>
                <CheckoutHeaderBlock>
                    <span>Description</span>
                </CheckoutHeaderBlock>
                <CheckoutHeaderBlock>
                    <span>Quantity</span>
                </CheckoutHeaderBlock>
                <CheckoutHeaderBlock>
                    <span>Price</span>
                </CheckoutHeaderBlock>
                <CheckoutHeaderBlock>
                    <span>Remove</span>
                </CheckoutHeaderBlock>
            </CheckoutHeader>
            {
                cartItems.map(cartItem => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))
            }
            <CheckoutTotal>
                <span>TOTAL: ${total}</span>
            </CheckoutTotal>
            
            <PaymentForm />
        </CheckoutPageContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);