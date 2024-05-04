<template>
  <div class="q-gutter-sm">
    <watch-button />
    <subscribe-button />
    <save-button></save-button>
  </div>
</template>

<script>
import SaveButton from './saveTemplateButton.vue';
import SubscribeButton from './subscribeButton.vue';
import WatchButton from './watchButton.vue';
export default {
  components: { SaveButton, SubscribeButton, WatchButton },
};
</script>

<style></style>
