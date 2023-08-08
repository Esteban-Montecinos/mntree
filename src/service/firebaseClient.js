import { useSession } from "@/app/store/session";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9aZtTrFCO-EVVt4imGMcJ1pkUsQQhuUk",
  authDomain: "mntree-2fbbb.firebaseapp.com",
  projectId: "mntree-2fbbb",
  storageBucket: "mntree-2fbbb.appspot.com",
  messagingSenderId: "166121992323",
  appId: "1:166121992323:web:398e60faa8f098c9f4abb6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const AuthState = (onChange) => {
 return onAuthStateChanged(auth, (user) => {
    if (user) {
      const { displayName, email, photoURL, uid } = user;
      onChange({ displayName, email, photoURL, uid })
    } else {
      onChange(null)
    }
  });
}

export const loginWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

export const logout = () => {
  return signOut(auth)
}