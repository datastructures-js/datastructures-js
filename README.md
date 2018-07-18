# [@datastructures-js](https://github.com/datastructures-js)


[![build:?](https://travis-ci.org/eyas-ranjous/datastructures-js.svg?branch=master)](https://travis-ci.org/eyas-ranjous/datastructures-js) 
[![npm](https://img.shields.io/npm/v/datastructures-js.svg)](https://www.npmjs.com/package/datastructures-js)
[![npm](https://img.shields.io/npm/dm/datastructures-js.svg)](https://www.npmjs.com/package/datastructures-js) [![npm](https://img.shields.io/badge/node-%3E=%206.0-blue.svg)](https://www.npmjs.com/package/datastructures-js)

### This repository has been fragmented into independent repositories per each data structure as the following:

#### [@datastructures-js/stack](https://github.com/datastructures-js/stack)
#### [@datastructures-js/queue](https://github.com/datastructures-js/queue)
#### [@datastructures-js/priority-queue](https://github.com/datastructures-js/priority-queue)
#### [@datastructures-js/set](https://github.com/datastructures-js/set)
#### [@datastructures-js/linked-list](https://github.com/datastructures-js/linked-list)
#### [@datastructures-js/doubly-linked-list](https://github.com/datastructures-js/doubly-linked-list)
#### [@datastructures-js/min-heap](https://github.com/datastructures-js/min-heap)
#### [@datastructures-js/max-heap](https://github.com/datastructures-js/max-heap)
#### [@datastructures-js/trie](https://github.com/datastructures-js/trie)
#### [@datastructures-js/binary-search-tree](https://github.com/datastructures-js/binary-search-tree)
#### [@datastructures-js/avl-tree](https://github.com/datastructures-js/avl-tree)
#### [@datastructures-js/graph](https://github.com/datastructures-js/graph)


### While it can still be used in its monolithic form through the following interface:

### Usage
```
const ds = require('datastructures-js'); // internally requires all the above repos
```

### Creating Data Structures
```js
// Queue
const queue = ds.queue();
// OR
const q = ds.q();

// Stack
const stack = ds.stack();

// Set
const set = ds.set();

// Priority Queue
const priorityQueue = ds.priorityQueue();
// OR
const pq = ds.pq();

// Linked List
const linkedList = ds.linkedList();
// OR
const ll = ds.ll();

// Doubly Linked List
const doublyLinkedList = ds.doublyLinkedList();
// OR
const dll = ds.dll();

// Min Heap
const minHeap = ds.minHeap();

// Max Heap
const maxHeap = ds.maxHeap();

// Trie
const trie = ds.trie();

// Binary Search Tree
const binarySearchTree = ds.binarySearchTree();
// OR
const bst = ds.bst();

// AVL Tree
const avlTree = ds.avlTree();
// OR
const avl = ds.avl();

// Graph
const graph = ds.graph();
// OR
const g = ds.graph();
```

## Build
```
grunt build
```

## License
The MIT License. Full License is [here](https://github.com/eyas-ranjous/datastructures-js/blob/master/LICENSE)
