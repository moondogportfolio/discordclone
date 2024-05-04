<template>
  <q-btn-group>
    <q-btn-dropdown
      class="bg-grey-3"
      push
      icon="visibility"
      label="Watch"
      auto-close
      split
      :menu-offset="[0, 10]"
    >
      <q-list>
        <q-item clickable>
          <q-item-section>
            <q-item-label>Photos</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </q-btn-group>
</template>

<script>
export default {};
</script>

<style></style>
