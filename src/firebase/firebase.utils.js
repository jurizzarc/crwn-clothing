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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;