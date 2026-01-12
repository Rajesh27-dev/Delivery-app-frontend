import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBntiURjDSWCdfNIpxnz_zbkZGwRk3Ddd0",
  authDomain: "delivery-app-44b8f.firebaseapp.com",
  projectId: "delivery-app-44b8f",
  storageBucket: "delivery-app-44b8f.firebasestorage.app",
  messagingSenderId: "466261335634",
  appId: "1:466261335634:web:ed3a8273f2cf76ddd9c98b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
