import { createSelector } from 'reselect';

// input selector 
// gets the whole state and returns a slice of it
const selectCart = state => state.cart;

// pass the cart object into this function
// pass out the cart items
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

// the reducer state is passed into the selector
// selectCartItems references selectCart
// pass cart items into this function
// reduce and finally give the actual final cart items count
// give the count as a prop to the CartIcon component
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce(
            (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 
            0
        )
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce(
            (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price, 
            0
        )
);