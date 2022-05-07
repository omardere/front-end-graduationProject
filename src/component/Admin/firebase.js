import firebase from 'firebase';
import "firebase/firebase-firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBPGA_b-fge4RWwvOq99j3jWMcWQQXvhlc",
    authDomain: "push-2021a.firebaseapp.com",
    projectId: "push-2021a",
    storageBucket: "push-2021a.appspot.com",
    messagingSenderId: "76244172776",
    appId: "1:76244172776:web:eb15ffd0c0dc8c7362ee5d"
  };
  firebase.initializeApp(firebaseConfig);
  export default firebase