<template>
  <div class="window-height main-view column">
    <top-bar class="col-shrink"></top-bar>
    <div class="col column">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import topBar from './components/topBar.vue';

export default defineComponent({
  components: { topBar },
  name: 'App',
});
</script>

<style scoped>
.main-view {
  overflow: hidden;
}
</style>
