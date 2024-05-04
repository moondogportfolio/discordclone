<template>
  <q-btn round icon="leak_remove" @click="linkNodes"
    ><q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]">
      Link nodes
    </q-tooltip></q-btn
  >
</template>

<script>
import { linkNodes } from 'components/cyto/cytoNodes';

export default {
  setup() {
    return {
      linkNodes,
    };
  },
};
</script>

<style></style>
