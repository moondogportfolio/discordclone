export const nodes = [
  { group: 'nodes', data: { id: 'n0', label: 'n0', done: 'yes' } },
  { group: 'nodes', data: { id: 'n1', label: 'n1', subgraph: 'nodes2' } },
  { group: 'nodes', data: { id: 'n2', label: 'n2' } },
  { group: 'nodes', data: { id: 'n3', parent: 'n2', label: 'n3' } },
  { group: 'nodes', data: { id: 'n4', parent: 'n2', label: 'n4' } },
  { group: 'nodes', data: { id: 'n5', parent: 'n2', label: 'n5' } },
  { group: 'edges', data: { id: 'e0', source: 'n0', target: 'n1' } },
  { group: 'edges', data: { id: 'e2', source: 'n3', target: 'n4' } },
  { group: 'edges', data: { id: 'e3', source: 'n4', target: 'n5' } },
  { group: 'edges', data: { id: 'e4', source: 'n5', target: 'n3' } },
  { group: 'edges', data: { id: 'e5', source: 'n1', target: 'n5' } },
];

export const nodes2 = [
  { group: 'nodes', data: { id: 'n0', label: 'n0', done: 'yes' } },
  { group: 'nodes', data: { id: 'n1', label: 'n1' } },
  { group: 'nodes', data: { id: 'n2', label: 'n2' } },
  { group: 'edges', data: { id: 'e0', source: 'n0', target: 'n1' } },
  { group: 'edges', data: { id: 'e1', source: 'n1', target: 'n2' } },
  { group: 'edges', data: { id: 'e2', source: 'n2', target: 'n1' } },
];
