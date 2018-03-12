'use strict';

const expect    = require('chai').expect;
const ds        = require('../lib');
const DsFactory = require('../lib/dsFactory');

describe('dsFactory tests', () => {

  let dsFactory = new DsFactory();

  describe('.stack()', () => {
    it('should get a stack object', function() {
      expect(dsFactory.stack()).to.be.instanceof(ds.Stack);
    });
  });

  describe('.set()', () => {
    it('should get a set object', function() {
      expect(dsFactory.set()).to.be.instanceof(ds.Set);
    });
  });

  describe('.queue() / .q()', () => {
    it('should get a queue object', function() {
      expect(dsFactory.queue()).to.be.instanceof(ds.Queue);
      expect(dsFactory.q()).to.be.instanceof(ds.Queue);
    });
  });

  describe('.priorityQueue() / .pq()', () => {
    it('should get a priorityQueue object', function() {
      expect(dsFactory.priorityQueue()).to.be.instanceof(ds.PriorityQueue);
      expect(dsFactory.pq()).to.be.instanceof(ds.PriorityQueue);
    });
  });

  describe('.linkedList() / .ll()', () => {
    it('should get a linkedList object', function() {
      expect(dsFactory.linkedList()).to.be.instanceof(ds.LinkedList);
      expect(dsFactory.ll()).to.be.instanceof(ds.LinkedList);
    });
  });

  describe('.doublyLinkedList() / dll()', () => {
    it('should get a doublyLinkedList object', function() {
      expect(dsFactory.doublyLinkedList()).to.be.instanceof(ds.DoublyLinkedList);
      expect(dsFactory.dll()).to.be.instanceof(ds.DoublyLinkedList);
    });
  });

  describe('.binarySearchTree() / .bst()', () => {
    it('should get a binarySearchTree object', function() {
      expect(dsFactory.binarySearchTree()).to.be.instanceof(ds.BinarySearchTree);
      expect(dsFactory.bst()).to.be.instanceof(ds.BinarySearchTree);
    });
  });

  describe('.minHeap()', () => {
    it('should get a minHeap object', function() {
      expect(dsFactory.minHeap()).to.be.instanceof(ds.MinHeap);
    });
  });

  describe('.maxHeap()', () => {
    it('should get a maxHeap object', function() {
      expect(dsFactory.maxHeap()).to.be.instanceof(ds.MaxHeap);
    });
  });

  describe('.trie()', () => {
    it('should get a trie object', function() {
      expect(dsFactory.trie()).to.be.instanceof(ds.Trie);
    });
  });

  describe('.graph() / .g()', () => {
    it('should get a graph object', function() {
      expect(dsFactory.graph()).to.be.instanceof(ds.Graph);
      expect(dsFactory.g()).to.be.instanceof(ds.Graph);
    });
  });

  describe('.directedGraph() / .dg()', () => {
    it('should get a directedGraph object', function() {
      expect(dsFactory.directedGraph()).to.be.instanceof(ds.DirectedGraph);
      expect(dsFactory.dg()).to.be.instanceof(ds.DirectedGraph);
    });
  });

});