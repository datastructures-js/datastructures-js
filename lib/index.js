'use strict';

/**
 * exports data structures module
 */
module.exports = {   
  Set: require('./set'),
  Stack: require('./stack'),
  Queue: require('./queue/queue'),
  PriorityQueue: require('./queue/priorityQueue'),
  LinkedList: require('./linkedList/linkedList'),
  DoublyLinkedList: require('./linkedList/doublyLinkedList'),
  BinarySearchTree: require('./tree/binarySearchTree'),
  MinHeap: require('./tree/heap/minHeap'),
  MaxHeap: require('./tree/heap/maxHeap'),
  Trie: require('./tree/trie'),
  Graph: require('./graph/graph'),
  DirectedGraph: require('./graph/directedGraph')
};