<template>
  <q-btn round icon="filter_center_focus" @click="centerMap"
    ><q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]">
      Center node map
    </q-tooltip></q-btn
  >
</template>

<script lang="ts">
import { cyto } from 'components/cyto/cytoNodes';

export default {
  methods: {
    centerMap() {
      cyto.fit();
    },
  },
};
</script>

<style></style>
