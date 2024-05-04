<template>
  <q-fab text-color="black" icon="legend_toggle" direction="up" padding="sm">
    <template #tooltip>
      <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]">
        Legend
      </q-tooltip></template
    >
    <q-fab-action color="green" text-color="black" label="Selected node" />
    <q-fab-action color="amber" text-color="black" label="Done" />
  </q-fab>
  <!-- <div v-morph:labels:legendGroup:300="morphGroup">
    <q-btn icon="close" @click="nextMorph" unelevated></q-btn>
    <q-chip clickable square>
      <q-avatar color="red" text-color="white">5</q-avatar>Learning
    </q-chip>
    <q-chip clickable square>
      <q-avatar color="blue" text-color="white">10</q-avatar>Learning
    </q-chip>
    <q-chip clickable square>
      <q-avatar color="yellow" text-color="white">12</q-avatar>Learning
    </q-chip>
  </div>

  <q-btn
    square
    @click="nextMorph"
    v-morph:legend:legendGroup:0="morphGroup"
    rounded
  >
    Legend
  </q-btn> -->
</template>

<script>
export default {
  setup() {
    return {
      forms: ['legend', 'labels'],
    };
  },
  data() {
    return {
      morphGroup: 'legend',
    };
  },
  methods: {
    nextMorph() {
      console.log(this.morphGroup);
      const idx = this.forms.indexOf(this.morphGroup) + 1;
      this.morphGroup = this.forms[idx % this.forms.length];
    },
  },
};
</script>

<style></style>
