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

const bfs = function(pairs, source, target) {};

module.exports = { bfs, parsePairs };
