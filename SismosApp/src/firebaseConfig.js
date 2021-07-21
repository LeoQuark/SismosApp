import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCDbWPwbBZYGyyFqY5FdrZPUb7px-v0Jcw",
  authDomain: "sismosapp-fda41.firebaseapp.com",
  projectId: "sismosapp-fda41.appspot.com",
  storageBucket: "560467081090",
  messagingSenderId: "1:560467081090:web:a82475edd74115ebbb419b",
  appId: "1:560467081090:web:a82475edd74115ebbb419b",
  measurementId: "G-3T8T5JM0KQ",
};

const initFirebase = () => firebase.initializeApp(config);

export default initFirebase;
