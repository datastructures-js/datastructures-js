/**
 * datastructures-js/DsFactory - implements factory methods for data structures
 * @class
 * Copyright(c) 2018 Eyas Ranjous <eyas.ranjous@gmail.com>
 * MIT Licensed
 */

const ds = require('./index');

class DsFactory {

  /**
   * @public
   * @returns {Stack}
   */    
  stack() {
    return new ds.Stack();
  }

  /**
   * @public
   * @returns {Set}
   */   
  set() {
    return new ds.Set();
  }

  /**
   * @public
   * @returns {Queue}
   */   
  queue() {
    return new ds.Queue();
  }

  /**
   * @public
   * @returns {Queue}
   */   
  q() {
    return this.queue();
  }

  /**
   * @public
   * @returns {PriorityQueue}
   */   
  priorityQueue() {
    return new ds.PriorityQueue();
  }

  /**
   * @public
   * @returns {PriorityQueue}
   */  
  pq() {
    return this.priorityQueue();
  }

  /**
   * @public
   * @returns {LinkedList}
   */  
  linkedList() {
    return new ds.LinkedList();
  }

  /**
   * @public
   * @returns {LinkedList}
   */  
  ll() {
    return this.linkedList();
  }

  /**
   * @public
   * @returns {DoublyLinkedList}
   */  
  doublyLinkedList() {
    return new ds.DoublyLinkedList();
  }

  /**
   * @public
   * @returns {DoublyLinkedList}
   */  
  dll() {
    return this.doublyLinkedList();
  }

  /**
   * @public
   * @returns {BinarySearchTree}
   */  
  binarySearchTree() {
    return new ds.BinarySearchTree(ds.BinaryNode);
  }

  /**
   * @public
   * @returns {BinarySearchTree}
   */  
  bst() {
    return this.binarySearchTree();
  }

  /**
   * @public
   * @returns {AvlTree}
   */  
  avlTree() {
    return new ds.AvlTree(ds.AvlNode);
  }

  /**
   * @public
   * @returns {MinHeap}
   */  
  minHeap() {
    return new ds.MinHeap();
  }

  /**
   * @public
   * @returns {MaxHeap}
   */  
  maxHeap() {
    return new ds.MaxHeap();
  }

  /**
   * @public
   * @returns {Trie}
   */  
  trie() {
    return new ds.Trie();
  }

  /**
   * @public
   * @returns {Graph}
   */  
  graph() {
    return new ds.Graph();
  }

  /**
   * @public
   * @returns {Graph}
   */  
  g() {
    return this.graph();
  }

  /**
   * @public
   * @returns {DirectedGraph}
   */  
  directedGraph() {
    return new ds.DirectedGraph();
  }
  
  /**
   * @public
   * @returns {DirectedGraph}
   */  
  dg() {
    return this.directedGraph();
  }

}

module.exports = DsFactory;