import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2RBzz80EW7J6O0zOOK8h_DRyZBUwBRJ0",
  authDomain: "crwn-clothing-db-fcca4.firebaseapp.com",
  projectId: "crwn-clothing-db-fcca4",
  storageBucket: "crwn-clothing-db-fcca4.appspot.com",
  messagingSenderId: "1097735451257",
  appId: "1:1097735451257:web:8d73ecf85fb6aafc1a1aa8",
};

const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const addProductsCollection = async (collectionKey, categoryItems) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  for (let item of categoryItems) {
    const docRef = doc(collectionRef, item.title.toLowerCase());
    batch.set(docRef, item);
  }

  await batch.commit();
  // console.log("done");
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const quarySnapshot = await getDocs(q);

  const categoryMap = quarySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categoryMap;
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const SignOut = async () => await signOut(auth);

export const onAuthStateChangedListener = (kashyap) => {
  onAuthStateChanged(auth, kashyap);
};
