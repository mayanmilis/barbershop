import firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAIZLwZmpPUnrJrerOiOqgdJ5UFaEqlur0",
    authDomain: "barber-shop-98564.firebaseapp.com",
    databaseURL: "https://barber-shop-98564.firebaseio.com",
    projectId: "barber-shop-98564",
    storageBucket: "barber-shop-98564.appspot.com",
    messagingSenderId: "981039095204",
    appId: "1:981039095204:web:b9de2b1aa4b3f696"
  };
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  const database = firebase.firestore();

  export {
    storage, database, firebase as default
  }

