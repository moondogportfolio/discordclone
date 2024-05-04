import {
  getDatabase,
  ref,
  orderByChild,
  query,
  startAt,
  child,
  push,
  orderByKey,
  update,
  onValue,
  equalTo,
} from 'firebase/database';
import { User } from './types';

export function getUser() {
  const db = getDatabase();
}

export function searchUser(username: string) {
  const db = getDatabase();
  const result = query(
    ref(db, 'users'),
    orderByChild('username'),
    equalTo('qwe')
  );
  onValue(result, (data) => {
    console.log(data.val());
  });
}

export function addUser(user: User) {
  const db = getDatabase();
  const refUsers = ref(db, 'users');
  const newUserKey = push(child(ref(db), 'users')).key;
  update(ref(db), { [`users/${newUserKey}`]: user });
}
