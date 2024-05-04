<template>
  <q-tabs
    v-model="table"
    dense
    class="text-grey bg-grey-3"
    active-bg-color="white"
    indicator-color="primary"
    align="justify"
    narrow-indicator
    active-class="active-tab"
  >
    <q-tab name="data" label="Graph data" />
    <q-tab name="details" label="Node types" />
  </q-tabs>
  <q-tab-panels v-model="table" class="q-pa-none">
    <q-tab-panel name="data"> </q-tab-panel>
    <q-tab-panel name="details">
      <menu-table></menu-table>
    </q-tab-panel>
  </q-tab-panels>
</template>

<script>
export default {
  data() {
    return {
      table: 'data',
    };
  },
};
</script>

<style></style>
