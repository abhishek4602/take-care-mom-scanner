import logo from './logo.svg';
import './App.css';
import { createWorker } from 'tesseract.js';
import Tesseract from 'tesseract.js';
import { useState ,useEffect} from 'react';
import sampleImage from './assets/images.jpeg';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Upload from './Upload/Upload.js';

const firebaseConfig = {
  apiKey: "AIzaSyCKg-mGLcGthhMx4czEMds_k8GOXLSF12I",
  authDomain: "takecaremom-60f9b.firebaseapp.com",
  projectId: "takecaremom-60f9b",
  storageBucket: "takecaremom-60f9b.appspot.com",
  messagingSenderId: "259931007890",
  appId: "1:259931007890:web:11d252d2e932c653daef4b",
  measurementId: "G-WEYE16SP51"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



function App() {
  useEffect(() => {
  
  });
  return (
    // <p spellCheck="true" >{e}</p>
<Upload></Upload>

  );
}

export default App;


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCKg-mGLcGthhMx4czEMds_k8GOXLSF12I",
//   authDomain: "takecaremom-60f9b.firebaseapp.com",
//   projectId: "takecaremom-60f9b",
//   storageBucket: "takecaremom-60f9b.appspot.com",
//   messagingSenderId: "259931007890",
//   appId: "1:259931007890:web:11d252d2e932c653daef4b",
//   measurementId: "G-WEYE16SP51"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);