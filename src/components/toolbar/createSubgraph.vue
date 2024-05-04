<template>
  <q-btn round icon="polyline" @click="$emit('createGroupNode')"
    ><q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]">
      <div>Create subgraph</div>
      <div>SHIFT + G</div>
    </q-tooltip></q-btn
  >
</template>

<script>
export default {
  props: ['selectedNode'],
};
</script>

<style></style>
