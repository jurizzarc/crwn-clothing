import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

// get all the keys, map over that array of keys to get the value of collections object at that key, give an array of items 
export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => 
        collections ? Object.keys(collections).map(key => collections[key]) : []
);

// find collection.id matching the url parameter of the collection id map
// curried function - a function that returns a function
export const selectCollection = memoize((collectionUrlParam) => 
    createSelector(
        [selectCollections],
        collections => (collections ? collections[collectionUrlParam] : null)
    )
);

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

// a selector that checks whether or not the collections value is actually loaded
// converts value to a boolean
export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
);