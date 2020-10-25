

import firebase from 'firebase/app';
import 'firebase/firestore';//for storing data in firebase
import 'firebase/auth';//for authentication in firebase

//firebase sdk snippet cdn in your project setting [ for connecting to firebase]
const config = {
    apiKey: "AIzaSyAqHiGdrlg1Tj9oIp9UX7xRDP1JBBsfnLo",
    authDomain: "react-ecommerece-website.firebaseapp.com",
    databaseURL: "https://react-ecommerece-website.firebaseio.com",
    projectId: "react-ecommerece-website",
    storageBucket: "react-ecommerece-website.appspot.com",
    messagingSenderId: "1092302883127",
    appId: "1:1092302883127:web:78c2b3f827c0f4c9f2f2b2",
    measurementId: "G-C7XBJ61MW6"
  };

  firebase.initializeApp(config);//initializes the firebase connection 
  
  //saving data in firestore and our app 
  //=> firestore to store all personal data
  //=> our app - to know whether user signed in or not
  //or we used to sign in and sign out for every user so..
export const createUserProfileDocument = async (userAuth, additionalData) => {//for user profile for signin
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);//getting the document userref(to see)

  const snapShot = await userRef.get();//to get the data from firestore

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;//user Auth = data
    const createdAt = new Date();
    try {
      await userRef.set({//creating ourself a data by our code
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

 export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  //below code for authentication like google and email
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;