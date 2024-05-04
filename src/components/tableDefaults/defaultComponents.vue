<template>
  <q-item>
    <q-item-section>
      <q-item-label caption>Default fields</q-item-label>
    </q-item-section>
    <q-item-section side>
      <q-btn icon="add" size="8px"></q-btn>
    </q-item-section>
  </q-item>
  <q-item v-for="component in myArray" :key="component.id">
    <q-item-section>
      <q-select
        dense
        filled
        :options="options"
        v-model="componentName"
      ></q-select>
    </q-item-section>
    <q-item-section side>
      <div class="q-gutter-sm">
        <q-btn icon="keyboard_arrow_up" round size="8px"></q-btn>
        <q-btn icon="keyboard_arrow_down" round size="8px"></q-btn>
        <q-btn icon="close" round size="8px"></q-btn>
      </div>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  data() {
    return {
      componentName: 1,
      drag: false,
      options: [1, 2, 3],
      myArray: [
        {
          name: 'John',
          id: 0,
        },
        {
          name: 'Joao',
          id: 1,
        },
        {
          name: 'Jean',
          id: 2,
        },
      ],
    };
  },
};
</script>

<style>
.sortable-ghost {
  opacity: 100%;
}

.component {
  border-radius: 5px;
  position: relative;
  border: 1px solid lightgrey;
  background: white;
}

.close-button {
  position: absolute;
  right: 0;
  top: 0;
}
</style>
