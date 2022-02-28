// Look inside the existing cart items to see if that cart item already exists
export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        // return a new array
        // create a new object where we have the cart item and a new quantity 
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
    }

    // if cart item is not found in the array
    // return new array with all the existing cart items 
    // add in an object which is equal to cartItemToAdd except it has a base quantity of 1
    // the quantity gets attached the first time around
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

// figure out if there is an existing cart item already in the cart items 
// check if the quantity = 1 so it can be removed
// otherwise decrease the quantity
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    // keep every other cart item the exact same as they don't need to be modified
    return cartItems.map( cartItem =>
        cartItem.id === cartItemToRemove.id 
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
}