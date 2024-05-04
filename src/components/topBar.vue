<template>
  <q-toolbar class="bg-grey-10 text-white">
    <q-btn flat round dense icon="menu" />
    <q-btn flat round icon="home" to="/profile" />
    <q-btn flat round icon="star" to="/starred" />
    <q-btn flat round icon="explore" to="/explore" />
    <q-separator vertical color="white"></q-separator>
    <!-- <q-icon name="api" size="lg" class="q-ml-md"></q-icon>
    <div class="text-h6">Graph</div>
    <div>api</div> -->

    <q-space></q-space>
    <q-input
      dark
      standout=""
      dense
      v-model="text"
      class="q-ml-md"
      placeholder="Search for topic"
    >
      <template v-slot:append>
        <q-icon v-if="text === ''" name="search" />
        <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
      </template>
    </q-input>
  </q-toolbar>
</template>

<script>
export default {
  name: 'topBar',
  data() {
    return {
      text: '',
    };
  },
};
</script>

<style></style>
