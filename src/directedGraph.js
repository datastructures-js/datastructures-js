/**
 * DirectedGraph factory function
 *
 * returns an object with the main DiGraph operations
 *
 * @author Eyas Ranjous <eyas@eyasranjous.info>
 *
 */

function directedGraph() {

    'use strict';

    var vertices = [], // graph nodes
        directions = [], // two dimensions array [][]
        verticesCount = 0,

        removeElementFromArray = function(arr, v) {
            if (isNaN(parseInt(v))) {
                delete arr[v];
            }
            else {
                arr.splice(v, 1);
            }
        };

    // return an object with DiGraph operations
    return {

        addVertex: function(v) {
            if (vertices[v] === undefined) {
                vertices[v] = true;
                verticesCount++;
            }
        },

        removeVertex: function(v) {
            // remove the vertex from vertices
            if (vertices[v]) {
                removeElementFromArray(vertices, v);
                verticesCount--;
            }

            // remove the directions from vertex
            if (directions[v] !== undefined) {
                removeElementFromArray(directions, v);
            }

            // remove the directions to vertex
            for (var vertex in directions) {
                if (directions[vertex][v] && Object.keys(directions[vertex]).length === 1) {
                    removeElementFromArray(directions, vertex);
                }
                else {
                    removeElementFromArray(directions[vertex], v);
                }
            }
        },

        hasVertex: function(v) {
            return vertices[v] !== undefined ? true : false;
        },

        countVertices: function() {
            return verticesCount;
        },

        visit: function(func) {
            var visit = function(dirs, visited, func) {
                for (var vertex in dirs) {
                    if (!visited[vertex]) {
                        func.call(func, vertex);
                        visited[vertex] = true;
                        if (directions[vertex]) {
                            visit(directions[vertex], visited, func); // <- depth-first approach
                        }
                    }
                }
            };
            visit(directions, [], func);
        },

        getSeparatedVertices: function() {
            var separated = [],
                directionsVertices = [];
            this.visit(function(vertex){
                directionsVertices[vertex] = true;
            });

            for (var v in vertices) {
                if (!directionsVertices[v]) {
                    separated.push(v);
                }
            }

            return separated;
        },

        addDirection: function(v1, v2, weight) {
            if (vertices[v1] && vertices[v2]) {
                if (directions[v1] === undefined) {
                    directions[v1] = [];
                }

                if (isNaN(parseInt(weight))) {
                    throw {
                        message: 'weight is not a valid number' 
                    };
                }

                directions[v1][v2] = weight;
            }
        },

        hasDirection: function(v1, v2) {
            if (this.hasVertex(v1) && this.hasVertex(v2) && 
                directions[v1] && directions[v1][v2] !== undefined) {
                return true;
            }
            return false;
        },

        // return the weight of a direction if it exists
        getDirectionWeight: function(v1, v2) {
            return this.hasDirection(v1, v2) ? directions[v1][v2] : null;
        },

        removeDirection: function(v1, v2) {
            if (this.hasDirection(v1, v2)) {
                if (Object.keys(directions[v1]).length === 1) {
                    removeElementFromArray(directions, v1);
                }
                else {
                    removeElementFromArray(directions[v1], v2);
                }
            }
        },

        findShortestPath: function(v1, v2) {
            var shortestPaths = [],
                reccentPathWeight,
                existingPathWeight,

                calculateWeight = function(path) {
                    var sum = 0;
                    for (var i = 0; i <= path.length - 2; i++) {
                        sum += directions[path[i]][path[i + 1]];
                    }
                    return sum;
                },

                findShortestPath = function(v1, v2, path, visited) {

                    if (visited.indexOf(v1) === -1) {
                        // visit the starting vertex
                        visited.push(v1);

                        // push the starting vertex in the path
                        path.push(v1);

                        // if we arrived to the destination
                        if (v1 === v2) {

                            // if there's already a shortest path
                            if (shortestPaths.length > 0) {

                                // calculate path weight
                                reccentPathWeight = calculateWeight(path);

                                // calculate the existing shortest path weight
                                existingPathWeight = calculateWeight(shortestPaths[0]);

                                // reset the shortestPaths if recent path is better
                                if (reccentPathWeight < existingPathWeight) {
                                    shortestPaths = [];
                                }
                                
                                // if the recent path is better or similar then push it to shortestPaths
                                if (reccentPathWeight <= existingPathWeight) {
                                    shortestPaths.push(path);
                                }
                            }
                            else {
                                // no shortest path yet, then push the path
                                shortestPaths.push(path);
                            }
                        }

                        // we haven't arrived to the destination and we still have directions
                        else if (directions[v1] && (v1 !== v2)) {
                            for (var vertex in directions[v1]) {

                                // depth-first appraoch
                                findShortestPath(vertex, v2, path, visited);
   
                                // slice path and visited arrays to allow to push the other directions of v1
                                path = path.slice(0, path.indexOf(v1) + 1);
                                visited = visited.slice(0, path.indexOf(v1) + 1);
                            }
                        }
                    }
                };

            findShortestPath(v1, v2, [], []);
            return shortestPaths;
        }
    };
}

module.exports = directedGraph;