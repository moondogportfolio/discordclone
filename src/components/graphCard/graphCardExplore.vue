<template>
  <graph-card>
    <template #description>{{ description }}</template>
    <template #node>6 </template>
    <template #composite>5 </template>
    <template #subgraph> 3 </template>
    <template #extra>
      <q-item dense>
        <q-item-section avatar>
          <q-icon name="star" color="yellow-4" @click="unsubscribe"></q-icon>
        </q-item-section>
        <q-item-section>
          <q-item-label>15</q-item-label>
        </q-item-section>
      </q-item>
    </template>
  </graph-card>
</template>

<script>
import graphCard from './graphCardContainer.vue';

export default {
  components: { graphCard },
  methods: {
    unsubscribe() {
      console.log('a');
    },
  },
  data() {
    return {
      description: `Most Quasar date functions take as parameter either a Unix timestamp or a String representing a date which needs to be parsable by the native JS Date constructor. Some examples: 1497159857411, Sun Jun 11 2017 08:44:42 GMT+0300, 2017-06-16.

Returned values are all JS Dates.

Get familiar with JS native Date class, which is very powerful, and remember that you don’t need solutions like Momentjs which add hundreds of minified KB to your bundle.`,
    };
  },
};
</script>

<style>
.meter {
  background: lightcyan;
  height: 50%;
  width: 100%;
  border-radius: 5px;
}
</style>
