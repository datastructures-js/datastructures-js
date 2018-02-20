/*!
 * datastructures-js
 * DirectedGraph
 * Copyright(c) 2018 Eyas Ranjous <eyas.ranjous@gmail.com>
 * MIT Licensed
 */

const Graph = require('./graph');

class DirectedGraph extends Graph {

  constructor() {
    super();
  }

  /**
   * @public
   * add a direction from v1 to v2
   * @param {(string|number|boolean|null|undefined)} v1
   * @param {(string|number|boolean|null|undefined)} v2
   * @param {number} [weight=0]
   */
  addEdge(v1, v2, weight = 0) {
    if (this.hasVertex(v1) && this.hasVertex(v2)) {
      let w = Number(weight) || 0;
      this.edges[v1][v2] = Number(w);
    }
  }

  /**
   * @public
   * checks if the graph has a direction from v1 to v2
   * @param {(string|number|boolean|null|undefined)} v1
   * @param {(string|number|boolean|null|undefined)} v2
   * @returns {boolean}
   */  
  hasEdge(v1, v2) {
    return this.hasVertex(v1) && this.hasVertex(v2) && this.edges[v1][v2] >= 0;
  }

  /**
   * @public
   * removes an existing direction from v1 to v2
   * @param {(string|number|boolean|null|undefined)} v1
   * @param {(string|number|boolean|null|undefined)} v2
   */
  removeEdge(v1, v2) {
    if (this.hasEdge(v1, v2)) {
      this.edges[v1][v2] = -1;
    }
  }

}

module.exports = DirectedGraph;