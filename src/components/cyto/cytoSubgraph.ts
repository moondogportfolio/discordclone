import { CounterStore } from 'stores/example-store';
import { LocalStorage, SessionStorage } from 'quasar';
import { cyto, fcose_render } from './cytoNodes';
import { v4 as uuidv4 } from 'uuid';
import { nodes, nodes2 } from './nodeData';

export function createSubgraph() {
  const node = CounterStore.selectedNodeObject;
  const subgraphName = uuidv4();
  node?.data('subgraph', subgraphName);
  viewSubgraph();
}

export function viewSupergraph() {
  cyto.remove(cyto.elements());
  cyto.add(nodes);
  fcose_render(false);
}

export function viewSubgraph() {
  cyto.remove(cyto.elements());
  cyto.add(nodes2);
  fcose_render(false);
}
