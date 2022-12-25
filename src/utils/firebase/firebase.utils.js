import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBNOEryfJRXocUQO3bYXBUn7aM431V4wm0",
  authDomain: "crwn-db-528bf.firebaseapp.com",
  projectId: "crwn-db-528bf",
  storageBucket: "crwn-db-528bf.appspot.com",
  messagingSenderId: "509728921933",
  appId: "1:509728921933:web:724638fc30a438aa853f04"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
