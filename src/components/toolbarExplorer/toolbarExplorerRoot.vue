<template>
  <q-btn icon="arrow_upward" round @click="$emit('viewSupergraph')"></q-btn>
  <q-btn icon="arrow_downward" round @click="$emit('viewSubgraph')"></q-btn>
  <redraw-graph></redraw-graph>
  <center-graph></center-graph>
</template>

<script>
import CenterGraph from './centerGraph.vue';
import redrawGraph from './redrawGraph.vue';

export default {
  components: { redrawGraph, CenterGraph },
  emits: ['viewSupergraph', 'viewSubgraph'],
  methods: {
    viewSubgraph() {
      return;
    },
    viewParentgraph() {
      return;
    },
  },
};
</script>

<style></style>
