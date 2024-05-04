<template>
  <q-btn round icon="gesture" @click="fcose_render"
    ><q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]">
      Redraw nodes
    </q-tooltip></q-btn
  >
</template>

<script lang="ts">
import { fcose_render } from 'components/cyto/cytoNodes';

export default {
  setup() {
    return {
      fcose_render,
    };
  },
};
</script>

<style></style>
