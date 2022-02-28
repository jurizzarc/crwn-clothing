import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop-selectors';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
    console.log(collection);
    return (
        <div className='collection-page'>
            <h2>COLLECTION PAGE</h2>
        </div>
    );
};

// ownProps - all the props the CollectionPage component is getting including the match object
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);