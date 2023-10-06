import firebaseConfig from "./firebaseConfigaration";
import firebase, { initializeApp } from "firebase/app";

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()