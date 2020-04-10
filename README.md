# [datastructures-js](https://github.com/eyas-ranjous/datastructures-js)

[![build:?](https://travis-ci.org/eyas-ranjous/datastructures-js.svg?branch=master)](https://travis-ci.org/eyas-ranjous/datastructures-js) 
[![npm](https://img.shields.io/npm/v/datastructures-js.svg)](https://www.npmjs.com/package/datastructures-js)
[![npm](https://img.shields.io/npm/dm/datastructures-js.svg)](https://www.npmjs.com/package/datastructures-js) [![npm](https://img.shields.io/badge/node-%3E=%206.0-blue.svg)](https://www.npmjs.com/package/datastructures-js)

consolidates all data structures of https://github.com/datastructures-js into a single repository.

# Table of Contents
* [Install](#install)
* [API](#api)
  * [require](#require)
  * [import](#import)
  * [extend](#extend)
  * [Data Structures](#data-structures)
    * [Queue](#queue)
    * [Priority Queue](#priority-queue)
    * [Stack](#stack)
    * [Set](#set)
    * [Linked List](#linked-list)
    * [Doubly Linked List](#doubly-linked-list)
    * [Min Heap](#min-heap)
    * [Max Heap](#max-heap)
    * [Graph](#graph)
    * [Directed Graph](#directed-graph)
    * [Binary Search Tree](#binary-search-tree)
    * [AVL Tree](#avl-tree)
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
  Set: EnhancedSet, // you can rename it to avoid conflict with es6 Set
  LinkedList,
  DoublyLinkedList,
  MinHeap,
  MaxHeap,
  Graph,
  DirectedGraph,
  BinarySearchTree,
  AvlTree,
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
  Set as EnhancedSet, // you can rename it to avoid conflict with es6 Set
  LinkedList,
  DoublyLinkedList,
  MinHeap,
  MaxHeap,
  Graph,
  DirectedGraph,
  BinarySearchTree,
  AvlTree,
  Trie
} from 'datastructures-js';
```

### extend
There are always some domain-specific use cases for data structures that require either a tweak or additional functionality. As the data structures are implemented as general purpose es6 classes. you can extend any of these classes to override or enhance the functionality in your own code.

#### Example

```js
const { Graph } = require('datastructures-js');

class BusStationsGraph extends Graph {
  findShortestPath(srcStationId, destStationId) {
    // benefit from Graph to implement your own code 
  }
}
```

### Data Structures

#### Queue
https://github.com/datastructures-js/queue

#### Priority Queue
https://github.com/datastructures-js/priority-queue

#### Stack
https://github.com/datastructures-js/stack

#### Set
https://github.com/datastructures-js/set

#### Linked List
https://github.com/datastructures-js/linked-list

#### Doubly Linked List
https://github.com/datastructures-js/linked-list

#### Min Heap
https://github.com/datastructures-js/heap

#### Max Heap
https://github.com/datastructures-js/heap

#### Graph
https://github.com/datastructures-js/graph

#### Directed Graph
https://github.com/datastructures-js/graph

#### Binary Search Tree
https://github.com/datastructures-js/binary-search-tree

#### AVL Tree
https://github.com/datastructures-js/binary-search-tree

#### Trie
https://github.com/datastructures-js/trie

## Build
```
grunt build
```

## License
The MIT License. Full License is [here](https://github.com/eyas-ranjous/datastructures-js/blob/master/LICENSE)
