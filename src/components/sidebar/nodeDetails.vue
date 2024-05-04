<template>
  <q-list dense bordered separator>
    <q-item>
      <q-item-section class="text-grey-5"> Creator: </q-item-section>
      <q-item-section> Jaja </q-item-section>
    </q-item>
    <q-item>
      <q-item-section> Created: </q-item-section>
      <q-item-section> {{ Date.now() }} </q-item-section>
    </q-item>
    <q-item>
      <q-item-section> Schedule: </q-item-section>
      <q-item-section> aw </q-item-section>
    </q-item>
    <q-item>
      <q-item-section> Done: </q-item-section>
      <q-item-section> aw </q-item-section>
    </q-item>
    <q-item>
      <q-item-section> NodeID: </q-item-section>
      <q-item-section> {{ selected_node }} </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
import { CounterStore } from '../../stores/example-store';
import { storeToRefs } from 'pinia';

export default {
  setup() {
    const { selected_node } = storeToRefs(CounterStore);
    return {
      selected_node: selected_node,
    };
  },
};
</script>

<style></style>
