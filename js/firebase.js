import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCldp5Te4Kz3-pYV7BGX0qlu0DUsOWJHWY",
  authDomain: "perekur-e3d1f.firebaseapp.com",
  projectId: "perekur-e3d1f",
  storageBucket: "perekur-e3d1f.firebasestorage.app",
  messagingSenderId: "418900430111",
  appId: "1:418900430111:web:f31cea8f45a8f72831b42a",
  measurementId: "G-S7678CTM7D"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
