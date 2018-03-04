/**
 * datastructures-js/graph/algorithms/DfsShortestPath
 * @class
 * @copyright 2018 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

class DfsShortestPath {

  /**
   * @constructor
   * @param {Graph}
   */
  constructor(graph) {
    this._graph = graph;
  }

  /**
   * @public
   * finds all shortest paths between two vertices using depth-first approach
   * @param {(string|number|boolean|null|undefined)} v1
   * @param {(string|number|boolean|null|undefined)} v2
   * @preturns {array} - array of paths
   */
  find(v1, v2) {
    this._shortestPaths = [];
    this._dfsFind(v1, v2);
    return this._shortestPaths;
  }

  /**
   * @private
   * calculates a path weight
   * @param {(string|number|boolean|null|undefined)} v1
   * @param {(string|number|boolean|null|undefined)} v2
   * @returns {number}
   */
  _getPathWeight(path) {
    let weight = 0;
    for (let i = 0; i < path.length - 1; i++) {
      weight += this._graph.getWeight(path[i], path[i + 1]);
    }
    return weight;
  }

  /**
   * @private
   * @param {array} path
   */
  _addPathToShortestPaths(path) {
    if (this._shortestPaths.length > 0) {
      let pathWeight = this._getPathWeight(path);
      let shortestPathWeight = this._getPathWeight(this._shortestPaths[0]);
      if (pathWeight < shortestPathWeight) {
        this._shortestPaths = [ path ];
      }
      else if (pathWeight === shortestPathWeight) {
        this._shortestPaths.push(path);
      }
    }
    else {
      this._shortestPaths.push(path);
    }
  }

  /**
   * @private
   * search in-depth v1 vertices for v2
   */
  _dfsFindRecursive(v1, v2, path, depth, visited) {
    for (let vertex in this._graph.getEdges(v1)) {
      if (this._graph.hasEdge(v1, vertex)) {
        this._dfsFind(vertex, v2, path, depth, visited);
        for (let i = depth; i < path.length; i++) {
          // reset previously visited vertices
          // to search into a different depth
          visited[path[i]] = false; 
        }
        path = path.slice(0, depth);
      }
    }
  }

  /**
   * @private
   * @param {(string|number|boolean|null|undefined)} v1
   * @param {(string|number|boolean|null|undefined)} v2
   * @param {array} [path=[]] - memoize path
   * @param {number} [depth=0] - memoize depth
   * @param {object} [visited={}] - memoize visited vertices
   */
  _dfsFind(v1, v2, path = [], depth = 0, visited = {}) {
    if (this._graph.hasVertex(v1) && !visited[v1]) {
      path.push(v1);
      visited[v1] = true;
      depth++;
      if (v1 === v2) {
        this._addPathToShortestPaths(path);
      }
      else if (this._graph.getEdges(v1) && v1 !== v2) {
        this._dfsFindRecursive(v1, v2, path, depth, visited);
      }
    }
  }

}

module.exports = DfsShortestPath;