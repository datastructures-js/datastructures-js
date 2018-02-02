<img alt="ds_logo" width="420" src="https://user-images.githubusercontent.com/6517308/35717972-dfc67334-07a7-11e8-8678-5a15e3412084.png" />

[![build:?](https://travis-ci.org/eyas-ranjous/datastructures-js.svg?branch=master)](https://travis-ci.org/eyas-ranjous/datastructures-js) 
[![npm](https://img.shields.io/npm/v/datastructures-js.svg)](https://www.npmjs.com/package/datastructures-js)
[![npm](https://img.shields.io/npm/dm/datastructures-js.svg)](https://www.npmjs.com/packages/datastructures-js) [![npm](https://img.shields.io/badge/node-%3E=%206.0-blue.svg)](https://www.npmjs.com/package/sort-algorithms-js) [![Maintainability](https://api.codeclimate.com/v1/badges/4a335c4842eab2f83497/maintainability)](https://codeclimate.com/github/eyas-ranjous/datastructures-js/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/4a335c4842eab2f83497/test_coverage)](https://codeclimate.com/github/eyas-ranjous/datastructures-js/test_coverage)

Javascript implementation of the main data structures. Each data structure object is constructed using a factory function that holds the data structure name.

## Install
```
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
let element = stack.peek(); // test
```
**.pop()** 

pops the top element of the stack.
```javascript
let element = stack.pop(); // test
```
**.isEmpty()** 

checks if the stack is empty.
```javascript
let isEmpty = stack.isEmpty(); // true
```
**.length()** 

returns the length length of the stack.
```javascript
let length = stack.length(); // 0
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
let front = queue.front(); // 10
```
**.back()** 

returns the back element in the queue.
```javascript
let back = queue.back(); // 20
```

**.dequeue()** 

dequeues an element from the queue.
```javascript
let element = queue.dequeue(); // 10
```

**.isEmpty()** 

checks if the queue is empty.
```javascript
let isEmpty = queue.isEmpty(); // false
```
**.length()** 

returns the length of the queue
```javascript
var length = queue.length(); // 1
```

**.toArray()** 

converts the queue to an array with front starting at 0
```javascript
queue.enqueue(1);
queue.enqueue(4);
queue.enqueue(2);
let elements = queue.toArray(); // [1, 4, 2]
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
var front = pQueue.front(); // patient 1
```

**.back()** 

returns the back element in the queue.
```javascript
var back = pQueue.back(); // patient 3
```

**.dequeue()** 

dequeues the highest priority element from the queue.
```javascript
var element = pQueue.dequeue(); // patient 2
```

**.isEmpty()** 

checks if the queue is empty.
```javascript
var isEmpty = queue.isEmpty(); // false
```

**.length()** 

returns the length of the queue.
```javascript
var len = queue.length(); // 1
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
let isEmpty = set.isEmpty(); // false
```

**.contains(element)** 

checks if the set contains an element
```javascript
let contains = set.contains('C'); // true
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
let size = set.size(); // 3
```

**.union(set)** 

unions the set with another set and returns the resulting set.
```javascript
let set2 = ds.set();
set.add('A', 'E', 'F');
let unionSet = set.union(set2); // resulting set has B, D, E, F
```

**.intersect(set)** 

intersects the set with another set and returns the resulting set.
```javascript
let set2 = ds.set();
set.add('A', 'E', 'F');
// set contains A, B, D
let intersectSet = set.intersect(set2); // intersectSet contains A
```

**.diff(set)** 

returns the diff set between the set and another set.
```javascript
let set2 = ds.set();
set.add('E', 'F', 'A');
// set contains A, B, D
let diffSet = set.difference(set2); // diffSet contains B, D
```

**.isSubset(set)** 

checks if the set is a subset of another set
```javascript
let s1 = ds.set();
let s2 = ds.set();
s1.add('B', 'X', 'H');
s2.add('A', 'G', 'B', 'G', 'D');
// set has A, B, D
let d1 = set.isSubset(s1); // false
let d2 = set.isSubset(s2); // true
```

**.toArray()** 

converts the set into an array.
```javascript
let arr = set.toArray(); // ['A', 'B', 'D']
```

**.clear()** 

clears the set
```javascript
set.clear(); // set is empty
```

## LinkedList
![LinkedList](http://i.imgur.com/ZyD3HJL.jpg "LinkedList")

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
    linkedList.addBefore('n1', 'n2');
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

**.getHead()** 

returns the first linkedListNode object in the list.
```javascript
let head = linkedList.getHead();
console.log(head.getValue()); // n1
```

**.removeFirst()** 

removes the first node in the list.
```javascript
linkedList.removeFirst();
```

**.removeLast()** 

removes the last node in the list.
```javascript
linkedList.removeLast();
```

**.remove(value)** 

remove the value's node from the list or throw an exception if value not found.
```javascript
try {
    linkedList.remove('n2');
    linkedList.remove('n33');
}
catch (e) {
    console.log(e.message); // node n33 not found
}
```

**.traverse(cb)** 

traverse the linked list and calls cb for each node
```javascript
linkedList.traverse((value) => {
    console.log(value);
});
```

**.length()** 

returns the number of nodes in the list.
```javascript
let length = linkedList.count();
```

**.clear()** 

removes all the nodes from the list.
```javascript
linkedList.clear();
console.log(linkedList.length()); // 0	
```

## DoublyLinkedList
![DoublyLinkedList](https://user-images.githubusercontent.com/6517308/35724467-6f2bd49a-07c3-11e8-9d43-616bd0764cfe.jpeg)

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

**.getHead()** 

returns the first doublyLinkedListNode object in the list.
```javascript
let head = dList.getHead();
console.log(head.getValue()); // n1
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

remove the value's node from the list or throw an exception if value not found.
```javascript
dList.remove('n2');
```

**.length()** 

returns the number of nodes in the list.
```javascript
let length = dList.count();
```

**.clear()** 

clears all the nodes from the list.
```javascript
dList.clear();
```

## BinarySearchTree
![BinarySearchTree](https://user-images.githubusercontent.com/6517308/35724526-a7b46f66-07c3-11e8-93e7-170c8040846e.jpg)

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

**.getRoot()** 

returns the root node
```javascript
let root = bst.getRoot().getValue(); // 90
```

**.getMin()** 

returns the min value binaryNode object (most left node value).
```javascript
let min = bst.getMin().getValue(); // 20
```

**.getMax()** 

returns the max value binaryNode object (most right node value).
```javascript
let max = bst.getMax().getValue(); // 90
```

**.count()** 

returns number of nodes in the tree
```javascript
let count = bst.count(); // 7
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
bst.traverse((value) => {
    console.log(value);
});

// 20
// 30
// 40
// 50
// 60
// 80
// 90

// preOrder traverse
bst.traverse((value) => {
    console.log(value);
}, 'preOrder');

// 50
// 30
// 20
// 40
// 80
// 60
// 90

// postOrder traverse
bst.traverse((value) => {
    console.log(value);
}, 'postOrder');

// 20
// 40
// 30
// 60
// 90
// 80
// 50
```

**.delete(value)** 

removes a value's node (if exists) from the tree.
```javascript
bst.remove(30);
let n50 = bst.find(50);
let n40 = bst.find(40);
console.log(n50.getLeft().getValue()); // 40
console.log(n40.getLeft().getValue()); // 20
```
## Graph
<img width="513" alt="graph" src="https://user-images.githubusercontent.com/6517308/35726652-35d54d7c-07cb-11e8-9d4e-998fb9c994c1.png">

vertex data type: string, number

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

**.removeEdge(v1, v2)**

removes an existing edge in the graph
```javascript
graph.removeEdge('v1', 'v2');
graph.hasEdge('v1', 'v2'); // false
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

**.getWeight(v1, v2)** 

returns the weight between two vertices
```javascript
let w = graph.getWeight('v1', 'v2'); // 2
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
let vertices = [];
graph.traverse('v1', (v) => {
    vertices.push(v);
});
console.log(vertices); // [ 'v1', 'v2', 'v3', 'v4', 'v5' ]

// dfs traverse
vertices = [];
graph.traverse('v1', (v) => {
    vertices.push(v);
}, 'dfs');
console.log(vertices); // [ 'v5', 'v4', 'v3', 'v2', 'v1' ]
```

**findShortestPath(v1, v2)**
find all possible shortests paths between two vertices in the graph
``` javascript
let shortestPath = graph.findShortestPath('v1', 'v5'); // [ ['v1', 'v2', 'v4', 'v3', 'v5'] ]
```

## DirectedGraph
<img width="496" alt="dgraph" src="https://user-images.githubusercontent.com/6517308/35726809-c5ff0aaa-07cb-11e8-8e4b-a0e337d0c088.png">

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
Create a branch with a name indicatig the fix/feature
```
git checkout -b fix-branch
```
run all tasks
```
grunt
```
to run build only
```
grunt build
```
to run tests only
```
grunt test
```
to run test coverage only
```
grunt test-coverage
```

when everything is OK, push the changes to the same branch
```
git push origin fix-branch
```
and create a pull request.

Changes are reviewed and merged if all is ok.

Thanks.

## License
The MIT License. Full License is [here](https://github.com/eyas-ranjous/datastructures-js/blob/master/LICENSE)
