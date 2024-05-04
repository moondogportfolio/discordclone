<template>
  <q-input filled v-model="color" :rules="['anyColor']" class="my-input" dense>
    <template v-slot:append>
      <q-icon name="colorize" class="cursor-pointer" size="sm">
        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
          <q-color v-model="color" />
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>

<script>
export default {
  props: ['initColor'],
  data() {
    return {
      color: this.initColor,
    };
  },
  emits: ['updateColor'],
};
</script>

<style></style>
