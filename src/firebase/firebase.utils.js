import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDtIJzAPpdHWeFF7usJ_PYiEJuA_KjeDrw",
  authDomain: "online-shopping-7d657.firebaseapp.com",
  databaseURL: "https://online-shopping-7d657.firebaseio.com",
  projectId: "online-shopping-7d657",
  storageBucket: "online-shopping-7d657.appspot.com",
  messagingSenderId: "781376323879",
  appId: "1:781376323879:web:73539182789872cf2d6902",
  measurementId: "G-BYF4K1WV5K",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  // 如果用户已经通过firebase登陆了，那么直接显示登陆的用户
  if(snapShot) {
    
    return userRef
  }
  
  
  // 如果用户不存在，在firebase中创建一个用户
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      
    }
  }

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
