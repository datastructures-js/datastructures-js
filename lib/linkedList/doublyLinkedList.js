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
        this.tail = null;
    }

    /**
     * @public
     * adds a new node to the beginning of the doublyLinkedList
     * @param {(string|number|boolean|null|undefined)} value
     */
    addFirst(value) {
        if (this.head === null) {
            this.head = new DoublyLinkedListNode(value, null, null);
        }
        else {
            this.head.setPrev(new DoublyLinkedListNode(value, this.head, null));
            this.head = this.head.getPrev();
            if (this.tail === null) {
                this.tail = this.head.getNext();
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
        if (this.head === null) {
            this.head = new DoublyLinkedListNode(value, null, null);
        }
        else if (this.tail === null) {
            this.head.setNext(new DoublyLinkedListNode(value, null, this.head));
        }
        else {
            this.tail.setNext(new DoublyLinkedListNode(value, null, this.tail));
            this.tail = this.tail.getNext();
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
        let valueNode = this.find(value);
        if (valueNode === null) {
            throw new Error('node ' + value + ' not found');
        }
        else if (valueNode === this.tail || 
            (valueNode === this.head && this.tail === null)) {
            this.addLast(newValue);
        }
        else {
            let newValueNode = new DoublyLinkedListNode(newValue, valueNode.getNext(), valueNode);
            valueNode.getNext().setPrev(newValueNode);
            valueNode.setNext(newValueNode);
        }
        this.count++;
    }

    /**
     * @public
     * adds a new node before an existing node
     * @param {(string|number|boolean|null|undefined)} value - existing node value
     * @param {(string|number|boolean|null|undefined)} newValue - new node value
     */    
    addBefore(value, newValue) {
        let valueNode = this.find(value);
        if (valueNode === null) {
            throw new Error('node ' + value + ' not found');
        }
        else if (valueNode === this.head) {
            this.addFirst(newValue);
        }
        else {
            let newValueNode = new DoublyLinkedListNode(newValue, valueNode, valueNode.getPrev());
            valueNode.getPrev().setNext(newValueNode);
            valueNode.setPrev(newValueNode);
            this.count++;
        }
    }

    /**
     * @public
     * removes the first node
     */
    removeFirst() {
        if (this.head !== null) {
            if (this.tail === null) {
                this.head = null;
            }
            else {
                this.head = this.head.getNext();
                this.head.setPrev(null);
                if (this.head.getNext() === null) {
                    this.tail = null;
                }
            }
        }
        this.count--;
    }

    /**
     * @public
     * removes the last node
     */
    removeLast() {
        if (this.head !== null) {
            if (this.tail === null) {
                this.head = null;
            }
            else {
                this.tail = this.tail.getPrev();
                this.tail.setNext(null);
                if (this.tail.getPrev() === null) {
                    this.head = this.tail;
                    this.tail = null;
                }
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
        let valueNode = this.find(value);
        if (valueNode === null) {
            throw new Error('node ' + value + ' not found');
        }
        else if (valueNode === this.head) {
            this.removeFirst();
        }
        else if (valueNode === this.tail) {
            this.removeLast();
        }
        else {
            valueNode.getPrev().setNext(valueNode.getNext());
            valueNode.getNext().setPrev(valueNode.getPrev());
            valueNode.setPrev(null);
            valueNode.setNext(null);
        }
        this.count--;
    }

    /**
     * @public
     * traverse the doublyLinkedList from the end to start
     * @param {function} cb - called with the value of each node
     * @param {LinkedListNode} [current=tail] - optional starting node
     */
    traverseBackward(cb, current = this.tail) {
        if (current !== null) {
            cb(current.getValue());
            this.traverseBackward(cb, current.getPrev());
        }
    }

}

module.exports = DoublyLinkedList;