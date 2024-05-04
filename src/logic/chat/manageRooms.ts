import {
  getDatabase,
  push,
  update,
  child,
  Database,
  get,
  ref,
  remove,
} from '@firebase/database';
import { Message } from './types';

export function createChannel(channel: Channel) {
  const db = getDatabase();
  const newChannelKey = push(child(ref(db), 'rooms')).key;
  update(ref(db), { [`channels/${newChannelKey}`]: channel });
}

export async function enterChannel(channelId = 'discord') {
  const db = getDatabase();
  const chatRef = ref(db, `channels/${channelId}/messages`);
  const chatList = await get(chatRef).then((snapshot) => {
    return snapshot.val();
  });
  return { chatRef, chatList };
}

export async function deleteChannel(channelId = '-N2uqCH6XJaizRFVjU36') {
  const db = getDatabase();
  const chatRef = ref(db, `channels/${channelId}`);
  remove(chatRef);
}

export function addDMRecipient(channelId: string, userId: string) {
  const db = getDatabase();
  const param = {};
  update(ref(db), { [`/channels/${channelId}/recipients/${userId}`]: param });
}

export function removeDMRecipient(channelId: string, userId: string) {
  const db = getDatabase();
  const param = {};
  remove(ref(db), `/channels/${channelId}/recipients/${userId}`);
}
