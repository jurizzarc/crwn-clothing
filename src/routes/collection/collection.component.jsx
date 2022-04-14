import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../store/shop/shop-selectors';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { CollectionPageContainer, CollectionTitle, CollectionItems  } from './collection.styles';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
        <CollectionPageContainer>
            <CollectionTitle>{title}</CollectionTitle>
            <CollectionItems>
                {
                    items.map(item => (
                        <CollectionItem key={item.id} item={item} /> )
                    )
                }
            </CollectionItems>
        </CollectionPageContainer>
    );
};

// ownProps - all the props the CollectionPage component is getting including the match object
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);