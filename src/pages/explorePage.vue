<template>
  <overview-container :textCenter="`Explore Graphs`">
    <template #sortingToolbar>
      <q-select
        :options="categories"
        standout
        v-model="categoryChoice"
        dense
        class="col-2"
      ></q-select>
      <q-input
        v-model="searchString"
        standout
        dense
        class="q-pa-md col-grow"
      ></q-input>
    </template>
    <template v-slot:cardList>
      <graph-card v-for="x in 9" :key="x" @click="goToGraph" />
    </template>
  </overview-container>
</template>

<script>
import graphCard from 'src/components/graphCard/graphCardExplore.vue';
import overviewContainer from 'src/components/overview/overviewContainer.vue';
export default {
  components: { graphCard, overviewContainer },
  data() {
    return {
      categories: ['Science', 'Math'],
      categoryChoice: 'Math',
      searchString: '',
    };
  },
  methods: {
    goToGraph() {
      this.$router.push('/template');
    },
  },
};
</script>

<style></style>
