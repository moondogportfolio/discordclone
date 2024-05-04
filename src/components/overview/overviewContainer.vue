<template>
  <div class="column fit">
    <div class="text-weight-thin text-center text-h4 q-my-xl">
      {{ textCenter }}
    </div>
    <div
      class="row justify-center items-center q-gutter-sm window-width q-px-xl"
    >
      <slot name="sortingToolbar"></slot>
    </div>
    <q-scroll-area class="col-grow">
      <div class="card-list q-ma-lg">
        <slot name="cardList"></slot>
      </div>
      <div style="max-width: 768px; margin-right: auto; margin-left: auto">
        <slot name="content" />
      </div>
    </q-scroll-area>
    <div style="height: 40px"></div>
  </div>
</template>

<script>
export default {
  props: ['textCenter'],
};
</script>

<style>
.card-list {
  display: grid;
  /* grid-template-columns: repeat(auto-fill, minmax(500px, 1fr)); */
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
</style>
