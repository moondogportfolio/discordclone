<template>
  <overview-container :textCenter="`My Graphs`">
    <template #sortingToolbar>
      <sorting-toolbar></sorting-toolbar>
    </template>
    <template #cardList>
      <graph-card v-for="x in 9" :key="x" @click="goToGraph" />
    </template>
  </overview-container>
</template>

<script>
import graphCard from 'src/components/graphCard/graphCardProfile.vue';
import SortingToolbar from 'src/components/overview/sortingToolbar.vue';
import overviewContainer from 'src/components/overview/overviewContainer.vue';
export default {
  components: { graphCard, overviewContainer, SortingToolbar },
  methods: {
    goToGraph() {
      this.$router.push('/graph');
    },
  },
};
</script>

<style></style>
