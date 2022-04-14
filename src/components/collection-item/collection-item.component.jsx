import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../store/cart/cart-actions';

import { CollectionItemContainer, CollectionItemImage, CollectionItemFooter, CollectionItemName, CollectionItemPrice, AddItemButton } from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;

    return (
        <CollectionItemContainer>
            <CollectionItemImage
                className='image'
                imageUrl={imageUrl}
            />
            <CollectionItemFooter>
                <CollectionItemName>{name}</CollectionItemName>
                <CollectionItemPrice>{price}</CollectionItemPrice>
            </CollectionItemFooter>
            <AddItemButton onClick={() => addItem(item)} inverted>
                Add to cart
            </AddItemButton>
        </CollectionItemContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(
    null, 
    mapDispatchToProps
)(CollectionItem);