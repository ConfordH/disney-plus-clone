import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBVbsWWZ2PrwUjop0bIyoAM4N2dOswe6S8",
  authDomain: "disney-clone-30533.firebaseapp.com",
  projectId: "disney-clone-30533",
  storageBucket: "disney-clone-30533.appspot.com",
  messagingSenderId: "194466219514",
  appId: "1:194466219514:web:9aef8ce979f78e1acf1043",
  measurementId: "G-062X8E1X5Z",
};
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const storage = getStorage();

const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db, provider, storage };
export default db;
