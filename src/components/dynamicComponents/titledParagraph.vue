<template>
  <div class="text-h6">{{ title }}</div>
  <q-input
    v-model="newContent"
    @blur="edit = false"
    filled
    autogrow
    v-if="edit"
  />
  <div @dblclick="edit = true" v-else>{{ newContent }}</div>
</template>

<script>
export default {
  props: ['title', 'content'],
  data() {
    return {
      edit: false,
      newContent: this.content,
    };
  },
};
</script>

<style></style>
