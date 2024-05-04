import { getDatabase, push, ref, remove } from 'firebase/database';
import { Message } from './types';

export function writePost(channelId: string, message: Message) {
  const db = getDatabase();
  push(ref(db, `channels/${channelId}/messages`), message);
}

export function editPost(
  channelId: string,
  messageId: string,
  message: Message
) {
  const db = getDatabase();
  push(ref(db, `channels/${channelId}/${messageId}`), message);
}

export function removePost(
  channelId: string,
  messageId: string,
  message: Message
) {
  const db = getDatabase();
  remove(ref(db, `channels/${channelId}/${messageId}`));
}

export function addReaction(
  channelId: string,
  messageId: string,
  message: Message
) {
  const db = getDatabase();
  remove(
    ref(
      db,
      `/channels/${channelId}/messages/${messageId}/reactions/{emoji}/@me`
    )
  );
}

export function removeReaction(
  channelId: string,
  messageId: string,
  message: Message
) {
  const db = getDatabase();
  remove(
    ref(
      db,
      `/channels/${channelId}/messages/${messageId}/reactions/{emoji}/@me`
    )
  );
}
