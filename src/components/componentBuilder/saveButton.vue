<template>
  <q-spinner-bars v-if="loading" color="primary" size="1.5em" />
  <q-btn v-else label="Save" @click="save" unelevated></q-btn>
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    save() {
      this.loading = true;
      console.log(this.data);
    },
  },
};
</script>

<style></style>
