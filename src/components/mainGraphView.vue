<template>
  <!-- <q-dialog v-model="dialog">
    <q-card style="width: 100vw">
      <q-video
        full-width
        :ratio="16 / 9"
        src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
      />
    </q-card>
  </q-dialog> -->

  <div class="floating-top row q-gutter-x-sm">
    <toolbar-explorer-root-vue
      @viewSubgraph="viewSubgraph"
      @viewSupergraph="viewSupergraph"
    ></toolbar-explorer-root-vue>
  </div>
  <div class="cy" id="cy"></div>
  <div class="floating row q-gutter-x-sm">
    <router-view
      @createGroupNode="createGroupNode"
      @createLinkedNode="createLinkedNode"
      @createSiblingNode="createSiblingNode"
    ></router-view>
  </div>
  <div>{{ $route.params }}</div>
</template>

<script>
import { ref } from 'vue';
import {
  cyto,
  initCyto,
  fcose_render,
  createNode,
  createLinkedNode,
  createCompositeNode,
} from './cyto/cytoNodes';
import toolbarExplorerRootVue from './toolbarExplorer/toolbarExplorerRoot.vue';
import { viewSubgraph, viewSupergraph } from './cyto/cytoSubgraph';

export default {
  props: ['selectedNodeId', 'selectedNode'],
  components: {
    toolbarExplorerRootVue,
  },
  setup() {
    var cyto = null;
    return {
      cyto: cyto,
      dialog: ref(true),
      viewSubgraph,
      viewSupergraph,
    };
  },
  mounted() {
    const cytograph = initCyto();
    cytograph.on('add', fcose_render);
    // cytograph.add(nodes);
  },
  methods: {
    createSiblingNode() {
      const ParentNodeId =
        this.selectedNode.data('parent') || createCompositeNode().id();
      createNode(this.selectedNodeId, cyto, ParentNodeId);
      this.selectedNode.move({ parent: ParentNodeId });
    },
    createGroupNode() {
      const selectedNode = cyto.elements('node:selected');
      if (selectedNode.length < 1) return;
      const newNodeId = createCompositeNode().id();
      selectedNode.forEach((ele) => {
        ele.move({ parent: newNodeId });
      });
    },
    createLinkedNode() {
      const { newNode, newEdge } = createLinkedNode(this.selectedNodeId);
      cyto.elements(`#${this.selectedNodeId}`).unselect();
      newNode.select();
    },
  },
};
</script>

<style>
.cy {
  height: 100%;
  width: 100%;
  /* border: 1px solid red; */
}

.floating-top {
  position: absolute;
  top: 60px;
  left: 30px;
  z-index: 1000;
}

.floating {
  position: absolute;
  bottom: 30px;
  left: 30px;
}
</style>
