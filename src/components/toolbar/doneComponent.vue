<template>
  <q-fab
    color="blue-1"
    text-color="black"
    icon="keyboard_arrow_up"
    direction="up"
    padding="xs"
    label="To start"
    push
  >
    <q-fab-action
      color="grey"
      text-color="black"
      @click="onClick"
      icon="timer"
    />
    <q-fab-action
      color="green"
      text-color="black"
      @click="onClick"
      icon="check"
    />
    <q-fab-action
      color="amber"
      text-color="black"
      @click="onClick"
      icon="timer"
    />
    <q-fab-action
      color="blue-4"
      text-color="black"
      @click="onClick"
      icon="flag"
    />
    <q-fab-action
      color="red-4"
      text-color="black"
      @click="onClick"
      icon="pan_tool"
    />
  </q-fab>
</template>

<script>
export default {
  setup() {
    return {
      options: ['Done', 'Doing', 'To start'],
    };
  },
  methods: {
    onClick() {
      return;
    },
  },
  data() {
    return {
      isDone: false,
    };
  },
};
</script>

<style></style>
