<template>
  <graph-card>
    <template #node>
      <div class="meter" />
    </template>
    <template #composite>
      <div :style="barStyle" class="barStyle"></div>
    </template>
    <template #subgraph>
      <div class="meter" />
    </template>
  </graph-card>
</template>

<script>
import graphCard from './graphCardContainer.vue';

export default {
  components: { graphCard },
  computed: {
    barStyle() {
      return `background: linear-gradient(to right,
        rgb(102, 204, 255) 20%,
        rgb(28, 31, 59) 20% 40%,
        rgb(102, 204, 255) 40%);
        `;
    },
  },
  data() {
    return {
      a: 5,
      b: 10,
      c: 16,
    };
  },
};
</script>

<style>
.barStyle {
  width: 100%;
  height: 50%;
  border-radius: 5px;
}

.meter {
  background: lightcyan;
  height: 50%;
  width: 100%;
  border-radius: 5px;
}
</style>
