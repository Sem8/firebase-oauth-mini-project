import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAlk8TKPyExuY-5XGoH36iBhgUn5T0Mo44",
  authDomain: "fir-oauth-node-react.firebaseapp.com",
  databaseURL: "https://fir-oauth-node-react.firebaseio.com",
  projectId: "fir-oauth-node-react",
  storageBucket: "fir-oauth-node-react.appspot.com",
  messagingSenderId: "717882229402",
  appId: "1:717882229402:web:b0dc9bf014e390d1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({
    "prompt": "select_account"
});

export default firebase;
