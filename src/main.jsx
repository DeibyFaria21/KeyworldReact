import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//CDN de la librería de Chakra
/* import { ChakraProvider } from '@chakra-ui/react' */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css' 
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAVIohdrZ9QofLAL_v2LvkjoTrLq1LgFk",
  authDomain: "keyworldreact.firebaseapp.com",
  projectId: "keyworldreact",
  storageBucket: "keyworldreact.appspot.com",
  messagingSenderId: "706275496703",
  appId: "1:706275496703:web:600edb07b0f1571905f2ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>
)
