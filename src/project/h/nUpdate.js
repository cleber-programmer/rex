Rex('h.nUpdate', [

  'cond',
  'extend',
  'get',
  'or',
  'set',
  'h.isNode',
  'h.isText'

], function (cond, extend, get, or, set, isNode, isText) {
  
  function solve(node, properties) {
    return extend(get(node, 'style'), or(get(properties, 'style'), {})), extend(get(node, 'dataset'), or(get(properties, 'dataset'), {})), extend(node, properties);
  }
  
  function updateNode(node, vDOM) {
    return solve(node, get(vDOM, 'properties'));
  }
  
  function updateText(node, vDOM) {
    return set(node, 'textContent', get(vDOM, 'textContent')), node;
  }
  
  return cond([
    [isNode, updateNode],
    [isText, updateText]
  ]);
  
});