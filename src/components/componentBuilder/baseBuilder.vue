<template>
  <div class="q-gutter-y-md column">
    <div v-morph:form:builderGroup:300="morphGroup" class="builder">
      <q-select
        standout
        v-model="componentName"
        :options="options"
        v-if="isAdding"
      ></q-select>
      <q-btn label="Add component" color="blue" dense v-else></q-btn>
      <template v-if="componentName">
        <component :is="components[componentName]">
          <template v-slot="slotProps">
            <save-button-vue :data="slotProps"></save-button-vue>
            <q-btn label="Cancel" unelevated @click="nextMorph"></q-btn>
          </template>
        </component>
      </template>
    </div>
    <div @click="nextMorph" v-morph:button:builderGroup:300.resize="morphGroup">
      <q-btn icon="add" unelevated> </q-btn>
    </div>
  </div>
</template>

<script>
import { components, componentNames } from './components';
import saveButtonVue from './saveButton.vue';

export default {
  components: { saveButtonVue },
  setup() {
    return {
      options: componentNames,
      components: components,
      forms: ['button', 'form'],
    };
  },
  methods: {
    save() {
      console.log(';aw');
    },
    nextMorph() {
      const idx = this.forms.indexOf(this.morphGroup) + 1;
      this.morphGroup = this.forms[idx % this.forms.length];
    },
  },
  data() {
    return {
      morphGroup: 'button',
      isAdding: true,
      componentName: null,
    };
  },
};
</script>

<style>
.builder {
  padding: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  animation-name: blinking;
  animation-duration: 3s;
  animation-iteration-count: infinite;
}

@keyframes blinking {
  50% {
    box-shadow: rgba(149, 157, 165, 0.2) 10px 8px 24px;
  }
}
</style>
