import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/firestore';


const firebaseConfig ={
  apiKey: "AIzaSyAabX8X7_F0JsqgoBKR1YCQfXIv3Yta4c4",
  authDomain: "fir-react-otp-e4a6d.firebaseapp.com",
  projectId: "fir-react-otp-e4a6d",
  storageBucket: "fir-react-otp-e4a6d.appspot.com",
  messagingSenderId: "70221992534",
  appId: "1:70221992534:web:845a6c5d0900c1508ae1f7"
}
firebase.initializeApp(firebaseConfig);
export default firebase;