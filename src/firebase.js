import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDTQygsqlj6A4PT9vx5b9hhrG_TWkLCuIY",
  authDomain: "auth-redux-d1863.firebaseapp.com",
  projectId: "auth-redux-d1863",
  storageBucket: "auth-redux-d1863.appspot.com",
  messagingSenderId: "41843213955",
  appId: "1:41843213955:web:3f51447b2cdaea318fbdb6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
