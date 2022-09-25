import firebase from 'firebase'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGx2co9Fj8duWHemOdgD4E8jA0y7nIKbs",
  authDomain: "dzsample1.firebaseapp.com",
  projectId: "dzsample1",
  storageBucket: "dzsample1.appspot.com",
  messagingSenderId: "290512054058",
  appId: "1:290512054058:web:acb17ebbe6563ef435e053",
  measurementId: "G-KMP21YWS7C"
};

  export default firebase.initializeApp(firebaseConfig)