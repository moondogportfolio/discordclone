<template>
  <q-item class="q-pa-none">
    <q-item-section avatar>
      <q-checkbox v-model="done" />
    </q-item-section>
    <q-item-section>
      <q-item-label lines="1" overline>
        {{ title }}
      </q-item-label>
      <q-item-label lines="3">
        {{ details }}
      </q-item-label>
      <q-item-label lines="1" class="text-blue-grey-7">
        {{ link }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  props: ['title', 'link', 'details'],
  data() {
    return {
      done: true,
    };
  },
};
</script>

<style></style>
