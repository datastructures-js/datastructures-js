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
    return new ds.Queue();
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
    return new ds.PriorityQueue();
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
    return new ds.LinkedList();
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
    return new ds.DoublyLinkedList();
  }

  /**
   * @public
   * @returns {BinarySearchTree}
   */  
  binarySearchTree() {
    return new ds.BinarySearchTree();
  }

  /**
   * @public
   * @returns {BinarySearchTree}
   */  
  bst() {
    return new ds.BinarySearchTree();
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
    return new ds.Graph();
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
    return new ds.DirectedGraph();
  }

}

module.exports = DsFactory;