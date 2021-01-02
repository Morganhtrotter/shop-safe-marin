import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-social/bootstrap-social.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp({
	apiKey: "AIzaSyD4t9Ui8Tm2KsMxE0lhUBH_yk4jnLfw06g",
    authDomain: "shop-safe-marin.firebaseapp.com",
    databaseURL: "https://shop-safe-marin.firebaseio.com",
    projectId: "shop-safe-marin",
    storageBucket: "shop-safe-marin.appspot.com",
    messagingSenderId: "104700287434",
    appId: "1:104700287434:web:48a7d6002f8d49b6e35733",
    measurementId: "G-6CGWFHY9B4"
});

// Get a reference to the database service
var database = firebase.database();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
