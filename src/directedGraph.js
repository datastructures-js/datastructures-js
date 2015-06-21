/*!
 * datastructures-js
 * directedGraph
 * Copyright(c) 2015 Eyas Ranjous <eyas@eyasranjous.info>
 * MIT Licensed
 */

function directedGraph() {

    'use strict';

    var self = {},
        vertices = [], // graph nodes
        directions = [], // graph directions [][]
        verticesCount = 0,
        removeElementFromArray = function(arr, v) {
            if (isNaN(parseInt(v))) {
                delete arr[v];
            }
            else {
                arr.splice(v, 1);
            }
        };

    self.addVertex = function(v) {
        if (vertices[v] === undefined) {
            vertices[v] = true;
            verticesCount++;
        }
    };

    self.removeVertex = function(v) {
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
    };

    self.hasVertex = function(v) {
        return vertices[v] !== undefined ? true : false;
    };

    self.countVertices = function() {
        return verticesCount;
    };

    self.visit = function(func) {
        var visit = function(dirs, visited, func) {
            for (var vertex in dirs) {
                if (dirs.hasOwnProperty(vertex) && !visited[vertex]) {
                    func.call(func, vertex);
                    visited[vertex] = true;
                    if (directions[vertex]) {
                        visit(directions[vertex], visited, func); // depth-first approach
                    }
                }
            }
        };
        visit(directions, [], func);
    };

    self.getSeparatedVertices = function() {
        var separated = [],
            directionsVertices = [];
        this.visit(function(vertex){
            directionsVertices[vertex] = true;
        });

        for (var v in vertices) {
            if (vertices.hasOwnProperty(v) && !directionsVertices[v]) {
                separated.push(v);
            }
        }

        return separated;
    };

    self.addDirection = function(v1, v2, weight) {
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
    };

    self.hasDirection = function(v1, v2) {
        if (this.hasVertex(v1) && this.hasVertex(v2) && 
            directions[v1] && directions[v1][v2] !== undefined) {
            return true;
        }
        return false;
    };

    // return the weight of a direction if it exists
    self.getDirectionWeight = function(v1, v2) {
        return this.hasDirection(v1, v2) ? directions[v1][v2] : null;
    };

    self.removeDirection = function(v1, v2) {
        if (this.hasDirection(v1, v2)) {
            if (Object.keys(directions[v1]).length === 1) {
                removeElementFromArray(directions, v1);
            }
            else {
                removeElementFromArray(directions[v1], v2);
            }
        }
    };

    self.calculatePathWeight = function(path) {
        var sum = 0;
        for (var i = 0; i <= path.length - 2; i++) {
            sum += directions[path[i]][path[i + 1]];
        }
        return sum;
    };


    self.findShortestPath = function(v1, v2) {
        var that = this,
            shortestPaths = [],
            reccentPathWeight,
            existingPathWeight,

            findShortestPath = function(v1, v2, path, visited) {

                if (visited.indexOf(v1) === -1) {
                    visited.push(v1); // visit the starting vertex
                    path.push(v1); // push the starting vertex in the path

                    if (v1 === v2) { // if we arrived to the destination
                        if (shortestPaths.length > 0) { // if there's already a shortest path
                            
                            reccentPathWeight = that.calculatePathWeight(path); // calculate path weight

                            // calculate the existing shortest path weight
                            existingPathWeight = that.calculatePathWeight(shortestPaths[0]);

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
                            shortestPaths.push(path); // no shortest path yet, then push the path
                        }
                    }

                    // we haven't arrived to the destination and we still have directions
                    else if (directions[v1] && (v1 !== v2)) {
                        for (var vertex in directions[v1]) {
                            if (directions[v1].hasOwnProperty(vertex)) {
                                findShortestPath(vertex, v2, path, visited); // depth-first appraoch
   
                                // slice path and visited arrays to allow to push the other directions of v1
                                path = path.slice(0, path.indexOf(v1) + 1);
                                visited = visited.slice(0, path.indexOf(v1) + 1);
                            }
                        }
                    }
                }
            };

        findShortestPath(v1, v2, [], []);
        return shortestPaths;
    };

    // export the directedGraph api
    self.export = function() {
        var that = this;
        return {
            addVertex: that.addVertex.bind(that),
            hasVertex: that.hasVertex.bind(that),
            removeVertex: that.removeVertex.bind(that),
            countVertices: that.countVertices.bind(that),
            getSeparatedVertices: that.getSeparatedVertices.bind(that),
            addDirection: that.addDirection.bind(that),
            hasDirection: that.hasDirection.bind(that),
            getDirectionWeight: that.getDirectionWeight.bind(that),
            removeDirection: that.removeDirection.bind(that),
            visit: that.visit.bind(that),
            findShortestPath: that.findShortestPath.bind(that),
        };
    };

    return self;

}

module.exports = directedGraph;