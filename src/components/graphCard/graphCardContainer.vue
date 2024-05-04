<template>
  <div class="graph-card cursor-pointer non-selectable">
    <q-item class="q-gutter-sm">
      <div @click="goToUser" class="user">brandy</div>
      <div>/</div>
      <div class="text-weight-medium">Map of Computer Science</div>
    </q-item>
    <div @click="$emit('clickCard')">
      <q-item>
        <q-item-label lines="4" class="text-justify">
          <slot name="description"></slot>
        </q-item-label>
      </q-item>
      <q-item dense>
        <q-item-section avatar>
          <q-icon name="circle" color="green-2"></q-icon>
        </q-item-section>
        <q-item-section>
          <slot name="node"></slot>
        </q-item-section>
      </q-item>
      <q-item dense>
        <q-item-section avatar>
          <q-icon name="square" color="blue-2"></q-icon>
        </q-item-section>
        <q-item-section>
          <slot name="composite"></slot>
        </q-item-section>
      </q-item>
      <q-item dense>
        <q-item-section avatar>
          <q-icon name="account_tree" color="red-2"></q-icon>
        </q-item-section>
        <q-item-section>
          <slot name="subgraph"></slot>
        </q-item-section>
      </q-item>
      <slot name="extra"></slot>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['clickCard'],
  methods: {
    goToUser() {
      console.log('lasd');
    },
  },
};
</script>

<style>
.graph-card {
  border-radius: 5px;
  box-shadow: rgba(149, 157, 165, 0.1) 0px 4px 10px;
}

.graph-card:hover {
  box-shadow: rgba(149, 157, 165, 0.5) 0px 4px 10px;
}

.user {
  position: relative;
}

.user::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  border-radius: 4px;
  background-color: #18272f;
  bottom: 0;
  left: 0;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
}

.user:hover::before {
  transform-origin: left;
  transform: scaleX(1);
}
</style>
