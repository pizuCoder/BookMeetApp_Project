import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
 apiKey: "AIzaSyB7r4gV1ktZV4dH72ta9wjqtcckjWRxaPc",
 projectId: "ttecproj-bookmeet"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);