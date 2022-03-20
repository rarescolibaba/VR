// Import the functions from the SDKs needed
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-analytics.js";
// TODO: Add SDKs for Firebase products used
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBgMtEWtXXhy8yjkKHI7EnQzoL-xd7mcns",
  authDomain: "atestatvr.firebaseapp.com",
  projectId: "atestatvr",
  storageBucket: "atestatvr.appspot.com",
  messagingSenderId: "656895117107",
  appId: "1:656895117107:web:86ab9043c3433457aa6046"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
