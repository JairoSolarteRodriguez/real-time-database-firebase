import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";


const firebaseConfig = {
  apiKey: "YOUR_APIKEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STIRAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGE_SENDER_ID",
  appId: "YOUR_API_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

function writeUserData(userId, nombre, edad) {
  const db = getDatabase();
  set(ref(db, 'usuarios/' + userId), {
    nombre: nombre,
    edad: edad
  });
}


setTimeout(() => {
  writeUserData(22, 'kduerp', 64);
}, 2000);

setTimeout(() => {
  writeUserData(222, 'ewrt', 10);
}, 4000);

setTimeout(() => {
  writeUserData(2222, 'aski', 40);
}, 6000);

setTimeout(() => {
  writeUserData(22222, 'ehd', 20);
}, 8000);

setTimeout(() => {
  writeUserData(222222, 'sery', 16);
}, 10000);

setTimeout(() => {
  writeUserData(222222, 'hges', 12);
}, 12000);

setTimeout(() => {
  writeUserData(1111, 'eeqwt', 11);
}, 14000);

setTimeout(() => {
  writeUserData(111111, 'easd', 5);
}, 14000);