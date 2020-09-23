import firebase from "firebase/app";
// Required for side-effects
import "firebase/firestore";
import { config } from "./appConfig";

firebase.initializeApp(config.firebase);

//firebase has a lot of methods, the one used is firestore()
export const fireStore = firebase.firestore();