'use strict';

const expect        = require('chai').expect;
const DirectedGraph = require('../../lib/graph/directedGraph');

describe('directedGraph test', () => {

  let directedGraph = new DirectedGraph();

  describe('.addPath(v1, v2, weight)', () => {
    it('should add vertices and edges to the graph', () => {
      directedGraph.addPath('v1', 'v2', 2);
      directedGraph.addPath('v1', 'v3', 3);
      directedGraph.addPath('v1', 'v4', 1);
      directedGraph.addPath('v2', 'v4', 1);
      directedGraph.addPath('v3', 'v5', 2);
      directedGraph.addPath('v4', 'v3', 1);
      directedGraph.addPath('v4', 'v5', 4);
    });
  });

  describe('.hasVertex()', () => {
    it('should have the added vertices', () => {
      expect(directedGraph.hasVertex('v1')).to.equal(true);
      expect(directedGraph.hasVertex('v2')).to.equal(true);
      expect(directedGraph.hasVertex('v3')).to.equal(true);
      expect(directedGraph.hasVertex('v4')).to.equal(true);
      expect(directedGraph.hasVertex('v5')).to.equal(true);
    });
  });

  describe('.hasEdge(v1, v2)', () => {
    it('should have the added edges as one-way direction', () => {
      expect(directedGraph.hasEdge('v1', 'v2')).to.equal(true);
      expect(directedGraph.hasEdge('v1', 'v3')).to.equal(true);
      expect(directedGraph.hasEdge('v1', 'v4')).to.equal(true);
      expect(directedGraph.hasEdge('v2', 'v4')).to.equal(true);
      expect(directedGraph.hasEdge('v3', 'v5')).to.equal(true);
      expect(directedGraph.hasEdge('v4', 'v3')).to.equal(true);
      expect(directedGraph.hasEdge('v4', 'v5')).to.equal(true);

      expect(directedGraph.hasEdge('v2', 'v1')).to.equal(false);
      expect(directedGraph.hasEdge('v3', 'v1')).to.equal(false);
      expect(directedGraph.hasEdge('v4', 'v1')).to.equal(false);
      expect(directedGraph.hasEdge('v4', 'v2')).to.equal(false);
      expect(directedGraph.hasEdge('v5', 'v3')).to.equal(false);
      expect(directedGraph.hasEdge('v3', 'v4')).to.equal(false);
      expect(directedGraph.hasEdge('v5', 'v4')).to.equal(false);
    });
  });

  describe('.countVertices()', () => {
    it('should get the vertices count', () => {
      expect(directedGraph.countVertices()).to.equal(5);
    });
  });

  describe('.getWeight(v1, v2)', () => {
    it('should get the weight between two vertices', () => {
      expect(directedGraph.getWeight('v1', 'v2')).to.equal(2);
      expect(directedGraph.getWeight('v1', 'v3')).to.equal(3);
      expect(directedGraph.getWeight('v1', 'v4')).to.equal(1);
      expect(directedGraph.getWeight('v2', 'v4')).to.equal(1);
      expect(directedGraph.getWeight('v3', 'v5')).to.equal(2);
      expect(directedGraph.getWeight('v4', 'v3')).to.equal(1);
      expect(directedGraph.getWeight('v4', 'v5')).to.equal(4);
    });
  });

  describe('.traverse(vertex, cb, type)', () => {
    it('should traverse the graph using breadth-first approach', () => {
      let vertices = [];
      directedGraph.traverse('v1', (v) => {
          vertices.push(v);
      });
      expect(vertices).to.deep.equal([ 'v1', 'v2', 'v3', 'v4', 'v5' ]);
    });

    it('should traverse the graph using depth-first approach', () => {
      let vertices = [];
      directedGraph.traverse('v1', (v) => {
          vertices.push(v);
      }, 'dfs');
      expect(vertices).to.deep.equal([ 'v1', 'v2', 'v4', 'v3', 'v5' ]);
    });
  });

  describe('.findShortestPaths(v1, v2)', () => {
    it('should find the shortest path between two vertices', () => {
      expect(directedGraph.findShortestPath('v1', 'v5')).to.deep.equal([[
        'v1', 'v4', 'v3', 'v5'
      ]]);
    });
  });

  describe('.removeVertex(vertex)', () => {
    it('should remove a vertex from the graph', () => {
      directedGraph.removeVertex('v5');
      expect(directedGraph.hasVertex('v5')).to.equal(false);
      expect(directedGraph.hasEdge('v3', 'v5')).to.equal(false);
      expect(directedGraph.hasEdge('v4', 'v5')).to.equal(false);
      expect(directedGraph.countVertices()).to.equal(4);
    });
  });

  describe('.removeEdge(v1, v2)', () => {
    it('should remove the edge between two vertices', () => {
      directedGraph.removeEdge('v2', 'v4');
      expect(directedGraph.hasEdge('v2', 'v4')).to.equal(false);
    });
  });

});