import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import { 
    addItemToCart,
    clearItemFromCart,
    removeItemFromCart
} from '../../store/cart/cart.action';

import { 
    CheckoutItemContainer,
    CheckoutItemImageContainer,
    BaseSpan,
    ItemQuantity,
    ItemArrow,
    ItemValue,
    RemoveItemButton 
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));

    return (
        <CheckoutItemContainer>
            <CheckoutItemImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </CheckoutItemImageContainer>
            <BaseSpan>{name}</BaseSpan>
            <ItemQuantity>
                <ItemArrow onClick={removeItemHandler}>&#10094;</ItemArrow>
                <ItemValue>{quantity}</ItemValue>
                <ItemArrow onClick={addItemHandler}>&#10095;</ItemArrow>
            </ItemQuantity>
            <BaseSpan>{price}</BaseSpan>
            <RemoveItemButton onClick={clearItemHandler}>&#10005;</RemoveItemButton>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;