import { createSelector } from 'reselect';

// input selector 
// gets the whole state and returns a slice of it
const selectCartReducer = (state) => state.cart;

// pass the cart object into this function
// pass out the cart items
export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cart) => cart.isCartOpen
);

// the reducer state is passed into the selector
// selectCartItems references selectCart
// pass cart items into this function
// reduce and finally give the actual final cart items count
// give the count as a prop to the CartIcon component
export const selectCartCount = createSelector([selectCartItems], (cartItems) => 
    cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity, 
        0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) => 
    cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity * cartItem.price, 
        0
    )
);