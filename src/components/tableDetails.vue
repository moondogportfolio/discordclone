<template>
  <q-tabs
    v-model="tab"
    dense
    class="text-grey"
    active-color="primary"
    indicator-color="primary"
    align="justify"
    narrow-indicator
  >
    <q-tab name="summary" label="Summary" />
    <q-tab name="details" label="Details" />
    <q-tab name="defaults" label="Defaults" />
  </q-tabs>
  <q-tab-panels v-model="tab">
    <q-tab-panel name="summary"> </q-tab-panel>
    <q-tab-panel name="details"> </q-tab-panel>
    <q-tab-panel name="defaults">
      <table-defaults-vue></table-defaults-vue>
    </q-tab-panel>
  </q-tab-panels>
</template>

<script>
import tableDefaultsVue from './tableDefaults/tableDefaults.vue';

export default {
  components: {
    tableDefaultsVue,
  },
  data() {
    return {
      tab: 'defaults',
    };
  },
};
</script>

<style></style>
