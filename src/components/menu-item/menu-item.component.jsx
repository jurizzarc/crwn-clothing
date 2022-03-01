import React from 'react';
import { withRouter } from 'react-router-dom';

import { MenuItemContainer, MenuItemImage, MenuItemContent, MenuItemTitle, MenuItemSubtitle } from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <MenuItemContainer 
        size={size}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <MenuItemImage 
            className='background-image'
            imageUrl={imageUrl}
        />
        <MenuItemContent>
            <MenuItemTitle>{title}</MenuItemTitle>
            <MenuItemSubtitle>SHOP NOW</MenuItemSubtitle>
        </MenuItemContent>
    </MenuItemContainer>
);

export default withRouter(MenuItem);