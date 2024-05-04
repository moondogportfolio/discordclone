<template>
  <div class="row justify-center">
    <q-icon name="explore" :size="`${this.value * 30}px`"></q-icon>
  </div>
  <div class="q-my-sm">
    <q-select v-model="nodes" filled :options="options"> </q-select>
  </div>
  <q-list dense>
    <q-item>
      <q-item-section>
        <q-item-label caption>Node style</q-item-label>
      </q-item-section>
    </q-item>
    <q-item>
      <q-item-section>
        <q-item-label>Icon</q-item-label>
      </q-item-section>
      <q-item-section side>
        <q-menu max-width="120px">
          <div class="q-gutter-md q-pa-sm">
            <q-icon
              class="cursor-pointer"
              v-close-popup
              size="sm"
              v-for="n in 11"
              :key="n"
              name="bolt"
            ></q-icon>
          </div>
        </q-menu>
        <q-icon name="bolt" round></q-icon>
      </q-item-section>
    </q-item>
    <q-item>
      <q-item-section>
        <q-item-label>Size</q-item-label>
      </q-item-section>
      <q-item-section>
        <q-slider
          v-model="value"
          label
          :min="1"
          :max="3"
          :step="0.1"
        ></q-slider>
      </q-item-section>
    </q-item>
    <q-item></q-item>

    <default-components></default-components>
  </q-list>
</template>

<script>
import defaultComponents from './defaultComponents.vue';
export default {
  components: { defaultComponents },
  data() {
    return {
      options: ['a', 'b'],
      table: 'data',
      label: 'foo',
      value: 1,
      nodes: null,
    };
  },
};
</script>

<style></style>
