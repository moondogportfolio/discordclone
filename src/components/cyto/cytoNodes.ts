import cytoscape, { EventHandler, EventObject } from 'cytoscape';
import fcose from 'cytoscape-fcose';
import { Core, CytoscapeOptions } from 'cytoscape';
import { defaultOptions } from './layout';
import { CounterStore } from 'stores/example-store';
import { v4 as uuidv4 } from 'uuid';
export let cyto: Core = null;

function* pairwise(iterable: Iterable<any>) {
  const iterator = iterable[Symbol.iterator]();
  let current = iterator.next();
  let next = iterator.next();
  while (!next.done) {
    yield [current.value, next.value];
    current = next;
    next = iterator.next();
  }
}

function tapped_node(evt: EventObject) {
  if (evt.target.isParent()) {
    evt.cy.fit(evt.target);
  }
  CounterStore.selectedNodeObject = evt.target;
}

function boxSelect(evt: EventObject) {
  console.log(evt.target.id());
}

export function createNode(parentNode?: string) {
  //creates a new node
  const nodeId = uuidv4();
  const newNode = cyto.add({
    group: 'nodes',
    data: { id: nodeId, label: 'new', parent: parentNode },
  });
  return {
    nodeId: nodeId,
    newNode: newNode,
  };
}

export function createLinkedNode(sourceNode: string, parentNode?: string) {
  //creates new node linked to an existing node
  const { nodeId, newNode } = createNode(parentNode);
  const { edgeId, newEdge } = createEdge(sourceNode, nodeId);
  fcose_render();
  return {
    newNode: newNode,
    newEdge: newEdge,
  };
}

export function createCompositeNode() {
  //creates parent node (contains subnodes)
  const nodeId = uuidv4();
  const newNode = cyto.add({
    group: 'nodes',
    data: { id: nodeId, label: 'new-parent' },
  });
  return newNode;
}

export function createEdge(sourceNode: string, destinationNode: string) {
  const edgeId = uuidv4();
  const newEdge = cyto.add({
    group: 'edges',
    data: { id: edgeId, source: sourceNode, target: destinationNode },
  });
  return {
    edgeId: edgeId,
    newEdge: newEdge,
  };
}

export function linkNodes() {
  //for now creates link between first two
  //check direction
  const ele = cyto.elements('node:selected');
  if (ele.length < 2) return;
  createEdge(ele[0].id(), ele[1].id());
}

export function initCyto() {
  cytoscape.use(fcose);
  const cyto_object = cytoscape({
    container: document.getElementById('cy'),
    style: [
      {
        selector: 'edge',
        css: {
          'mid-target-arrow-shape': 'triangle',
          'target-arrow-shape': 'triangle',
        },
      },
      {
        selector: 'node',
        css: {
          label: 'data(label)',
          backgroundColor: (ele) => {
            return ele.isParent()
              ? 'white'
              : ele.selected()
              ? 'green'
              : ele.data('done')
              ? 'red'
              : 'blue';
          },
        },
      },
    ],
  });
  cyto_object.on('tap', 'node', tapped_node);
  cyto_object.on('boxselect', 'node', boxSelect);
  cyto_object.maxZoom(2);
  cyto_object.minZoom(0.5);
  cyto = cyto_object;
  return cyto_object;
}

export function fcose_render(animate = true) {
  defaultOptions['animate'] = animate;
  return cyto.elements().layout(defaultOptions).run();
}

console.log(uuidv4());
