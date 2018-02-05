'use strict';

class DfsShortestPath {

    constructor(graph) {
        this.graph = graph;
    }

    /**
     * @private
     * calculates a path weight
     * @param {(string|number|boolean|null|undefined)} v1
     * @param {(string|number|boolean|null|undefined)} v2
     * @preturns {array}
     */
    getPathWeight(path) {
        let weight = 0;
        for (let i = 0; i < path.length - 1; i++) {
            weight += this.graph.getWeight(path[i], path[i + 1]);
        }
        return weight;
    }

    /**
     * @private
     * @param {array} path
     */
    addPathToShortestPaths(path) {
        if (this.shortestPaths.length > 0) {
            let pathWeight = this.getPathWeight(path);
            let shortestPathWeight = this.getPathWeight(this.shortestPaths[0]);
            if (pathWeight < shortestPathWeight) {
                this.shortestPaths = [ path ];
            }
            else if (pathWeight === shortestPathWeight) {
                this.shortestPaths.push(path);
            }
        }
        else {
            this.shortestPaths.push(path);
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
    dsfFind(v1, v2, path = [], depth = 0, visited = {}) {
        if (this.graph.hasVertex(v1) && !visited[v1]) {
            path.push(v1);
            visited[v1] = true;
            depth++;
            if (v1 === v2) {
                this.addPathToShortestPaths(path);
            }
            else if (this.graph.getEdges(v1) && v1 !== v2) {
                for (let vertex in this.graph.getEdges(v1)) {
                    if (this.graph.hasEdge(v1, vertex)) {
                        this.dsfFind(vertex, v2, path, depth, visited);
                        for (let i = depth; i < path.length; i++) {
                            visited[path[i]] = false;
                        }
                        path = path.slice(0, depth);
                    }
                }
            }
        }
    }

    /**
     * @public
     * finds all the shortest paths between two vertices using depth-first approach
     * @param {(string|number|boolean|null|undefined)} v1
     * @param {(string|number|boolean|null|undefined)} v2
     * @preturns {array} - array of paths
     */
    find(v1, v2) {
        this.shortestPaths = [];
        this.dsfFind(v1, v2);
        return this.shortestPaths;
    }

}

module.exports = DfsShortestPath;