import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDYhaelRT86VFiTriFJCd7DmvdJvAzfvP4",
  authDomain: "fir-login-f4362.firebaseapp.com",
  projectId: "fir-login-f4362",
  storageBucket: "fir-login-f4362.appspot.com",
  messagingSenderId: "886585270451",
  appId: "1:886585270451:web:a9a8ff0fc188f7318010c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
export { app, auth }