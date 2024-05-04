<template>
  <q-input class="q-my-sm" outlined v-model="title" label="Title"></q-input>
  <q-input
    class="q-my-sm"
    outlined
    v-model="content"
    autogrow
    label="Content"
  ></q-input>
  <slot :title="title" :content="content"></slot>
</template>

<script>
export default {
  data() {
    return {
      title: 'a',
      content: 'b',
    };
  },
  methods: {
    wah() {
      console.log('SAVED');
    },
  },
};
</script>

<style></style>
