'use strict';

const Queue           = require('../queue/queue'),
      DfsShortestPath = require('./algorithms/dfsShortestPath');

class Graph {

    constructor() {
        this.init();
    }

    /**
     * @private
     * initialize the graph properties
     */
    init() {
        this.vertices = {};
        this.edges = {};
        this.verticesCount = 0;
        this.dfsShortestPath = new DfsShortestPath(this);             
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
        return this.vertices[vertex] || false;
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
     * adds an edge between two vertices, and create them if they dont exist
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
     * retrieves all the edges connected to a vertex
     * @returns {object}
     */   
    getEdges(vertex) {
        return this.hasVertex(vertex) ? this.edges[vertex] : null;
    }

    /**
     * @public
     * get the weight of the edge between two vertices
     * @returns {number}
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
     * the count of the vertices in the graph
     * @returns {number}
     */   
    countVertices() {
        return this.verticesCount;
    }

    /**
     * @public
     * clears the graph
     */   
    clear() {
        this.init();
    }

    /**
     * @public
     * traverse the graph using the depth-first approach from a starting vertex
     * @param {function} vertex - starting vertex for the traversal
     * @param {function} cb - called with each vertex value
     * @param {object} visited - memoizes the visited vertices in the recursion
     */
    dfsTraverse(vertex, cb, visited = {}) {
        if (this.hasVertex(vertex) && !visited[vertex]) {
            cb(vertex);
            visited[vertex] = true;
            let edges = this.getEdges(vertex);
            for (let v in edges) {
                if (this.hasEdge(vertex, v) && !visited[v]) {
                    this.dfsTraverse(v, cb, visited);
                }
            }
        }
    }

    /**
     * @public
     * traverse the graph using the breadth-first approach from a starting vertex
     * @param {(string|number|booolean|null|undefined)} vertex - starting vertex for the traversal
     * @param {function} cb - called with each vertex value
     */
    bfsTraverse(vertex, cb) {
        if (this.hasVertex(vertex)) {
            let queue = new Queue();
            let visited = {};
            queue.enqueue(vertex);
            visited[vertex] = true;

            while (!queue.isEmpty()) {
                let vrtx = queue.dequeue();
                let edges = this.getEdges(vrtx);
                cb(vrtx);
                for (let v in edges) {
                    if (this.hasEdge(vrtx, v) && !visited[v]) {
                        queue.enqueue(v);
                        visited[v] = true;
                    }
                }
            }
        }
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
                this.dfsTraverse(vertex, cb);
                break;
            case 'bfs':
                this.bfsTraverse(vertex, cb);
                break;
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
}

module.exports = Graph;