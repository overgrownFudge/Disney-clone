import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
  apiKey: "AIzaSyCRxsfRcxqtfARirjsjAnac-Rl-ibM7ir0",

  authDomain: "disneyplus-clone-6cf55.firebaseapp.com",

  projectId: "disneyplus-clone-6cf55",

  storageBucket: "disneyplus-clone-6cf55.appspot.com",

  messagingSenderId: "761205832204",

  appId: "1:761205832204:web:047a4acfad5ccb10b44c29",

  measurementId: "G-H6M8XQP3V0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider , storage };
export default db;
