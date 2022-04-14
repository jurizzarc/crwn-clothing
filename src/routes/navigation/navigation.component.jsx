import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { selectCurrentUser } from '../../store/user/user.selector';
import { signOutStart } from '../../store/user/user.action';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { 
    HeaderContainer, 
    LogoContainer, 
    OptionsContainer, 
    OptionLink 
} from './navigation.styles';

const Navigation = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);

    const signOutUser = () => dispatch(signOutStart);

    return (
        <Fragment>
            <HeaderContainer>
                <LogoContainer to="/">
                    <Logo className='logo' />
                </LogoContainer>
                <OptionsContainer>
                    <OptionLink to='/shop'>SHOP</OptionLink>
                    {
                        currentUser ? (
                            <OptionLink as='span' onClick={signOutUser}>
                                SIGN OUT
                            </OptionLink>
                        ) : (
                            <OptionLink to='/signin'>SIGN IN</OptionLink>
                        )
                    }
                    <CartIcon />
                </OptionsContainer>
                { isCartOpen && <CartDropdown /> }
            </HeaderContainer>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;