'use strict';

const DoublyLinkedListNode = require('./doublyLinkedListNode'),
      LinkedList           = require('./linkedList');

class DoublyLinkedList extends LinkedList {

    constructor() {
        super();
        this.init();
    }

    /**
     * @private
     * initialize the doublyLinkedlist properties
     */
    init() {
        super.init();
        this.tailNode = null;
    }


    /**
     * @public
     * retrieves the tail of the doublyLinkedList
     * @returns {LinkedListNode}
     */
    tail() {
        return this.tailNode;
    }   

    /**
     * @public
     * adds a new node to the beginning of the doublyLinkedList
     * @param {(string|number|boolean|null|undefined)} value
     */
    addFirst(value) {
        if (this.headNode === null) {
            let newNode = new DoublyLinkedListNode(value, null, null);
            this.headNode = newNode;
            this.tailNode = newNode;
            this.count++;
        }
        else {
            let newNode = new DoublyLinkedListNode(value, this.headNode, null);
            this.headNode.setPrev(newNode);
            this.headNode = this.headNode.getPrev();
            this.count++;
        }
    }

    /**
     * @public
     * adds a new node to the end of the doublyLinkedList
     * @param {(string|number|boolean|null|undefined)} value
     */
    addLast(value) {
        if (this.headNode === null) {
            this.addFirst(value);
            this.count++;
        }
        else {
            let newNode = new DoublyLinkedListNode(value, null, this.tailNode);
            this.tailNode.setNext(newNode);
            this.tailNode = this.tailNode.getNext();
            this.count++;
        }
    }

    /**
     * @public
     * adds a new node after an existing node
     * @param {(string|number|boolean|null|undefined)} value - existing node value
     * @param {(string|number|boolean|null|undefined)} newValue - new node value
     */
    addAfter(value, newValue) {
        let node = this.find(value);
        if (node === null) {
            throw new Error('node ' + value + ' not found');
        }
        else if (node === this.tailNode) {
            this.addLast(newValue);
        }
        else {
            let newNode = new DoublyLinkedListNode(newValue, node.getNext(), node);
            newNode.setPrev(node);
            newNode.setNext(node.getNext());
            node.getNext().setPrev(newNode);
            node.setNext(newNode);
            this.count++;
        }
    }

    /**
     * @public
     * adds a new node before an existing node
     * @param {(string|number|boolean|null|undefined)} value - existing node value
     * @param {(string|number|boolean|null|undefined)} newValue - new node value
     */    
    addBefore(value, newValue) {
        let node = this.find(value);
        if (node === null) {
            throw new Error('node ' + value + ' not found');
        }
        else if (node === this.headNode) {
            this.addFirst(newValue);
        }
        else {
            let newNode = new DoublyLinkedListNode(newValue, node, node.getPrev());
            newNode.setNext(node);
            newNode.setPrev(node.getPrev());
            node.getPrev().setNext(newNode);
            node.setPrev(newNode);
            this.count++;
        }
    }

    /**
     * @private
     * removes an edge node
     */
    removeEdgeNode(cb) {
        if (this.headNode !== null && this.headNode.getNext() === null) {
            this.headNode = null;
            this.tailNode = null;
            this.count--;
        }
        else if (this.headNode !== null && this.headNode.getNext() !== null) {
            cb();
        }
    }

    /**
     * @public
     * removes the first node
     */
    removeFirst() {
        this.removeEdgeNode(() => {
            this.headNode = this.headNode.getNext();
            this.headNode.setPrev(null);
            this.count--;
        });
    }

    /**
     * @public
     * removes the last node
     */
    removeLast() {
        this.removeEdgeNode(() => {
            this.tailNode = this.tailNode.getPrev();
            this.tailNode.setNext(null);
            this.count--;
        });
    }

    /**
     * @public
     * removes a node from the doublyLinkedList by its value
     * @param {(string|number|boolean|null|undefined)} value
     */
    remove(value) {
        let node = this.find(value);
        if (node !== null && node === this.headNode) {
            this.removeFirst();
        }
        else if (node !== null && node === this.tailNode) {
            this.removeLast();
        }
        else if (node !== null) {
            node.getPrev().setNext(node.getNext());
            node.getNext().setPrev(node.getPrev());
            node.setPrev(null);
            node.setNext(null);
            this.count--;
        }
    }

    /**
     * @public
     * traverse the doublyLinkedList from the end to start
     * @param {function} cb - called with the value of each node
     * @param {LinkedListNode} [current=tail] - optional starting node
     */
    traverseBackward(cb, current = this.tailNode) {
        if (current !== null) {
            cb(current.getValue());
            this.traverseBackward(cb, current.getPrev());
        }
    }

}

module.exports = DoublyLinkedList;