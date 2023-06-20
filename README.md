<img width="410" src="https://user-images.githubusercontent.com/6517308/79055948-c84f8200-7c16-11ea-9a9e-be952f13ba45.jpg" />

[![npm](https://img.shields.io/npm/v/datastructures-js.svg)](https://www.npmjs.com/package/datastructures-js)
[![npm](https://img.shields.io/npm/dm/datastructures-js.svg)](https://www.npmjs.com/package/datastructures-js) [![npm](https://img.shields.io/badge/node-%3E=%206.0-blue.svg)](https://www.npmjs.com/package/datastructures-js)

consolidates all data structures <a href="https://github.com/datastructures-js">@datastructures-js</a> into a single repository.

<img src="https://user-images.githubusercontent.com/6517308/121813242-859a9700-cc6b-11eb-99c0-49e5bb63005b.jpg">

## install
```sh
npm install --save datastructures-js
```

### require
```js
const {
  Stack,
  Queue,
  Deque,
  EnhancedSet,
  LinkedList, LinkedListNode, DoublyLinkedList, DoublyLinkedListNode,
  Heap, MinHeap, MaxHeap,
  PriorityQueue, MinPriorityQueue, MaxPriorityQueue,
  BinarySearchTree, BinarySearchTreeNode, AvlTree, AvlTreeNode,
  Trie, TrieNode,
  Graph, DirectedGraph,
} = require('datastructures-js');
```

### import
```js
import {
  Stack,
  Queue,
  Deque,
  EnhancedSet,
  LinkedList, LinkedListNode, DoublyLinkedList, DoublyLinkedListNode,
  Heap, MinHeap, MaxHeap,
  PriorityQueue, MinPriorityQueue, MaxPriorityQueue,
  BinarySearchTree, BinarySearchTreeNode, AvlTree, AvlTreeNode,
  Trie, TrieNode,
  Graph, DirectedGraph,
} from 'datastructures-js';
```

### extend
Data structures are implemented as ES6 classes (with types definitions) for general purposes. They can be extended for additional functionality and custom requirements.

```js
const { Graph } = require('datastructures-js'); // OR require('@datastructures-js/graph')

class CustomGraph extends Graph {
  findShortestPath(pointA, pointB) {
    // more code
  }
}
```

## Build
```
grunt build
```

## License
The MIT License. Full License is [here](https://github.com/datastructures-js/datastructures-js/blob/master/LICENSE)
