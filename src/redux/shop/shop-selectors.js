import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
};

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

// find collection.id matching the url parameter of the collection id map
// curried function - a function that returns a function
export const selectCollection = memoize((collectionUrlParam) => 
    createSelector(
        [selectCollections],
        collections => 
            collections.find(
                collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
            )
    )
);