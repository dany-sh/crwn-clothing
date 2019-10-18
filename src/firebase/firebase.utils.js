import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAOrUyAbk9PfViJO42vg-2lOr-2izEIfPU',
  authDomain: 'crwn-db-c2b65.firebaseapp.com',
  databaseURL: 'https://crwn-db-c2b65.firebaseio.com',
  projectId: 'crwn-db-c2b65',
  storageBucket: 'crwn-db-c2b65.appspot.com',
  messagingSenderId: '381296941431',
  appId: '1:381296941431:web:86c46719a401521a5f2972',
  measurementId: 'G-8GX8MW7LYQ'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
