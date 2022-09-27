import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkyi1b0tV-5LjWqLiZi2_EGyFOAfACT3o",
  authDomain: "olx-clone-sample1.firebaseapp.com",
  projectId: "olx-clone-sample1",
  storageBucket: "olx-clone-sample1.appspot.com",
  messagingSenderId: "264583186343",
  appId: "1:264583186343:web:4d7af92961d3545f171882",
  measurementId: "G-3NDDPGR003"
};


  export default firebase.initializeApp(firebaseConfig)