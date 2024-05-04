<template>
  <q-btn round icon="camera" @click="alert = true"
    ><q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]">
      Create standalone node
    </q-tooltip>
  </q-btn>
  <div>
    <q-menu v-model="alert" anchor="top middle" self="bottom middle">
      <q-list style="min-width: 100px">
        <q-item clickable>
          <q-input
            dense
            v-model="data"
            autofocus
            placeholder="Node name"
          ></q-input>
        </q-item>
        <q-separator />
        <q-item clickable>
          <q-input dense v-model="data" placeholder="Node type"></q-input>
        </q-item>
      </q-list>
    </q-menu>
  </div>
</template>

<script lang="ts">
import { createNode } from 'components/cyto/cytoNodes';
import { ref } from 'vue';

export default {
  setup() {
    return {
      createNode,
      label: ref(''),
      alert: ref(false),
      data: ref(''),
    };
  },
};
</script>

<style></style>
