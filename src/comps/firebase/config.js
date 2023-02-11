import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDPdVXrvWvZvzL0NYxX0QnK-o3JtUiy9bI",
  authDomain: "aestheticbakester-342cc.firebaseapp.com",
  projectId: "aestheticbakester-342cc",
  storageBucket: "aestheticbakester-342cc.appspot.com",
  messagingSenderId: "367768666765",
  appId: "1:367768666765:web:61088c35fae4ecac6f18c4",
  measurementId: "G-TQVT4N2C9B"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };