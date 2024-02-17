// firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "1234",
  authDomain: "1234",
  projectId: "1234",
  storageBucket: "1234",
  messagingSenderId: "1234",
  appId: "1234",
  measurementId: "1234"
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const auth = getAuth(app);
