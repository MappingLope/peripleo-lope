export const pointStyle = args => ({
  'type': 'circle',
  'paint': {
    'circle-radius': [
      'interpolate', 
      ['linear'],
      ['number', ['get','colocated_records'], ['get', 'colocated_relations'] ],
      0, 4,
      10, 6,
      20, 8,
      50, 12,
      100, 16,
      200, 22,
      300, 26
    ],
    'circle-color': args?.fill || '#fff',
    'circle-stroke-color': args?.stroke || '#000',
    'circle-stroke-width': args?.strokeWidth || 1
  }
});

export const pointCategoryStyle = args => ({
  'type': 'circle',
  'paint': {
    'circle-radius': [
      'interpolate', 
      ['linear'],
      ['number', ['get','colocated_records'], ['get', 'colocated_relations'] ],
      0, 4,
      10, 6,
      20, 8,
      50, 12,
      100, 16,
      200, 22,
      300, 26
    ],
    'circle-color': [ 'get', 'color' ],
    'circle-stroke-color': args?.stroke || '#000',
    'circle-stroke-width': args?.strokeWidth || 1
  }
});
