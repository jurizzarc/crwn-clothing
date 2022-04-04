import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCh_8VJ6aV0lSkMK-P1hI0qTjH3D5I5ZpI",
    authDomain: "crwn-db-1b79e.firebaseapp.com",
    projectId: "crwn-db-1b79e",
    storageBucket: "crwn-db-1b79e.appspot.com",
    messagingSenderId: "228367670395",
    appId: "1:228367670395:web:ac315accda67cbd0d096de",
    measurementId: "G-B64CGR0TEV"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const addCollectionAndDocuments = async (
    collectionKey, objectsToAdd
) => {
    // create collection using collectionKey
    const collectionRef = firestore.collection(collectionKey);
    // add objects into the collection
    const batch = firestore.batch();
    // .forEach() doesn't return an array the way .map() does
    objectsToAdd.forEach(obj => {
        // get the document at an empty string, randomnly generate a random id
        const newDocRef = collectionRef.doc();
        // set the values
        batch.set(newDocRef, obj);
    });
    // fire off the batch request
    return await batch.commit();
};

// get array of collections (the whole snapshot) and convert to an object
export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        };
    });
    
    return transformedCollection.reduce((accumulator, collection) => {
        // get empty object with the property of the category that's equal to the corresponding collection
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
};

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject);
    });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;