<img alt="ds_logo" width="420" src="https://user-images.githubusercontent.com/6517308/35717972-dfc67334-07a7-11e8-8678-5a15e3412084.png" />

[![build:?](https://travis-ci.org/eyas-ranjous/datastructures-js.svg?branch=master)](https://travis-ci.org/eyas-ranjous/datastructures-js) 
[![npm](https://img.shields.io/npm/v/datastructures-js.svg)](https://www.npmjs.com/package/datastructures-js)
[![npm](https://img.shields.io/npm/dm/datastructures-js.svg)](https://www.npmjs.com/packages/datastructures-js) [![npm](https://img.shields.io/badge/node-%3E=%206.0-blue.svg)](https://www.npmjs.com/package/datastructures-js) [![Maintainability](https://api.codeclimate.com/v1/badges/4a335c4842eab2f83497/maintainability)](https://codeclimate.com/github/eyas-ranjous/datastructures-js/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/4a335c4842eab2f83497/test_coverage)](https://codeclimate.com/github/eyas-ranjous/datastructures-js/test_coverage)

Javascript implementation of the main data structures. Each data structure object is constructed using a factory function that holds the data structure name.

## Install
```shell
npm install datastructures-js
```

## Usage
```javascript
let ds = require('datastructures-js');
```

## Data Structures
- [Stack](#stack)
- [Queue](#queue)
- [Priority Queue](#priorityqueue)
- [Set](#set)
- [Linked List](#linkedlist)
- [Doubly Linked List](#doublylinkedlist)
- [Binary Search Tree](#binarysearchtree)
- [AVL Tree](#avltree)
- [Min Heap Tree](#minheap)
- [Max Heap Tree](#maxheap)
- [Trie](#trie)
- [Graph](#graph)
- [Directed Graph](#directedgraph)

## Contribution & License
- [Contribution](#contribution)
- [License](#license)

## Stack
elements data type: any type.

**construction**
```javascript
let stack = ds.stack();
```
**.push(element)** 

push an element to the top of the stack.
```javascript
stack.push('test');
```
**.peek()** 

returns the top element in the stack.
```javascript
console.log(stack.peek()); // test
```
**.pop()** 

pops the top element of the stack.
```javascript
console.log(stack.pop()); // test
console.log(stack.peek()); // null
```

**.isEmpty()** 

checks if the stack is empty.
```javascript
console.log(stack.isEmpty()); // true
```
**.length()** 

returns the length length of the stack.
```javascript
console.log(stack.length()); // 0
```

## Queue
elements data type: any type.

**construction**
```javascript
let queue = ds.queue();

// OR

let queue = ds.q();
```
**.enqueue(element)** 

adds an element to the back of the queue.
```javascript
queue.enqueue(10);
queue.enqueue(20);
```
**.front()** 

returns the front element in queue.
```javascript
console.log(queue.front()); // 10
```
**.back()** 

returns the back element in the queue.
```javascript
console.log(queue.back()); // 20
```

**.dequeue()** 

dequeues an element from the queue.
```javascript
console.log(queue.dequeue()); // 10
console.log(queue.front()); // 20
```

**.isEmpty()** 

checks if the queue is empty.
```javascript
console.log(queue.isEmpty()); // false
```
**.length()** 

returns the length of the queue
```javascript
console.log(queue.length()); // 1
```

**.toArray()** 

converts the queue to an array with front starting at 0
```javascript
queue.enqueue(1);
queue.enqueue(4);
queue.enqueue(2);
console.log(queue.toArray()); // [1, 4, 2]
```

**.clear()** 

clears the queue
```javascript
queue.clear();
queue.length(); // 0
```

## PriorityQueue
elements data type: any type.

**construction**
```javascript
let pQueue = ds.priorityQueue();

// OR

let pQueue = ds.pq();
```

**.enqueue(element, priority)** 

adds an element with priority (number) to the back of the queue.
```javascript
pQueue.enqueue('patient 1', 2); // lower priority
pQueue.enqueue('patient 2', 1); // higher priority
```

**.front()** 

returns the front element in queue.
```javascript
console.log(pQueue.front()); // patient 1
```

**.back()** 

returns the back element in the queue.
```javascript
console.log(pQueue.back()); // patient 3
```

**.dequeue()** 

dequeues the highest priority element from the queue.
```javascript
console.log(pQueue.dequeue()); // patient 2
console.log(pQueue.front()); // patient 1
```

**.isEmpty()** 

checks if the queue is empty.
```javascript
console.log(queue.isEmpty()); // false
```

**.length()** 

returns the length of the queue.
```javascript
console.log(queue.length()); // 1
```

converts the queue to an array in the order elements were queued
```javascript
queue.enqueue('test 1', 2);
queue.enqueue('test 2', 3);
queue.enqueue('test 3', 1);
console.log(queue.toArray()); // ['test 1', 'test 2', 'test 3']
```

**.clear()** 

clears the queue
```javascript
queue.clear();
console.log(queue.length()); // 0
```

## Set
elements data type: number, string, boolean, null, undefined.

**construction**
```javascript
let set = ds.set();
```

**.add(element)** 

adds an element to the set.
```javascript
set.add('A');
set.add('B');
set.add('C');
set.add('D');
```
**.isEmpty()** 

checks if the set is empty.
```javascript
console.log(set.isEmpty()); // false
```

**.contains(element)** 

checks if the set contains an element
```javascript
console.log(set.contains('C')); // true
```

**.remove(element)** 

removes an element from the set.
```javascript
set.remove('C');
console.log(set.contains('C')); // false
```

**.size()** 

returns the number of elements in the set.
```javascript
console.log(set.size()); // 3
```

**.union(set)** 

unions the set with another set and returns the resulting set.
```javascript
let set2 = ds.set();
set2.add('A');
set2.add('E');
set2.add('F');
let unionSet = set.union(set2); // unionSet contains A, B, D, E, F
```

**.intersect(set)** 

intersects the set with another set and returns the resulting set.
```javascript
let set2 = ds.set();
set2.add('A');
set2.add('E');
set2.add('F');
// set contains A, B, D
let intersectSet = set.intersect(set2); // intersectSet contains A
```

**.diff(set)** 

returns the diff set between the set and another set.
```javascript
let set2 = ds.set();
set2.add('A');
set2.add('E');
set2.add('F');
// set contains A, B, D
let diffSet = set.diff(set2); // diffSet contains B, D
```

**.isSubset(set)** 

checks if the set is a subset of another set
```javascript
let s1 = ds.set();
s1.add('B');
s1.add('G');
s1.add('D');

let s2 = ds.set();
s2.add('A');
s2.add('G');
s2.add('B');
s2.add('G');
s2.add('D');

console.log(s2.isSubset(s1)); // false
console.log(s1.isSubset(s2)); // true
```

**.toArray()** 

converts the set into an array.
```javascript
console.log(set.toArray()); // ['A', 'B', 'D']
```

**.clear()** 

clears the set
```javascript
set.clear(); // set is empty
console.log(set.size()); // 0  
```

## LinkedList

<img width="429" alt="ll" src="https://user-images.githubusercontent.com/6517308/35762715-5d00c9bc-0861-11e8-88f7-6e503a1fa3af.png">

node value data type: number, string, boolean, null, undefined.

**construction**
```javascript
let linkedList = ds.linkedList();

// OR

let linkedList = ds.ll();
```

**.addFirst(value)** 

add a node with the specified value to the beginning of the list.
```javascript
linkedList.addFirst('n1');
```

**.addLast(value)** 

add a node with the specified value to the end of the list.
```javascript
linkedList.addLast('n4');
```

**.addAfter(value, newValue)** 

add a node with newValue after an existing value's node, throws exception if value doesnt exist.
```javascript
try {
    linkedList.addAfter('n1', 'n2');
    linkedList.addAfter('n33', 'n3');
}
catch (e) {
    console.log(e.message); // node n33 not found
}
```

**.addBefore(value, newValue)** 

add a node with newValue before an existing value's node, throws exception if value doesnt exist.
```javascript
try {
  linkedList.addBefore('n4', 'n3');
  linkedList.addBefore('n33', 'n3');
}
catch (e) {
  console.log(e.message); // node n33 not found
}
```

**.find(value)** 

returns a linkedListNode object that contains two functions:
* .getNext() returns the next linkedListNode object.
* .getValue() returns the node value.
```javascript
let n3 = linkedList.find('n3');
console.log(n3.getValue()); // n3
console.log(n3.getNext().getValue()); // n4
```

**.head()** 

returns the first linkedListNode object in the list.
```javascript
let head = linkedList.head();
console.log(head.getValue()); // n1
```

**.traverse(cb)** 

traverse the linked list and calls cb for each node
```javascript
linkedList.traverse((value) => { console.log(value); });
// n1
// n2   
// n3
// n4
```

**.remove(value)** 

remove the value's node from the list or throw an exception if value not found.
```javascript
linkedList.remove('n3');
```

**.removeFirst()** 

removes the first node in the list.
```javascript
linkedList.removeFirst(); // n1 removed
```

**.removeLast()** 

removes the last node in the list.
```javascript
linkedList.removeLast(); // n4 removed
```

**.length()** 

returns the number of nodes in the list.
```javascript
console.log(linkedList.count()); // 1
```

**.clear()** 

removes all the nodes from the list.
```javascript
linkedList.clear();
console.log(linkedList.length()); // 0	
```

## DoublyLinkedList
<img width="552" alt="dll" src="https://user-images.githubusercontent.com/6517308/35762752-19b17df4-0862-11e8-8ce3-f940d83dde51.png">

node value data type: number, string, boolean, null, undefined.

**construction**
```javascript
let dList = ds.doublyLinkedList();

// OR

let dList = ds.dll();
```

**.addFirst(value)** 

add a node with the specified value to the beginning of the list.
```javascript
dList.addFirst('n1');
```

**.addLast(value)** 

add a node with the specified value to the end of the list.
```javascript
dList.addLast('n4');
```

**.addAfter(value, newValue)** 

add a node with newValue after an existing value's node, throws exception if value doesnt exist.
```javascript
try {
  dList.addAfter('n1', 'n2');
  dList.addAfter('n33', 'n2');
}
catch (e) {
  console.log(e.message); // node n33 not found
}
```

**.addBefore(value, newValue)** 

add a node with newValue before an existing value's node, throws exception if value doesnt exist.
```javascript
try {
  dList.addBefore('n4', 'n3');
  dList.addBefore('n33', 'n2');
}
catch (e) {
  console.log(e.message); // node n33 not found
}
```

**.find(value)** 

returns a doublyLinkedListNode object that contains three functions:

* .getNext() returns the next doublyLinkedListNode object.
* .getPrev() returns the previous doublyLinkedListNode object.
* .getValue() returns the node's value.
```javascript
let n3 = dList.find('n3');
console.log(n3.getValue()); // n3
console.log(n3.getNext().getValue()); // n4
console.log(n3.getPrev().getValue()); // n2
```

**.head()** 

returns the first doublyLinkedListNode object in the list.
```javascript
let head = dList.head();
console.log(head.getValue()); // n1
```

**.tail()** 

returns the last doublyLinkedListNode object in the list.
```javascript
let tail = dList.tail();
console.log(tail.getValue()); // n4
```

**.removeFirst()** 

removes the first node from the list.
```javascript
dList.removeFirst();
```

**.removeLast()** 

removes the last node from the list.
```javascript
dList.removeLast();
```

**.remove(value)** 

remove the value's node from the list.
```javascript
dList.remove('n2');
```

**.length()** 

returns the number of nodes in the list.
```javascript
let length = dList.length();
```

**.clear()** 

clears all the nodes from the list.
```javascript
dList.clear();
console.log(dList.length()); // 0  
```

## BinarySearchTree

<img width="413" alt="bst" src="https://user-images.githubusercontent.com/6517308/35762621-74a72626-085f-11e8-8934-ef6facdd6e10.png">

node value data type: string, number

**construction**
```javascript
let bst = ds.binarySearchTree();

// OR

let bst = ds.bst();
```

**.insert(value)** 

inserts a node with the specified value into the tree.
```javascript
bst.insert(50);
bst.insert(80);
bst.insert(30);
bst.insert(90);
bst.insert(60);
bst.insert(40);
bst.insert(20);
```

**.root()** 

returns the root node
```javascript
console.log(bst.root().getValue()); // 90
```

**.min()** 

returns the min value binaryNode object (most left node value).
```javascript
console.log(bst.min().getValue()); // 20
```

**.max()** 

returns the max value binaryNode object (most right node value).
```javascript
console.log(bst.max().getValue()); // 90
```

**.count()** 

returns number of nodes in the tree
```javascript
console.log(bst.count()); // 7
```

**.find(value)** 

returns a binaryNode object that contains three functions:
* .getRight() returns the right child binaryNode node object.
* .getLeft() returns the left child binaryNode node object.
* .getValue() returns the node value.
```javascript
let n = bst.find(30);
console.log(n.getValue()); // 30
console.log(n.getRight().getValue()); // 40
console.log(n.getLeft().getValue()); // 20
```

**.traverse(cb, order)** 

traverse the tree in the defined order and apply a callback on each node.

* order: 'inOrder' OR 'preOrder' OR 'postOrder'. default is 'inOrder'

```javascript
// inOrder traverse
bst.traverse((value) => { console.log(value); });

// 20
// 30
// 40
// 50
// 60
// 80
// 90

// preOrder traverse
bst.traverse((value) => { console.log(value) }, 'preOrder');

// 50
// 30
// 20
// 40
// 80
// 60
// 90

// postOrder traverse
bst.traverse((value) => { console.log(value) }, 'postOrder');

// 20
// 40
// 30
// 60
// 90
// 80
// 50
```

**.remove(value)** 

removes a value's node (if exists) from the tree.
```javascript
bst.remove(30);
let n50 = bst.find(50);
let n40 = bst.find(40);
console.log(n50.getLeft().getValue()); // 40
console.log(n40.getLeft().getValue()); // 20
```

**.clear()** 

clears all the nodes from the tree.
```javascript
bst.clear();
console.log(bst.count()); // 0
```

## AvlTree
<img width="1387" alt="avltree" src="https://user-images.githubusercontent.com/6517308/37691467-e9c7db8a-2c77-11e8-844a-c6b6c0ff93dd.png">

**construction**
```javascript
let avlTree = ds.avlTree();

// OR

let avlTree = ds.avl();
```

Implements the same exact [BinarySearchTree](#binarysearchtree) interface except that it maintains the tree balance automatically upon insertion and deletion.

## MinHeap
<img width="448" alt="minheap" src="https://user-images.githubusercontent.com/6517308/36940955-78f30c82-1f15-11e8-9ed1-6d9414c243c4.png">

node value data type: string, number

**construction**
```javascript
let minHeap = ds.minHeap();
```

**.insert(value)** 

inserts a value into the heap.
```javascript
minHeap.insert(50);
minHeap.insert(80);
minHeap.insert(30);
minHeap.insert(90);
minHeap.insert(60);
minHeap.insert(40);
minHeap.insert(20);
```

**.size()** 

retrieves the size of the heap
```javascript
console.log(minHeap.size()); // 7
```

**.min()** 

retrieves the min value in the heap
```javascript
console.log(minHeap.min()); // 20
```

**.extractMin()** 

retrieves and remove the min value from the heap
```javascript
console.log(minHeap.extractMin()); // 20
console.log(minHeap.min()); // 30
```

**.remove(index)** 

removes a value at a specific index from the heap
```javascript
minHeap.remove(3); // removed 90
console.log(minHeap.size()); // 5
```

**.clear()** 

clears the heap
```javascript
minHeap.clear();
console.log(minHeap.size()); // 0
```

## MaxHeap
<img width="463" alt="maxheap" src="https://user-images.githubusercontent.com/6517308/36940962-844a7fe8-1f15-11e8-8165-6fd62ba1914f.png">

node value data type: string, number

**construction**
```javascript
let maxHeap = ds.maxHeap();
```

**.insert(value)** 

inserts a value into the heap.
```javascript
maxHeap.insert(50);
maxHeap.insert(80);
maxHeap.insert(30);
maxHeap.insert(90);
maxHeap.insert(60);
maxHeap.insert(40);
maxHeap.insert(20);
```

**.max()** 

retrieves the max value in the heap
```javascript
console.log(maxHeap.max()); // 90
```

**.extractMax()** 

retrieves and remove the max value from the heap
```javascript
console.log(maxHeap.extractMax()); // 90
console.log(maxHeap.max()); // 80
```

**.remove(index)** 

removes a value at a specific index from the heap
```javascript
maxHeap.remove(3); // removed 50
console.log(maxHeap.size()); // 5
```

**.clear()** 

clears the heap
```javascript
maxHeap.clear();
console.log(maxHeap.size()); // 0
```

## Trie
<img width="571" alt="trie" src="https://user-images.githubusercontent.com/6517308/37265925-58612982-257c-11e8-80b7-de6bddb25143.png">

**construction**
```javascript
let trie = ds.trie();
```

**.insert(word)** 

inserts a word into the trie

```javascript
trie.insert('hi');
trie.insert('hit');
trie.insert('hide');
trie.insert('hello');
trie.insert('sand');
trie.insert('safe');
trie.insert('noun');
trie.insert('name');
```

**.search(word)** 

searches a word in the trie and returns the last char node

returned node is of the type TrieNode or null if word is not found

```javascript
let node1 = trie.search('hi');

console.log(node1.getChar()); // i

let node2 = trie.search('abc');

console.log(node2); // null
```

**.traverse(cb)** 

traverse the trie and calls cb for each found word

```javascript
trie.traverse((word) => console.log(word));

// hi
// hit
// hide
// hello
// sand
// safe
// noun
// name
```

**.remove(word)** 

removes a word from the trie

```javascript
trie.remove('hit');

console.log(trie.search('hit')); // null
```

**.countNodes()**

gets the count of the characters nodes in the trie

```javascript
console.log(trie.countNodes()); // 22
```

**.countWords()** 

gets the count of the words in the trie

```javascript
console.log(trie.countWords()); // 7
```

**.clear()** 

clears the trie

```javascript
trie.clear();
console.log(trie.countNodes()); // 1 (root node is a default)
console.log(trie.countWords()); // 0
```

## Graph
<img width="413" alt="graph" src="https://user-images.githubusercontent.com/6517308/35762771-d25ff10a-0862-11e8-9302-812a36eddb9e.png">

vertex data type: string, number, boolean, null, undefined

**construction**
```javascript
let graph = ds.graph();

// OR

let graph = ds.g();
```

**.addVertex(vertex)** 

adds a vertex to the graph.
```javascript
graph.addVertex('test');
```

**.hasVertex(vertex)**

checks if the graph has a vertex
```javascript
let check = graph.hasVertex('test'); // true
```

**.removeVertex(vertex)**

checks if the graph has a vertex
```javascript
graph.removeVertex('test');
graph.hasVertex('test'); // false
```

**.addEdge(v1, v2, weight)** 

adds a weighted edge between two existing vertices.
```javascript
graph.addVertex('v1');
graph.addVertex('v2');
graph.addEdge('v1', 'v2', 3)
```

**.hasEdge(v1, v2)**

checks if the graph has an edge between two exsiting vertices
```javascript
let check = graph.hasEdge('v1', 'v2'); // true
```

**.getWeight(v1, v2)** 

returns the weight between two vertices
```javascript
let w = graph.getWeight('v1', 'v2'); // 3
```

**.removeEdge(v1, v2)**

removes an existing edge in the graph
```javascript
graph.removeEdge('v1', 'v2');
graph.hasEdge('v1', 'v2'); // false
graph.hasEdge('v2', 'v1'); // false
```

**.addPath(v1, v2, weight)** 

adds an edge between two vertices and creates the vertices if one or both dont exist.
```javascript
// building the diagram graph
graph.addPath('v1', 'v2', 2);
graph.addPath('v2', 'v3', 3);
graph.addPath('v1', 'v3', 6);
graph.addPath('v2', 'v4', 1);
graph.addPath('v4', 'v3', 1);
graph.addPath('v4', 'v5', 4);
graph.addPath('v3', 'v5', 2);
```

**.countVertices()** 

returns the number of vertices in the graph.
```javascript
let count = graph.countVertices(); // 5
```

**.traverse(vertex, cb, type)** 

traverse the graph.
* type: 'bfs' OR 'dfs' (breadth-first search or depth-first search). default is 'bfs'

``` javascript
// bfs traverse
graph.traverse('v5', (v) => console.log(v), 'bfs');
// v5
// v4
// v3
// v2
// v1

// dfs traverse
graph.traverse('v1', (v) => console.log(v), 'dfs');
// v1
// v2
// v3
// v4
// v5
```

**.findShortestPath(v1, v2)**

find all possible shortests paths between two vertices in the graph
``` javascript
let shortestPath = graph.findShortestPath('v1', 'v5'); // [ ['v1', 'v2', 'v4', 'v3', 'v5'] ]
```

**.clear()** 

clears all the nodes from the graph.
```javascript
graph.clear();
```

## DirectedGraph
<img width="424" alt="dgraph" src="https://user-images.githubusercontent.com/6517308/35762789-3f49bc06-0863-11e8-85ee-105b352b1aad.png">

**construction**
``` javascript
let dgraph = ds.directedGraph();

// OR

let dgraph = ds.dg();
```

**.addVertex(vertex)** 

adds a vertex to the graph.
```javascript
dgraph.addVertex('test');
```

**.hasVertex(vertex)**

checks if the graph has a vertex
```javascript
let check = dgraph.hasVertex('test'); // true
```

**.removeVertex(vertex)**

checks if the graph has a vertex
```javascript
dgraph.removeVertex('test');
dgraph.hasVertex('test'); // false
```

**.addEdge(v1, v2, weight)**

adds a weighted direction from v1 to v2
```javascript
dgraph.addVertex('v1');
dgraph.addVertex('v2');
dgraph.addEdge('v1', 'v2', 3);
```

**.hasEdge(v1, v2)**

checks if the graph has a direction from v1 to v2
```javascript
let check1 = dgraph.hasEdge('v1', 'v2'); // true
let check2 = dgraph.hasEdge('v2', 'v1'); // false
```

**.getWeight(v1, v2)** 

returns the weight from v1 to v2
```javascript
let w = dgraph.getWeight('v1', 'v2'); // 3
```

**.removeEdge(v1, v2)**

removes the direction from v1 to v2
```javascript
dgraph.removeEdge('v1', 'v2');
dgraph.hasEdge('v1', 'v2'); // false
```

**.addPath(v1, v2, weight)**

adds a direction from v1 to v2 and creates both vertices if not exist
```javascript
// build the diagram dgraph
dgraph.addPath('v1', 'v2', 2);
dgraph.addPath('v1', 'v3', 3);
dgraph.addPath('v1', 'v4', 1);
dgraph.addPath('v2', 'v4', 1);
dgraph.addPath('v3', 'v5', 2);
dgraph.addPath('v4', 'v3', 1);
dgraph.addPath('v4', 'v5', 4);
```

**.countVertices()** 

returns the number of vertices in the graph.
```javascript
let count = dgraph.countVertices(); // 5
```

**.traverse(vertex, cb, type)** 

traverse the graph.
* type: 'bfs' OR 'dfs' (breadth-first search or depth-first search). default is 'bfs'
``` javascript
// bfs traverse
dgraph.traverse('v1', (v) => console.log(v), 'bfs');
// v1
// v2
// v3
// v4
// v5

// dfs traverse
dgraph.traverse('v5', (v) => console.log(v), 'dfs');
// v1
// v2
// v4
// v3
// v5
```

**.findShortestPath(v1, v2)**

find all possible shortests paths between two vertices in the graph
``` javascript
let shortestPath = dgraph.findShortestPath('v1', 'v5'); // [ ['v1', 'v4', 'v3', 'v5'] ]
```

**.clear()** 

clears all the nodes from the graph.
```javascript
dgraph.clear();
```

***

## Contribution
Fork and then clone the repo:
```
git clone https://github.com/[your-username]/datastructures-js
```
Install grunt-cli
```
npm install -g grunt-cli
```
install dependencies
```
npm install
```
Create a branch from development branch with a name indicatig the fix/feature
```
git checkout -b fix-branch
```
run all tasks
```
grunt build
```
to run lint only
```
grunt lint
```
to run tests only
```
grunt test
```
to run test coverage only
```
grunt coverage
```

when everything is OK, push the changes to the same branch
```
git push origin fix-branch
```
and create a pull request from **development** branch.

Changes are reviewed and merged if all is ok.

Thanks.

## License
The MIT License. Full License is [here](https://github.com/eyas-ranjous/datastructures-js/blob/master/LICENSE)
