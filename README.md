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
    * [Stack](#stack)
    * [Queue](#queue)
    * [Linked List](#linked-list)
    * [Set](#set)
    * [Heap](#max-heap)
    * [Priority Queue](#min-priority-queue)
    * [Binary Search Tree](#binary-search-tree)
    * [Trie](#trie)
    * [Graph](#graph)
 * [Build](#build)
 * [License](#license)

## install
```sh
npm install --save datastructures-js
```

## API

### require
```js
const {
  Stack,

  Queue,

  Set as EnhancedSet, // renamed to avoid conflict with es6 Set

  LinkedList,
  LinkedListNode,
  DoublyLinkedList,
  DoublyLinkedListNode,

  MinHeap,
  MaxHeap,

  MinPriorityQueue,
  MaxPriorityQueue,

  BinarySearchTree,
  BinarySearchTreeNode,
  AvlTree,
  AvlTreeNode,

  Trie,

  Graph,
  DirectedGraph,
} = require('datastructures-js');
```

### import
```js
import {
  Stack,

  Queue,

  Set as EnhancedSet, // renamed to avoid conflict with es6 Set

  LinkedList,
  LinkedListNode,
  DoublyLinkedList,
  DoublyLinkedListNode,

  MinHeap,
  MaxHeap,

  MinPriorityQueue,
  MaxPriorityQueue,

  BinarySearchTree,
  BinarySearchTreeNode,
  AvlTree,
  AvlTreeNode,

  Trie,

  Graph,
  DirectedGraph,
} from 'datastructures-js';
```

### extend
Data structures are implemented here as ES6 classes for general purposes. You can extend any of these classes to add/change any functionality in your code.

```js
const { Graph } = require('datastructures-js'); // OR require('@datastructures-js/graph')

class CustomGraph extends Graph {
  findShortestPath(pointA, pointB) {
    // code
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
