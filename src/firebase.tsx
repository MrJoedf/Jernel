import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDq2YvClnR9ZCkpIA4Akn0k19i-o0cNm9U",
    authDomain: "jernel-ed2d1.firebaseapp.com",
    databaseURL: "https://jernel-ed2d1-default-rtdb.firebaseio.com",
    projectId: "jernel-ed2d1",
    storageBucket: "jernel-ed2d1.appspot.com",
    messagingSenderId: "264985700041",
    appId: "1:264985700041:web:39859845e6b37f0ba4cf18",
    measurementId: "G-R00JSE0RW1"
  };
  // Initialize Firebase
const firebaseDB = firebase.initializeApp(firebaseConfig);

export default firebaseDB;