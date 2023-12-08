// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDbPB4jb6yLStVKLEMTCqCJiE2j8hDhz8o',
  authDomain: 'rss-app-61113.firebaseapp.com',
  projectId: 'rss-app-61113',
  storageBucket: 'rss-app-61113.appspot.com',
  messagingSenderId: '839157094702',
  appId: '1:839157094702:web:d14eb5038a9031abee02bf',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
