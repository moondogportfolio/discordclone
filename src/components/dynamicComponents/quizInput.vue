<template>
  <q-item class="q-pa-none" v-if="false">
    <q-item-section avatar>
      <q-icon name="quiz" color="grey-8"></q-icon>
    </q-item-section>
    <q-item-section>
      <q-input
        v-model="quizInput"
        standout=""
        hint="What is the sum of asdj in t"
      >
        <template v-slot:append>
          <q-btn v-if="quizInput !== ''" icon="send" dense />
        </template>
      </q-input>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  data() {
    return {
      quizInput: '',
    };
  },
};
</script>

<style></style>
