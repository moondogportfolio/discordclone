<template>
  <div class="column full-height bg-grey-3">
    <q-tabs
      v-model="tab"
      dense
      class="text-grey bg-grey-3 col-shrink q-ml-sm"
      active-bg-color="white"
      indicator-color="primary"
      align="justify"
      narrow-indicator
      active-class="active-tab soft-shadow"
    >
      <q-tab name="data" label="Data" />
      <q-tab name="details" label="Node Details" />
      <q-tab name="graph_data" label="Graph data" />
      <q-tab name="graph_details" label="Node types" />
    </q-tabs>
    <q-tab-panels v-model="tab" class="col">
      <q-tab-panel name="data">
        <q-scroll-area class="fit">
          <q-card-section v-for="component in nodeData" :key="component">
            <template v-if="dynamicComponents?.[component.component]">
              <component
                :is="dynamicComponents[component.component]"
                v-bind="component.data"
              >
              </component>
            </template>
          </q-card-section>
          <q-card-section>
            <quiz-input-vue></quiz-input-vue>
          </q-card-section>
          <q-card-section>
            <base-builder-vue></base-builder-vue>
          </q-card-section>
          <div style="height: 30px"></div>
        </q-scroll-area>
      </q-tab-panel>
      <q-tab-panel name="details">
        <node-details-vue></node-details-vue>
      </q-tab-panel>
      <q-tab-panel name="graph_data"> </q-tab-panel>
      <q-tab-panel name="graph_details">
        <table-defaults></table-defaults>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
import baseBuilderVue from './componentBuilder/baseBuilder.vue';
import { sampleData, sampleData2 } from './componentData';
import nodeDetailsVue from './sidebar/nodeDetails.vue';
import { dynamicComponents } from './dynamicComponents/components';
import quizInputVue from './dynamicComponents/quizInput.vue';
import TableDefaults from './tableDefaults/tableDefaults.vue';

export default {
  emits: ['closeSidebar'],
  props: ['selectedNodeId'],
  components: {
    quizInputVue,
    nodeDetailsVue,
    baseBuilderVue,
    TableDefaults,
  },
  setup() {
    return {
      dynamicComponents: dynamicComponents,
    };
  },
  computed: {
    nodeData() {
      return this.selectedNodeId == 'n0' ? sampleData : sampleData2;
    },
  },
  data() {
    return {
      tab: 'data',
      table: 'data',
      showTable: true,
    };
  },
};
</script>

<style>
.active-tab {
  border-radius: 10px 10px 0 0;
  border-top: 1px solid lightgray;
}

.soft-shadow {
  box-shadow: rgba(149, 157, 165, 0.7) 0px 10px 8px;
}
</style>
