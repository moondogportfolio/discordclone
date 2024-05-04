<template>
  <overview-container :textCenter="`Starred Graphs`">
    <template #sortingToolbar>
      <sorting-toolbar></sorting-toolbar>
    </template>
    <template v-slot:cardList>
      <graph-card v-for="x in 9" :key="x" @clickCard="goToGraph" />
    </template>
  </overview-container>
</template>

<script>
import graphCard from 'src/components/graphCard/graphCardExplore.vue';
import SortingToolbar from 'src/components/overview/sortingToolbar.vue';
import overviewContainer from 'src/components/overview/overviewContainer.vue';
export default {
  components: { graphCard, overviewContainer, SortingToolbar },
  methods: {
    goToGraph() {
      this.$router.push('/template');
    },
  },
};
</script>

<style></style>
