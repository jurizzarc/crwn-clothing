import { takeLatest, call, put, all } from 'redux-saga/effects';

import { firestore, convertCollectionsSnapshotToMap } from '../../utils/firebase/firebase.utils';

import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop-actions';

import ShopActionTypes from './shop-types';

export function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        // value comes back in promise form
        const snapshot = yield collectionRef.get();
        // call() invokes functions
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        // put() works the same way as dispatch(), puts out an object
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }
}

export function* fetchCollectionsStart() {
    // to issue this API call only once
    // if takeLatest() fires multiple times, the last one will probably get the most up-to-date data from the database
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync 
    );
}

export function* shopSagas() {
    yield all([call(fetchCollectionsStart)]);
}