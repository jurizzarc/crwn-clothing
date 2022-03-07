import ShopActionTypes from './shop-types';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
});

// actual function that we pass into components to begin this process
// if redux-thunk middleware is enabled, any time you attempt to dispatch
// a function instead of an object, the middleware will call the function
// with dispatch method itself as the first argument

// return this function which can dispatch multiple actions
// which in turn allows us to handle asynchronous activity inside of
// a function instead of a component
export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        // the moment this function is called, dispatch fetchCollectionsStart()
        dispatch(fetchCollectionsStart());
        // then begin this asynchronous request
        collectionRef
            .get()
            .then(snapshot => {
                const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
                dispatch(fetchCollectionsSuccess(collectionsMap));
        })
        .catch(error => dispatch(fetchCollectionsFailure(error.message)));
    };
};