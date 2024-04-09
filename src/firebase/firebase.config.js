import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAU6T9z96HZbQxT3qlSY-wToOODNifeHL4",
  authDomain: "b9a9-estate-project.firebaseapp.com",
  projectId: "b9a9-estate-project",
  storageBucket: "b9a9-estate-project.appspot.com",
  messagingSenderId: "370107754544",
  appId: "1:370107754544:web:7b794d7c47bb7c12eae5f5"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;