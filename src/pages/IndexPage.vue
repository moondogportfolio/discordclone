<template>
  <div class="grid-cont">
    <div class="table-details" v-if="false">
      <table-details-vue></table-details-vue>
    </div>
    <div class="node-map">
      <main-graph-view-vue
        :selectedNodeId="selectedNodeId"
        :selectedNode="selectedNodeObject"
      ></main-graph-view-vue>
    </div>
    <node-sidebar
      class="side-bar"
      v-if="revealSidebar"
      @close-sidebar="revealSidebar = false"
      :selectedNodeId="selectedNodeId"
    ></node-sidebar>
  </div>
</template>

<script>
import nodeSidebar from 'components/nodeSidebar.vue';
import { ref } from 'vue';
import { CounterStore } from '../stores/example-store';
import { storeToRefs } from 'pinia';
import tableDetailsVue from 'src/components/tableDetails.vue';
import mainGraphViewVue from 'src/components/mainGraphView.vue';

export default {
  setup() {
    const { selectedNodeId, selectedNodeObject } = storeToRefs(CounterStore);
    return {
      revealSidebar: ref(true),
      selectedNodeId,
      selectedNodeObject,
    };
  },
  components: { mainGraphViewVue, nodeSidebar, tableDetailsVue },
};
</script>

<style scoped>
.grid-cont {
  height: 100%;
  display: grid;
  grid-template-columns: 2.5fr 3fr 4fr;
  grid-template-areas: 'gridmap gridmap sidebar';
}

.table-details {
  grid-area: tabledetails;
  overflow: hidden;
  background: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 10px 8px;
  z-index: 1000;
}

.node-map {
  grid-area: gridmap;
  overflow: hidden;
}

.side-bar {
  grid-area: sidebar;
  background: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 10px 8px;
  z-index: 1000;
}
</style>
