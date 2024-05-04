import { initializeApp } from 'firebase/app';
import {
  getDatabase,
  push,
  ref,
  query,
  set,
  get,
  orderByKey,
  onValue,
  DatabaseReference,
  onChildAdded,
} from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAwV3V_C4WEesDjO6N6FQvTVLydG6x8qH4',
  authDomain: 'fisher-king-35eb4.firebaseapp.com',
  databaseURL: 'https://fisher-king-35eb4.firebaseio.com',
  projectId: 'fisher-king-35eb4',
  storageBucket: 'fisher-king-35eb4.appspot.com',
  messagingSenderId: '843559689334',
  appId: '1:843559689334:web:b279ceef21034275671357',
};

export async function initFirestoreDb() {
  const app = initializeApp(firebaseConfig);
}

// const usersawRef = ref(db, 'users/aw');
// onChildAdded(usersawRef, (data) => {
//   console.log(data);
// });

// function queryDB() {
//   const db = getDatabase(app);
//   const messageRef = ref(db, 'users/aw');
//   onValue(
//     messageRef,
//     (snapshot) => {
//       snapshot.forEach((childSnapshot) => {
//         const childKey = childSnapshot.key;
//         const childData = childSnapshot.val();
//         console.log(childKey, childData);
//       });
//     },
//     {
//       onlyOnce: true,
//     }
//   );
// }

// writeUserData('aw', 'qwe');
