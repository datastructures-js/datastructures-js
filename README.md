<img width="410" src="https://user-images.githubusercontent.com/6517308/79055948-c84f8200-7c16-11ea-9a9e-be952f13ba45.jpg" />

[![build:?](https://travis-ci.org/eyas-ranjous/datastructures-js.svg?branch=master)](https://travis-ci.org/eyas-ranjous/datastructures-js) 
[![npm](https://img.shields.io/npm/v/datastructures-js.svg)](https://www.npmjs.com/package/datastructures-js)
[![npm](https://img.shields.io/npm/dm/datastructures-js.svg)](https://www.npmjs.com/package/datastructures-js) [![npm](https://img.shields.io/badge/node-%3E=%206.0-blue.svg)](https://www.npmjs.com/package/datastructures-js)

consolidates all data structures of <a href="https://github.com/datastructures-js">@datastructures-js</a> into a single repository. Data structures are distributed into their own repositories for easier maintenance and usability so that they can be installed and imported individually in the code.

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
 * [Contribution](#contribution) 🤝
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
  Stack,
  Set: EnhancedSet, // renamed to avoid conflict with es6 Set
  LinkedList,
  DoublyLinkedList,
  MinHeap,
  MaxHeap,
  MinPriorityQueue,
  MaxPriorityQueue,
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
  Set as EnhancedSet, // renamed to avoid conflict with es6 Set
  LinkedList,
  DoublyLinkedList,
  MinHeap,
  MaxHeap,
  MinPriorityQueue,
  MaxPriorityQueue,
  Graph,
  DirectedGraph,
  BinarySearchTree,
  AvlTree,
  Trie
} from 'datastructures-js';
```

### extend
There are sometimes domain-specific use cases for data structures that require either a tweak or additional functionality. Data structures here are implemented as a base general purpose classes in ES6. You can always use any of these classes to override or extend the functionality in your own code.

#### Example

```js
const { Graph } = require('datastructures-js'); // OR require('@datastructures-js/graph')

class BusStationsGraph extends Graph {
  findShortestPath(srcStationId, destStationId) {
    // benefit from Graph to implement your own code 
  }
}
```

### Data Structures

#### Queue
https://github.com/datastructures-js/queue

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

#### Min Priority Queue
https://github.com/datastructures-js/priority-queue

#### Max Priority Queue
https://github.com/datastructures-js/priority-queue

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

## Contribution
If you'd like to contribute to the project to improve the implemented data structures or add new ones, feel free to fork the corresponding data structure repo in your github or get in touch to create a new data structure repo to work on! The code just needs to be consistent with the existing structure and style, as well as tests and README. Once done, please open a PR from development branch of the repo. Thanks 🌠

## License
The MIT License. Full License is [here](https://github.com/eyas-ranjous/datastructures-js/blob/master/LICENSE)
