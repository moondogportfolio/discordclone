<template>
  <q-input class="q-my-sm" outlined v-model="label" label="Label"></q-input>
  <q-input class="q-my-sm" outlined v-model="link" label="Link"></q-input>
  <q-input class="q-my-sm" outlined v-model="details" label="Title"></q-input>
  <slot :label="label" :link="link" :details="details"></slot>
</template>

<script>
export default {
  data() {
    return {
      label: null,
      link: null,
      details: null,
    };
  },
  methods: {
    sawave() {
      console.log('SAVED');
    },
  },
};
</script>

<style></style>
