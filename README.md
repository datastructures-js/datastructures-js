<img width="410" src="https://user-images.githubusercontent.com/6517308/79055948-c84f8200-7c16-11ea-9a9e-be952f13ba45.jpg" />

[![build:?](https://travis-ci.org/eyas-ranjous/datastructures-js.svg?branch=master)](https://travis-ci.org/eyas-ranjous/datastructures-js) 
[![npm](https://img.shields.io/npm/v/datastructures-js.svg)](https://www.npmjs.com/package/datastructures-js)
[![npm](https://img.shields.io/npm/dm/datastructures-js.svg)](https://www.npmjs.com/package/datastructures-js) [![npm](https://img.shields.io/badge/node-%3E=%206.0-blue.svg)](https://www.npmjs.com/package/datastructures-js)

consolidates all data structures of <a href="https://github.com/datastructures-js">@datastructures-js</a> into a single repository.

<img src="https://user-images.githubusercontent.com/6517308/121813242-859a9700-cc6b-11eb-99c0-49e5bb63005b.jpg">

# Contents
* [Install](#install)
* [require](#require)
* [import](#import)
* [extend](#extend)
* [Data Structures](#data-structures)
  * [Stack](#stack)
  * [Queue](#queue)
  * [Linked List (Single/Doubly)](#linked-list-singledoubly)
  * [Set](#set)
  * [Heap (Min/Max)](#heap-minmax)
  * [Priority Queue (Min/Max)](#priority-queue-minmax)
  * [Binary Search Tree (BST/AVL)](#binary-search-tree-bstavl)
  * [Trie](#trie)
  * [Graph (Directed/Undirected)](#graph-directedundirected)
 * [Build](#build)
 * [License](#license)

## install
```sh
npm install --save datastructures-js
```

### require
```js
const {
  Stack,

  Queue,

  EnhancedSet,

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
  TrieNode,

  Graph,
  DirectedGraph,
} = require('datastructures-js');
```

### import
```js
import {
  Stack,

  Queue,

  EnhancedSet,

  LinkedList,
  LinkedListNode,
  DoublyLinkedList,
  DoublyLinkedListNode,

  MinHeap,
  MaxHeap,
  HeapNode, // interface

  PriorityQueueOptions, // interface
  PriorityQueueItem, // interface
  MinPriorityQueue,
  MaxPriorityQueue,

  BinarySearchTree,
  BinarySearchTreeNode,
  AvlTree,
  AvlTreeNode,

  Trie,
  TrieNode,

  Graph,
  DirectedGraph,
} from 'datastructures-js';
```

### extend
Data structures are implemented here as ES6 classes (with types definitions) for general purposes. They can be extended for additional functionality and custom requirements.

```js
const { Graph } = require('datastructures-js'); // OR require('@datastructures-js/graph')

class CustomGraph extends Graph {
  findShortestPath(pointA, pointB) {
    // code
  }
}
```

## Data Structures

#### Stack
<a hre="https://github.com/datastructures-js/stack#datastructures-jsstack">@datastructures-js/stack</a>

#### Queue
<a hre="https://github.com/datastructures-js/queue#datastructures-jsqueue">@datastructures-js/queue</a>

#### Linked List (Single/Doubly)
<a hre="https://github.com/datastructures-js/linked-list#datastrucures-jslinked-list">@datastructures-js/linked-list</a>

#### Set
<a hre="https://github.com/datastructures-js/set#datastructures-jssett">@datastructures-js/set</a>

#### Heap (Min/Max)
<a hre="https://github.com/datastructures-js/heap#datastructures-jsheap">@datastructures-js/heap</a>

#### Priority Queue (Min/Max)
<a hre="https://github.com/datastructures-js/priority-queue#datastructures-jspriority-queue">@datastructures-js/priority-queue</a>

#### Binary Search Tree (BST/AVL)
<a hre="https://github.com/datastructures-js/binary-search-tree#datastructures-jsbinary-search-tree">@datastructures-js/binary-search-tree</a>

#### Trie
<a hre="https://github.com/datastructures-js/trie#datastructures-jstrie">@datastructures-js/trie</a>

#### Graph (Directed/Undirected)
<a hre="https://github.com/datastructures-js/graph#datastructures-jsgraph">@datastructures-js/graph</a>

## Build
```
grunt build
```

## License
The MIT License. Full License is [here](https://github.com/eyas-ranjous/datastructures-js/blob/master/LICENSE)
