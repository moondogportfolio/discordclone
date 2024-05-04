<template>
  <create-subgraph></create-subgraph>
  <q-separator vertical />
  <link-nodes></link-nodes>
  <create-node></create-node>
  <q-btn round icon="group_work" @click="$emit('createGroupNode')"
    ><q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]">
      <div>Create composite node</div>
      <div>SHIFT + C</div>
    </q-tooltip></q-btn
  >
  <q-separator vertical />
  <q-btn round icon="add_circle" @click="$emit('createLinkedNode')"
    ><q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]">
      New linked node
    </q-tooltip></q-btn
  >
  <q-btn round icon="device_hub" @click="$emit('createSiblingNode')"
    ><q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]">
      New linked node, same parent
    </q-tooltip></q-btn
  >
  <q-separator vertical />
  <done-component-vue></done-component-vue>
  <q-separator vertical />
  <legend-corner-vue></legend-corner-vue>
  <help-button-vue></help-button-vue>
</template>

<script>
import CreateNode from './createNode.vue';
import CreateSubgraph from './createSubgraph.vue';
import doneComponentVue from './doneComponent.vue';
import helpButtonVue from './helpButton.vue';
import legendCornerVue from './legendCorner.vue';
import LinkNodes from './linkNodes.vue';

export default {
  emits: [
    'createSiblingNode',
    'createNode',
    'createGroupNode',
    'createLinkedNode',
  ],
  components: {
    doneComponentVue,
    helpButtonVue,
    legendCornerVue,
    CreateNode,
    LinkNodes,
    CreateSubgraph,
  },
};
</script>

<style></style>
