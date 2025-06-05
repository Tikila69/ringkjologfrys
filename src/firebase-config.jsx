import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCGrqEm6_TvSMsv6bpgonF2ezaVaiaUte0",
  authDomain: "ring-kjol-og-frys.firebaseapp.com",
  projectId: "ring-kjol-og-frys",
  storageBucket: "ring-kjol-og-frys.appspot.com",
  messagingSenderId: "314132105830",
  appId: "1:314132105830:web:7b573f543e2d5234db7ba7",
  measurementId: "G-0X1M90JC75"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)