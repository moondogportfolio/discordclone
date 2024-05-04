<template>
  <overview-container :textCenter="`New Graph`">
    <template #content>
      <q-list>
        <q-item>
          <q-item-section>
            <q-select dense outlined hint="Owner*" />
          </q-item-section>
          <q-item-section>
            <q-input outlined dense hint="Graph name*">
              <template #before> / </template>
            </q-input>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <q-input dense outlined hint="Description (optional)" />
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section side>
            <q-radio />
          </q-item-section>
          <q-item-section side>
            <q-icon name="book" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Public</q-item-label>
            <q-item-label
              >Anyone on the internet can see this repository. You choose who
              can commit.</q-item-label
            >
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section side>
            <q-radio />
          </q-item-section>
          <q-item-section side>
            <q-icon name="book" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Private</q-item-label>
            <q-item-label
              >You choose who can see and commit to this
              repository.</q-item-label
            >
          </q-item-section>
        </q-item>
        <q-item>
          <q-btn label="Create" />
        </q-item>
      </q-list>
    </template>
  </overview-container>
</template>

<script>
import overviewContainer from 'src/components/overview/overviewContainer.vue';
export default {
  components: { overviewContainer },
};
</script>

<style></style>
