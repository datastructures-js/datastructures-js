'use strict';

const expect = require('chai').expect,
      Graph  = require('../../lib/graph/graph');

describe('graph test', () => {

    let graph = new Graph();

    describe('.addPath(v1, v2, weight)', () => {
        it('should add vertices and edges to the graph', () => {
            graph.addPath('v1', 'v2', 2);
            graph.addPath('v2', 'v3', 3);
            graph.addPath('v1', 'v3', 6);
            graph.addPath('v2', 'v4', 1);
            graph.addPath('v4', 'v3', 1);
            graph.addPath('v4', 'v5', 4);
            graph.addPath('v3', 'v5', 2);
        });
    });

    describe('.hasVertex()', () => {
        it('should have the added vertices', () => {
            expect(graph.hasVertex('v1')).to.equal(true);
            expect(graph.hasVertex('v2')).to.equal(true);
            expect(graph.hasVertex('v3')).to.equal(true);
            expect(graph.hasVertex('v4')).to.equal(true);
            expect(graph.hasVertex('v5')).to.equal(true);
        });
    });

    describe('.hasEdge(v1, v2)', () => {
        it('should have the added edges', () => {
            expect(graph.hasEdge('v1', 'v2')).to.equal(true);
            expect(graph.hasEdge('v2', 'v3')).to.equal(true);
            expect(graph.hasEdge('v1', 'v3')).to.equal(true);
            expect(graph.hasEdge('v2', 'v4')).to.equal(true);
            expect(graph.hasEdge('v3', 'v4')).to.equal(true);
            expect(graph.hasEdge('v1', 'v2')).to.equal(true);
            expect(graph.hasEdge('v4', 'v5')).to.equal(true);
            expect(graph.hasEdge('v5', 'v3')).to.equal(true);
        });
    });

    describe('.countVertices()', () => {
        it('should get the vertices count', () => {
            expect(graph.countVertices()).to.equal(5);
        });
    });

    describe('.getWeight(v1, v2)', () => {
        it('should get the weight between two vertices', () => {
             expect(graph.getWeight('v1', 'v2')).to.equal(2);
             expect(graph.getWeight('v2', 'v3')).to.equal(3);
             expect(graph.getWeight('v1', 'v3')).to.equal(6);
             expect(graph.getWeight('v2', 'v4')).to.equal(1);
             expect(graph.getWeight('v3', 'v4')).to.equal(1);
             expect(graph.getWeight('v4', 'v5')).to.equal(4);
             expect(graph.getWeight('v3', 'v5')).to.equal(2);
             expect(graph.getWeight('v5', 'v5')).to.equal(0);
             expect(graph.getWeight('v3', 'v10')).to.equal(null);
        });
    });

    describe('.traverse(vertex, cb, type)', () => {
        it('should traverse the graph using depth-first approach', () => {
            let vertices = [];
            graph.traverse('v1', (v) => {
                vertices.push(v);
            }, 'dfs');
            expect(vertices).to.deep.equal([ 'v1', 'v2', 'v3', 'v4', 'v5' ]);
        });

        it('should traverse the graph using breadth-first approach', () => {
            let vertices = [];
            graph.traverse('v5', (v) => {
                vertices.push(v);
            }, 'bfs');
            expect(vertices).to.deep.equal([ 'v5', 'v4', 'v3', 'v2', 'v1' ]);
        });
    });

    describe('.findShortestPaths(v1, v2)', () => {
        it('should find the shortest path between two vertices', () => {
            expect(graph.findShortestPath('v1', 'v5')).to.deep.equal([[ 'v1', 'v2', 'v4', 'v3', 'v5']]);
            expect(graph.findShortestPath('v3', 'v1')).to.deep.equal([[ 'v3', 'v4', 'v2', 'v1']]);
        });
    });

    describe('.removeVertex(vertex)', () => {
        it('should remove a vertex from the graph', () => {
            graph.removeVertex('v5');
            expect(graph.hasVertex('v5')).to.equal(false);
            expect(graph.hasEdge('v4', 'v5')).to.equal(false);
            expect(graph.hasEdge('v3', 'v5')).to.equal(false);
            expect(graph.countVertices()).to.equal(4);
        });
    });

    describe('.removeEdge(v1, v2)', () => {
        it('should remove the edge between two vertices', () => {
            graph.removeEdge('v2', 'v3');
            expect(graph.hasEdge('v2', 'v3')).to.equal(false);
        });
    });

    describe('.clear()', () => {
        it('should clear the graph', () => {
            graph.clear();
            expect(graph.countVertices()).to.equal(0);
        });
    });

});