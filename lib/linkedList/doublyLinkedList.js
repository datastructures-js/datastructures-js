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
            this.headNode = new DoublyLinkedListNode(value, null, null);
        }
        else {
            this.headNode.setPrev(new DoublyLinkedListNode(value, this.headNode, null));
            this.headNode = this.headNode.getPrev();
            if (this.tailNode === null) {
                this.tailNode = this.headNode.getNext();
            }
        }
        this.count++;
    }

    /**
     * @public
     * adds a new node to the end of the doublyLinkedList
     * @param {(string|number|boolean|null|undefined)} value
     */
    addLast(value) {
        if (this.headNode === null) {
            this.headNode = new DoublyLinkedListNode(value, null, null);
        }
        else if (this.tailNode === null) {
            this.tailNode = new DoublyLinkedListNode(value, null, this.headNode);
            this.headNode.setNext(this.tailNode);
        }
        else {
            this.tailNode.setNext(new DoublyLinkedListNode(value, null, this.tailNode));
            this.tailNode = this.tailNode.getNext();
        }
        this.count++;
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
        else if (node === this.tailNode || 
            (node === this.headNode && this.tailNode === null)) {
            this.addLast(newValue);
            this.count++;
        }
        else {
            let newNode = new DoublyLinkedListNode(newValue, node.getNext(), node);
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
            node.getPrev().setNext(newNode);
            node.setPrev(newNode);
            this.count++;
        }
    }

    /**
     * @public
     * removes the first node
     */
    removeFirst() {
        if (this.headNode !== null && this.tailNode === null) {
            this.headNode = null;
            this.count--;
        }
        else if (this.headNode !== null && this.tailNode !== null) {
            this.headNode = this.headNode.getNext();
            this.headNode.setPrev(null);
            if (this.headNode.getNext() === null) {
                this.tailNode = null;
            }
            this.count--;
        }
    }

    /**
     * @public
     * removes the last node
     */
    removeLast() {
        if (this.headNode !== null && this.tailNode === null) {
            this.headNode = null;
            this.count--;
        }
        else if (this.headNode !== null && this.tailNode !== null) {
            this.tailNode = this.tailNode.getPrev();
            this.tailNode.setNext(null);
            if (this.tailNode.getPrev() === null) {
                this.headNode = this.tailNode;
                this.tailNode = null;
            }
            this.count--;
        }
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