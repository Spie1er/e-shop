import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBeZolVKNwXO-FGxvVtYcjfaG5mtSMeP6Y",
    authDomain: "ecom-25f64.firebaseapp.com",
    databaseURL: "https://ecom-25f64.firebaseio.com",
    projectId: "ecom-25f64",
    storageBucket: "ecom-25f64.appspot.com",
    messagingSenderId: "782679626941",
    appId: "1:782679626941:web:fbec18022216f4510c93d4"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
  
