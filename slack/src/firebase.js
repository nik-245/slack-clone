import firebase from "firebase";

const firebaseConfig = {
    
    apiKey: "AIzaSyCLLya98EepQlJz6HJvLUeM1vCCLM43Vi8",
    authDomain: "slack-clone-11636.firebaseapp.com",
    projectId: "slack-clone-11636",
    storageBucket: "slack-clone-11636.appspot.com",
    messagingSenderId: "595471625106",
    appId: "1:595471625106:web:02398484d40fe379e56f4b"
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;