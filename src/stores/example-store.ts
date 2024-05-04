import { Core, NodeSingular } from 'cytoscape';
import { defineStore } from 'pinia';

interface NodeStore {
  counter: number;
  selectedNodeObject?: NodeSingular;
}

const useCounterStore = defineStore('counter', {
  state: () =>
    ({
      counter: 99,
      selectedNodeObject: undefined,
    } as NodeStore),
  getters: {
    doubleCount: (state) => state.counter * 2,
    selectedNodeId: (state) => state.selectedNodeObject?.id(),
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});

export const CounterStore = useCounterStore();
