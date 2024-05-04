<template>
  <div>
    <q-btn label="Create room" @click="createChannel({ name: 'aw' })"></q-btn>
    <q-btn label="Delete room" @click="deleteChannel()"></q-btn>
    <q-btn
      label="Create user"
      @click="addUser({ username: 'qwe', discriminator: '123' })"
    ></q-btn>
    <q-btn label="Search user" @click="searchUser('jaja')"></q-btn>
    <q-input v-model="text" @keypress.enter="send" class="col-shrink"></q-input>
  </div>
  <q-scroll-area class="col" ref="scroll">
    <q-list v-if="messages">
      <q-item v-for="[k, v] in Object.entries(messages)" :key="k">
        <q-item-label>{{ v }}</q-item-label>
      </q-item>
    </q-list>
  </q-scroll-area>
</template>

<script>
import { initFirestoreDb } from 'src/logic/chat/firebase';
import { onValue } from '@firebase/database';
import {
  createChannel,
  enterChannel,
  deleteChannel,
} from 'src/logic/chat/manageRooms';
import { writePost } from 'src/logic/chat/managePosts';
import { searchUser, addUser } from 'src/logic/chat/manageUsers';

initFirestoreDb();
const { chatRef, chatList } = await enterChannel();

export default {
  setup() {
    return {
      deleteChannel,
      createChannel,
      searchUser,
      addUser,
    };
  },
  mounted() {
    this.messages = chatList;
    onValue(chatRef, this.receive);
  },
  methods: {
    receive(snapshot) {
      this.messages = snapshot.val();
      this.$refs.scroll.setScrollPercentage('vertical', 1.1, 200);
    },
    send() {
      writePost('discord', this.text);
      this.text = '';
    },
  },
  data() {
    return {
      messages: {},
      text: 'a',
    };
  },
};
</script>

<style></style>
