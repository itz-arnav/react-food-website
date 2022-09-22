import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDlELXNGsYsaenxEctBhXjnNtobNChIwW8",
  authDomain: "food-delivery-app-bb23d.firebaseapp.com",
  databaseURL: "https://food-delivery-app-bb23d-default-rtdb.firebaseio.com",
  projectId: "food-delivery-app-bb23d",
  storageBucket: "food-delivery-app-bb23d.appspot.com",
  messagingSenderId: "606911368581",
  appId: "1:606911368581:web:28667ab21a16804c2408ec"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
