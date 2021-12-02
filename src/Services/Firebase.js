import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBoHdZt-9rrf-gR9g3spt3yaGATbJN9nvc",
  authDomain: "gb-reactjs-dfd45.firebaseapp.com",
  databaseURL: "https://gb-reactjs-dfd45-default-rtdb.firebaseio.com",
  projectId: "gb-reactjs-dfd45",
  storageBucket: "gb-reactjs-dfd45.appspot.com",
  messagingSenderId: "188456509064",
  appId: "1:188456509064:web:3c50cb179720e52fc7493d",
  measurementId: "G-EGGL1PDQ2T"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.database();

export const profileRef = db.ref("profile");
export const chatsRef = db.ref("chats");
export const messagesRef = db.ref("messages");