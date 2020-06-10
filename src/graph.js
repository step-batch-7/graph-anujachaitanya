const parsePairs = function(pairs) {
  const graph = pairs.reduce((graph, element) => {
    if (!graph[element[0]]) {
      graph[element[0]] = [];
    }
    graph[element[0]].push(element[1]);
    return graph;
  }, {});
  return graph;
};

const bfs = function(pairs, source, target) {
  const graph = parsePairs(pairs);
  const queue = [source];
  const visited = [];

  while (queue.length > 0) {
    const currentNode = queue.shift();
    if (graph[currentNode] && graph[currentNode].includes(target)) {
      return true;
    }
    graph[currentNode].forEach((element) => {
      if (!queue.includes(element) && !visited.includes(element)) {
        queue.push(element);
      }
    });
  }
  return false;
};

module.exports = { bfs, parsePairs };
