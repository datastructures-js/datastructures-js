/**
 * datastructures-js/graph/Graph
 * @class
 * @copyright 2018 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

const Queue           = require('../queue/queue');
const DfsShortestPath = require('./algorithms/dfsShortestPath');

class Graph {

  /**
   * @constructor
   */
  constructor() {
    this._init();
  }

  /**
   * @public
   * gets all edges connected to a vertex
   * @returns {object}
   */   
  getEdges(vertex) {
    return this.hasVertex(vertex) ? this.edges[vertex] : null;
  }

  /**
   * @public
   * gets the weight of the edge between two vertices
   * @returns {number|null}
   */
  getWeight(v1, v2) {
    if (this.hasVertex(v1) && v1 === v2) {
      return 0;
    }
    else if (this.hasEdge(v1, v2)) {
      return this.edges[v1][v2];
    }
    else {
      return null;
    }
  }

  /**
   * @public
   * gets the count of the vertices in the graph
   * @returns {number}
   */   
  countVertices() {
    return this.verticesCount;
  }

  /**
   * @public
   * add a vertex to the graph
   * @param {(string|number|booolean|null|undefined)} vertex
   */
  addVertex(vertex) {
    if (!this.vertices[vertex]) {
      this.vertices[vertex] = true;
      this.edges[vertex] = {};
      this.verticesCount++;
    }
  }

  /**
   * @public
   * removes a vertex from the graph
   * @param {(string|number|booolean|null|undefined)} vertex
   */
  removeVertex(vertex) {
    if (this.vertices[vertex] === true) {
      this.vertices[vertex] = false;
      this.verticesCount--;
    }
  }

  /**
   * @public
   * checks if the graph has a vertex
   * @param {(string|number|booolean|null|undefined)} vertex
   * @returns {boolean}
   */
  hasVertex(vertex) {
    return !!this.vertices[vertex];
  }

  /**
   * @public
   * adds an edge between two existing vertices
   * @param {(string|number|booolean|null|undefined)} v1
   * @param {(string|number|booolean|null|undefined)} v2
   * @param {number} [weight=0] the numeric weight of the edge
   */
  addEdge(v1, v2, weight = 0) {
    if (this.hasVertex(v1) && this.hasVertex(v2)) {
      let w = Number(weight) || 0;
      this.edges[v1][v2] = w;
      this.edges[v2][v1] = w;
    }
  }

  /**
   * @public
   * checks if the graph has an edge between two existing vertices
   * @param {(string|number|booolean|null|undefined)} v1
   * @param {(string|number|booolean|null|undefined)} v2
   * @returns {boolean}
   */
  hasEdge(v1, v2) {
    return this.hasVertex(v1) && this.hasVertex(v2)&& 
      this.edges[v1][v2] >= 0 && this.edges[v2][v1] >= 0;
  }

  /**
   * @public
   * adds an edge between two vertices, and create the vertices if not exist
   * @param {(string|number|booolean|null|undefined)} v1
   * @param {(string|number|booolean|null|undefined)} v2
   * @param {number} [weight=0]
   */
  addPath(v1, v2, weight) {
    this.addVertex(v1);
    this.addVertex(v2);
    this.addEdge(v1, v2, weight);
  }

  /**
   * @public
   * removes an existing edge between two vertices
   * @param {(string|number|booolean|null|undefined)} v1
   * @param {(string|number|booolean|null|undefined)} v2
   */
  removeEdge(v1, v2) {
    if (this.hasEdge(v1, v2)) {
      this.edges[v1][v2] = -1;
      this.edges[v2][v1] = -1;
    }
  }

  /**
   * @public
   * finds all the shortest paths between two vertices in the graph
   * @param {(string|number|booolean|null|undefined)} v1 - the source vertex
   * @param {(string|number|booolean|null|undefined)} v2 - the destination vertex
   * @returns {array}
   */
  findShortestPath(v1, v2) {
    return this.dfsShortestPath.find(v1, v2);
  }

  /**
   * @public
   * clears the graph
   */   
  clear() {
    this._init();
  }

  /**
   * @public
   * traverse the graph using using a traversal algorithm
   * @param {(string|number|booolean|null|undefined)} vertex - starting vertex for the traversal
   * @param {function} cb - called with each vertex value
   * @param {string} [type='bfs'] - the traversal type, default is breadth-first
   */
  traverse(vertex, cb, type = 'bfs') {
    switch (type) {
      case 'dfs':
        this._dfsTraverse(vertex, cb);
        break;
      case 'bfs':
        this._bfsTraverse(vertex, cb);
        break;
    }
  }

  /**
   * @private
   * @param {(string|number|booolean|null|undefined)} vertex
   * @param {function} cb
   * @param {object} visited
   */
  _dfsTraverseEdges(vertex, cb, visited) {
    let edges = this.getEdges(vertex);
    for (let v in edges) {
      if (this.hasEdge(vertex, v) && !visited[v]) {
        this._dfsTraverse(v, cb, visited);
      }
    }
  }

  /**
   * @private
   * traverse the graph using the depth-first approach from a starting vertex
   * @param {(string|number|booolean|null|undefined)} vertex - starting vertex for the traversal
   * @param {function} cb - called with each vertex value
   * @param {object} visited - memoizes the visited vertices in the recursion
   */
  _dfsTraverse(vertex, cb, visited = {}) {
    if (this.hasVertex(vertex) && !visited[vertex]) {
      cb(vertex);
      visited[vertex] = true;
      this._dfsTraverseEdges(vertex, cb, visited);
    }
  }

  /**
   * @private
   * @param {(string|number|booolean|null|undefined)} vertex
   * @param {function} cb
   * @param {object} visited - memoizes the visited vertices in the recursion
   * @param {Queue} queue
   */
  _bfsTraverseEdges(vertex, cb, visited, queue) {
    let edges = this.getEdges(vertex);
    for (let v in edges) {
      if (this.hasEdge(vertex, v) && !visited[v]) {
        queue.enqueue(v);
        visited[v] = true;
      }
    }
  }

  /**
   * @private
   * traverse the graph using the breadth-first approach from a starting vertex
   * @param {(string|number|booolean|null|undefined)} vertex - starting vertex for the traversal
   * @param {function} cb - called with each vertex value
   */
  _bfsTraverse(vertex, cb) {
    if (this.hasVertex(vertex)) {
      let queue = new Queue();
      let visited = {};
      queue.enqueue(vertex);
      visited[vertex] = true;
      while (!queue.isEmpty()) {
        let vrtx = queue.dequeue();
        cb(vrtx);
        this._bfsTraverseEdges(vrtx, cb, visited, queue);
      }
    }
  }

  /**
   * @private
   * initialize the graph properties
   */
  _init() {
    this.vertices = {};
    this.edges = {};
    this.verticesCount = 0;
    this.dfsShortestPath = new DfsShortestPath(this);             
  }
}

module.exports = Graph;