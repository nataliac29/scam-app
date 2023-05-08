// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUIh-8N_od-g__GLKY9xwcTFsEb4yvCIo",
  authDomain: "cs-scam-detector.firebaseapp.com",
  projectId: "cs-scam-detector",
  storageBucket: "cs-scam-detector.appspot.com",
  messagingSenderId: "535268928046",
  appId: "1:535268928046:web:8780b8f354712870924dbf",
  measurementId: "G-58BRTJ7NPS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// const firebaseConfig = {
//   apiKey: "AIzaSyAUIh-8N_od-g__GLKY9xwcTFsEb4yvCIo",
//   authDomain: "cs-scam-detector.firebaseapp.com",
//   projectId: "cs-scam-detector",
//   storageBucket: "cs-scam-detector.appspot.com",
//   messagingSenderId: "535268928046",
//   appId: "1:535268928046:web:8780b8f354712870924dbf",
//   measurementId: "G-58BRTJ7NPS"
// };