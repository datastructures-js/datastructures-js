# datastructures-js
[![build:?](https://travis-ci.org/eyas-ranjous/datastructures-js.svg?branch=master)](https://travis-ci.org/eyas-ranjous/datastructures-js) [![npm](https://img.shields.io/npm/v/datastructures-js.svg)](https://www.npmjs.com/package/datastructures-js) [![Code Climate](https://codeclimate.com/repos/557e16c66956806a3105503a/badges/f0ca33a131f4df037533/gpa.svg)](https://codeclimate.com/repos/557e16c66956806a3105503a/feed)

Javascript implementation of the main data structures. Each data structure is represented by a function that returns an object with the data structure operations. All the data structures are well tested.

## Contents
- [Install](#install)
- [Usage](#usage)

Implemented Data Structures
- [Stack](#stack)
- [Queue](#queue)
- [PriorityQueue](#priorityqueue)
- [Set](#set)
- [LinkedList](#linkedlist)
- [DoublyLinkedList](#doublylinkedlist)
- [HashTable](#hashtable)
- [BinarySearchTree](#binarysearchtree)
- [DirectedGraph](#directedgraph)

- [Contribution](#contribution)
- [License](#license)

## Install
```
npm install datastructures-js
```

## Usage
```javascript
var ds = require('datastructures-js');
```


## Implemented Data Structures:

## Stack
elements data type: object, number, string, boolean or null
```javascript
var stack = ds.stack();
```
**.push(element)** push an element to the stack
```javascript
stack.push('test');
```
**.length()** returns the number of elements in the stack
```javascript
var len = stack.length(); // 1
```
**.peek()** returns the top element in the stack or null if the stack is empty
```javascript
var element = stack.peek(); // test
```
**.pop()** returns and removes the top element in the stack or null if the stack is empty.
```javascript
var element = stack.pop(); // test
console.log(stack.peek()); // null
```

## Queue
elements data type: object, number, string, boolean or null
```javascript
var queue = ds.queue();
```
**.enqueue(element)** enqueues an element in the queue
```javascript
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
```
**.front()** returns the front element in queue or null if queue is empty
```javascript
var f = queue.front(); // 10
```
**.back()** returns the back element in queue or null if queue is empty
```javascript
var b = queue.back(); // 30
```
**.isEmpty()** returns true if queue is empty or false if it has elements
```javascript
var empty = queue.isEmpty(); // false
```
**.dequeue()** returns and removes the front element in the queue
```javascript
var element = queue.dequeue();
console.log(element); // 10
console.log(queue.front()); // 20
console.log(queue.back()); // 30
```

## PriorityQueue
elements data type: object, number, string, boolean or null
```javascript
var pQueue = ds.priorityQueue();
```
**.enqueue(element, priority)** enqueues an element with a priority (int) in the queue
```javascript
pQueue.enqueue('patient 1', 2);
pQueue.enqueue('patient 2', 1); // highest priority
pQueue.enqueue('patient 3', 3);
```
**.front()** returns the front object in the queue or null if the queue is empty
```javascript
var f = pQueue.front(); // patient 1
```
**.back()** returns the back object in the queue or null if the queue is empty
```javascript
var b = pQueue.back(); // patient 3
```
**.isEmpty()** returns true if the queue is empty or false has objects
```javascript
var empty = pQueue.isEmpty(); // false
```
**.dequeue()** returns and removes the top priority object from the queue
```javascript
var e1 = pQueue.dequeue(); // patient 2
var e2 = pQueue.dequeue(); // patient 1
```


## Set
elements data type: number, string, boolean or null
```javascript
var set = ds.set();
```
**.add(element)** adds an element to the set
```javascript
set.add('A');
set.add('B');
set.add('C');
set.add('D');
```
**.isEmpty()** returns true if the set is empty or false if it has elements
```javascript
var empty = set.isEmpty(); // false
```
**.contains(element)** returns true the set contains the element, false otherwise
```javascript
var cont = set.contains('C'); // true
```
**.remove(element)** removes an element (if it exists) from the set
```javascript
set.remove('C');
console.log(set.contains('C')); // false
```
**.iterator()** returns an iterator object over the set with two functions: 

* .current() returns the current element or null if no current element.
* .next() returns true if there's a current element or false if not and increments the pointer by 1
```javascript
var iterator = set.iterator();
console.log(iterator.current()); // null
while (iterator.next()) {
	console.log(iterator.current());
}
// A
// B
// D
```
**.size()** returns the number of elements in the set
```javascript
var s = set.size(); // 3
```
**.union(s)** unions the set with another set (s) and returns the resulting set
```javascript
var s = ds.set();
s.add('A', 'E', 'F');
var unionSet = set.union(s); // union contains B, D, E, F
```
**.intersect(s)** intersects the set with another set (s) and returns the resulting set
```javascript
var s = ds.set();
s.add('A', 'E', 'F');
// set contains A, B, D
var intersectSet = set.intersect(s); // intersectSet contains A

```
**.difference(s)** returns a set containing the elements fount in set but not found in s
```javascript
var s = ds.set();
s.add('E', 'F', 'A');
// set contains A, B, D
var diffSet = set.difference(s); // diffSet contains B, D
```
**.isSubset(s)** returns true if the set is part of s, false if not
```javascript
var s1 = ds.set();
var s2 = ds.set();
s1.add('B', 'X', 'H');
s2.add('A', 'G', 'B', 'G', 'D');
// set has A, B, D
var d1 = set.isSubset(s1); // false
var d2 = set.isSubset(s2); // true
```
**.clone()** returns a cloned set
```javascript
var s = set.clone(); // s contains A, B, D
```

## LinkedList
![LinkedList](http://i.imgur.com/ZyD3HJL.jpg "LinkedList")

node element data type: number, string, boolean or null
```javascript
var linkedList = ds.linkedList();
```
**.addFirst(element)** add a node with element value to the beginning of the list
```javascript
linkedList.addFirst('n1');
```
**.addLast(element)** add a node with element value to the end of the list
```javascript
linkedList.addLast('n4');
```
**.addAfter(element, newElement)** add a new node with element value after an existing element's node, throws exception if element's node is not found in the list
```javascript
linkedList.addAfter('n1', 'n2');

try {
    linkedList.addAfter('n33', 'n2');
}
catch (e) {
    console.log(e.message); // node n33 not found
}
```
**.addBefore(element, newElement)** add an new node with element value before an existing element's node, throws exception if element's node is not found in the list
```javascript
linkedList.addBefore('n4', 'n3');
```
**.find(element)** returns a read-only node object or null if not found, the read-only node object contains two functions:

* .getNext() returns the next read-only node object or null if it's the last node.
* .getValue() returns the node value.
```javascript
var n3 = linkedList.find('n3');
console.log(n3.getValue()); // n3
console.log(n3.getNext().getValue()); // n4
```
**.findFirst()** returns the first read-only node object in the list
```javascript
var first = linkedList.findFirst();
console.log(first.getValue()); // n1
```
**.findLast()** returns the last read-only node object in the list
```javascript
var last = linkedList.findLast();
console.log(last.getValue()); // n4
```
**.findBefore(element)** returns the read-only node object before the specified element's node or null if not found
```javascript
var n2 = linkedList.findBefore('n3');
console.log(n2.getValue()); // n2
console.log(n2.getNext().getValue()); // n3
```
**.removeFirst()** removes the first node in the list
```javascript
linkedList.removeFirst();
```
**.removeLast()** removes the last node in the list
```javascript
linkedList.removeLast();
```
**.remove(element)** remove the element's node or throw an exception if element's node is not found
```javascript
linkedList.remove('n2');
```
**.length()** returns the number of nodes in the list
```javascript
var length = linkedList.length();
```
**.clear()** clears all the nodes from the list
```javascript
linkedList.clear();
console.log(linkedList.length()); // 0	
```

## DoublyLinkedList
![DoublyLinkedList](http://i.imgur.com/p7ZeBUE.jpg "DoublyLinkedList")

node element data type: number, string, boolean or null
```javascript
var dList = ds.doublyLinkedList();
```
**.addFirst(element)** add a node with element value to the beginning of the list
```javascript
dList.addFirst('n1');
```
**.addLast(element)** add a node with element value to the end of the list
```javascript
dList.addLast('n4');
```
**.addAfter(element, newElement)** add a new node with element value after an existing element's node, throws exception if element's node is not found in the list
```javascript
dList.addAfter('n1', 'n2');

try {
    dList.addAfter('n33', 'n2');
}
catch (e) {
    console.log(e.message); // node n33 not found
}
```
**.addBefore(element, newElement)** add a new element before an existing element, throws exception if element is not found in the list
```javascript
dList.addBefore('n4', 'n3');
```
**.find(element)** returns the element's read-only node object or null if not found, the read-only node object contains three functions:

* .getNext() returns the next read-only node object or null if it's the last node.
* .getPrev() returns the previous read-only node object or null if it's the first node.
* .getValue() returns the node value.
```javascript
var n3 = dList.find('n3');
console.log(n3.getValue()); // n3
console.log(n3.getNext().getValue()); // n4
console.log(n3.getPrev().getValue()); // n2
```
**.findFirst()** returns the first read-only node object in the list
```javascript
var first = dList.findFirst();
console.log(first.getValue()); // n1
```
**.findLast()** returns the last read-only node object in the list
```javascript
var last = dList.findLast();
console.log(last.getValue()); // n4
```
**.removeFirst()** removes the first node from the list
```javascript
dList.removeFirst();
```
**.removeLast()** removes the last node from the list
```javascript
dList.removeLast();
```
**.remove(element)** remove the element's node from the list or throw an exception if element's node is not found
```javascript
dList.remove('n2');
```
**.length()** returns the number of nodes in the list
```javascript
var length = dList.length();
```
**.clear()** clears all the nodes from the list
```javascript
dList.clear();
```


## HashTable
* keys data type: number, string 
* values data type: object, string, number, boolean, null
```javascript
var hashtable = ds.hashtable(3571); // length must be a primary number
// and better to be bigger enough than 31 to avoid collisions
```

**.put(key, data)** adds data to the hashtable associated with the specified key
```javascript
hashtable.put('john', 4567);
hashtable.put('samantha', 1234);
```

**.get(key)** returns the data associated with key
```javascript
var data = hashtable.get('john'); // 4567
```

**.contains(key)** returns true if the hashtable contains data associated with the key
```javascript
var hasData = hashtable.contains('john'); // true
```

**.iterator()** returns an iterator object over the hashtable with two functions: 

* .current() returns an object with key value properties or null if no current.
* .next() returns true if there's a current element or false if not and increments the pointer by 1
```javascript
var iterator = hashtable.iterator();
console.log(iterator.current()); // null
while (iterator.next()) {
    console.log(iterator.current());
}
//  {key: 'john', value: 4567}
//  {key: 'samantha', value: 1234}
```

**.remove(key)** removes key and the data associated with it
```javascript
var data = hashtable.remove('john'); // false
```

**.length()** returns the number of elements in the hashtable
```javascript
var length = hashtable.length(); // 1
```

**.getCollidedKeys()** returns array of arrays, each array element is an array of the collided keys (have the same hash)
```javascript
var ht = ds.hashtable(31);
ht.put('h', 10);
ht.put('hh', 20);
ht.put('m', 30);
ht.put('mmm', 40);
collisions = ht.getCollidedKeys(); // [['h', 'hh'], ['m', 'mmm']]

// iterator
var iterator = hashtable.iterator();
while (iterator.next()) {
    console.log(iterator.current());
}
//  {key: ['h', 'hh'], value: [10, 20]}
//  {key: ['m', 'mmm'], value: [30, 40]}
```


## BinarySearchTree
![BinarySearchTree](http://i.imgur.com/sbWTeM7.jpg "BinarySearchTree")

node value data type: string, number
```javascript
var bst = ds.binarySearchTree();
```
**.insert(element)** inserts a node with element value into the tree
```javascript
bst.insert(50);
bst.insert(80);
bst.insert(30);
bst.insert(90);
bst.insert(60);
bst.insert(40);
bst.insert(20);
```
**.getMinValue()** returns the min value in the tree (most left node value)
```javascript
var min = bst.getMinValue(); // 20
```
**.getMaxValue()** returns the max value in the tree (most right node value)
```javascript
var max = bst.getMaxValue(); // 90
```
**.find(element)** returns a read-only node object or null if not found, the read-only node object contains three functions:

* .getRight() returns the right child read-only node object or null if it has no right.
* .getLeft() returns the left child read-only node object or null if it has no left.
* .getValue() returns the node value.
```javascript
var n = bst.find(30);
console.log(n.getValue()); // 30
console.log(n.getRight().getValue()); // 40
console.log(n.getLeft().getValue()); // 20
```
**.getRoot()** returns the tree root read-only node object.
```javascript
var root = bst.getRoot();
console.log(root.getLeft().getValue()); // 30
console.log(root.getRight().getValue()); // 80
console.log(root.getValue()); // 50
```
**.remove(element)** removes an element's node from the tree
```javascript
bst.remove(30);

var n50 = bst.find(50);
var n40 = bst.find(40);
console.log(n50.getLeft().getValue()); // 40
console.log(n40.getLeft().getValue()); // 20

```
**.traverse(order, func)** traverse the tree in the defined order and apply func on each reached node.

* order: string, takes one of three values: 'inOrder', 'preOrder' or 'postOrder'
* func: a custom function that has one param: nodeVal which is passed in the traverse.
```javascript
var preOrderTravFunc = function(nodeVal) {
    console.log(nodeVal);
}
bst.traverse('inOrder', preOrderTravFunc);

// 20
// 40
// 50
// 60
// 80
// 90


var values = [];
var postOrderTravFunc = function(nodeVal) {
    values.push(nodeVal);
}
bst.traverse('postOrder', postOrderTravFunc);
console.log(values); // [20, 40, 60, 90, 80, 50]
```


## DirectedGraph
![DirectedGraph](http://i.imgur.com/zpHcAzm.jpg "DirectedGraph")

vertex data type: string, number
```javascript
var diGraph = ds.directedGraph();
```
**.addVertex(vertex)** adds a vertex to the graph
```javascript
diGraph.addVertex('v1');
diGraph.addVertex('v2');
diGraph.addVertex('v3');
diGraph.addVertex('v4');
diGraph.addVertex('v5');
```
**.hasVertex(vertex)** returns true if the graph contains the vertex or false if not
```javascript
var c1 = diGraph.hasVertex('v3'); // true
var c2 = diGraph.hasVertex('v77'); // false
```
**.countVertices()** returns the number of vertices in the graph
```javascript
var count = diGraph.countVertices(); // 5
```
**.addDirection(v1, v2, weight)** adds a direction from v1 to v2 with a weight
```javascript
diGraph.addDirection('v1', 'v2', 5);
diGraph.addDirection('v1', 'v5', 1);
diGraph.addDirection('v2', 'v4', 2);
diGraph.addDirection('v3', 'v5', 4);
diGraph.addDirection('v4', 'v1', 7);
diGraph.addDirection('v4', 'v3', 4);
diGraph.addDirection('v5', 'v4', 2);
```
**.hasDirection(v1, v2)** returns true there's a direction from v1 to v2
```javascript
var hasDi1 = diGraph.hasDirection('v3', 'v5'); // true
var hasDi2 = diGraph.hasDirection('v3', 'v1'); // false
```
**.getDirectionWeight(v1, v2)** returns direction weight between v1 & v2 or null if no direction exists.
```javascript
var weight = diGraph.getDirectionWeight('v4', 'v1'); // 7
```
**.visit(func)** visit all the vertices in the graph using the depth-first approach and apply func on the reached vertex
```javascript
var visitFunc = function(vertex) {
    console.log(vertex);
}

diGraph.visit(visitFunc);

// v1
// v2
// v4
// v3
// v5
```
**.findShortestPath(v1, v2)** returns an array of all the shortest paths between two vertices based on the sum of weights.
```javascript
var sp1 = diGraph.findShortestPath('v1', 'v3');
console.log(shortestPath);
//[['v1', ' v5', 'v4', 'v3']]

var sp2 = diGraph.findShortestPath('v4', 'v5');
console.log(shortestPath);
//[['v4', 'v1', 'v5'], ['v4', 'v3', 'v5']]
```
**.removeDirection(v1, v2)** removes an existing direction between v1 and v2
```javascript
diGraph.removeDirection('v4', 'v3');
diGraph.removeDirection('v3', 'v5');
```
**.getSeparatedVertices()** returns an array of all the vertices that are separated from the graph.
```javascript
var sepV = diGraph.getSeparatedVertices(); // ['v3']
```
**.removeVertex(v1)** removes an existing vertex and all its directions (the incoming and outgoing)
```javascript
diGraph.removeVertex('v3');
```


## Contribution
Clone the repo:
```
git clone https://github.com/eyas-ranjous/datastructures-js
```
Install grunt-cli
```
npm install -g grunt-cli
```
create a branch with a name indication the fix/feature
```
git checkout -b fix-branch
```
when you finish writing your code and tests, run build and test
```
grunt build
```

```
grunt test
```
If everything is OK then push the changes to the same branch
```
git push origin fix-branch
```
then create a pull request.

changes are review then merged if all is ok.

if you want to build individual file, install jshint.
```
npm install -g jshint
```
then run a specific test
```
jshint test/someFile.js
```

if you want to run individual tests, install mocha.
```
npm install -g mocha
```
then run a specific test
```
mocha test/someTest.spec.js
```

## License