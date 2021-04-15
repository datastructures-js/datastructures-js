<img width="410" src="https://user-images.githubusercontent.com/6517308/79055948-c84f8200-7c16-11ea-9a9e-be952f13ba45.jpg" />

[![build:?](https://travis-ci.org/eyas-ranjous/datastructures-js.svg?branch=master)](https://travis-ci.org/eyas-ranjous/datastructures-js) 
[![npm](https://img.shields.io/npm/v/datastructures-js.svg)](https://www.npmjs.com/package/datastructures-js)
[![npm](https://img.shields.io/npm/dm/datastructures-js.svg)](https://www.npmjs.com/package/datastructures-js) [![npm](https://img.shields.io/badge/node-%3E=%206.0-blue.svg)](https://www.npmjs.com/package/datastructures-js)

consolidates all data structures of <a href="https://github.com/datastructures-js">@datastructures-js</a> into a single repository.

# Table of Contents
* [Install](#install)
* [API](#api)
  * [require](#require)
  * [import](#import)
  * [extend](#extend)
  * [Data Structures](#data-structures)
    * [Queue](#queue)
    * [Stack](#stack)
    * [Set](#set)
    * [Linked List](#linked-list)
    * [Doubly Linked List](#doubly-linked-list)
    * [Min Heap](#min-heap)
    * [Max Heap](#max-heap)
    * [Min Priority Queue](#min-priority-queue)
    * [Max Priority Queue](#max-priority-queue)
    * [Graph](#graph)
    * [Directed Graph](#directed-graph)
    * [Binary Search Tree](#binary-search-tree)
    * [AVL (Self Balancing) Tree](#avl-tree)
    * [Trie](#trie)
 * [Build](#build)
 * [License](#license)

## install
```sh
npm install --save datastructures-js
```

## API

### require
```js
// import your required classes
const {
 Queue,
  PriorityQueue,

  Stack,

  Set as EnhancedSet, // renamed to avoid conflict with es6 Set

  LinkedList,
  LinkedListNode,
  DoublyLinkedList,
  DoublyLinkedListNode,

  MinHeap,
  MaxHeap,

  MinPriorityQueue,
  MaxPriorityQueue,

  Graph,
  DirectedGraph,

  BinarySearchTree,
  BinarySearchTreeNode,
  AvlTree,
  AvlTreeNode,

  Trie
} = require('datastructures-js');
```

### import
```js
// import your required classes
import {
  Queue,
  PriorityQueue,

  Stack,

  Set as EnhancedSet, // renamed to avoid conflict with es6 Set

  LinkedList,
  LinkedListNode,
  DoublyLinkedList,
  DoublyLinkedListNode,

  MinHeap,
  MaxHeap,

  MinPriorityQueue,
  MaxPriorityQueue,

  Graph,
  DirectedGraph,

  BinarySearchTree,
  BinarySearchTreeNode,
  AvlTree,
  AvlTreeNode,

  Trie
} from 'datastructures-js';
```

### extend
Data structures are implemented as ES6 classes and for general purposes. You can extend any of these classes to enhance/change functionality in your code.

```js
const { Graph } = require('datastructures-js'); // OR require('@datastructures-js/graph')

class CustomGraph extends Graph {
  findShortestPath(pointA, pointB) {
    // shortest path from A -> B
  }
}
```

### Repositories

#### Queue
https://github.com/datastructures-js/queue

#### Stack
https://github.com/datastructures-js/stack

#### Set
https://github.com/datastructures-js/set

#### Linked List (Single/Doubly)
https://github.com/datastructures-js/linked-list

#### Heap (Min/Max)
https://github.com/datastructures-js/heap

#### Priority Queue (Min/Max)
https://github.com/datastructures-js/priority-queue

#### Graph (Directed/Undirected)
https://github.com/datastructures-js/graph

#### Binary Search Tree (BST/AVL)
https://github.com/datastructures-js/binary-search-tree

#### Trie
https://github.com/datastructures-js/trie

## Build
```
grunt build
```

## License
The MIT License. Full License is [here](https://github.com/eyas-ranjous/datastructures-js/blob/master/LICENSE)
