'use strict';

const LinkedListNode = require('./linkedListNode');

class LinkedList {

    constructor() {
        this.init();
    }

    /**
     * @protected
     * initialize the linkedlist properties
     */
    init() {
        this.headNode = null;
        this.count = 0;
    }

    /**
     * @public
     * length of the linkedList
     * @returns {number}
     */
    length() {
        return this.count;
    }

    /**
     * @public
     * retrieves the head of the linkedList
     * @returns {LinkedListNode}
     */
    head() {
        return this.headNode;
    }

    /**
     * @public
     * finds a node in the linkedList by a given value
     * @param {(string|number|boolean|null|undefined)} value
     * @param {LinkedListNode} [current=head] memoisez current node
     * @returns {LinkedListNode}
     */
    find(value, current = this.headNode) {
        if (current === null) {
            return null;
        }
        else if (current.getValue() === value) {
            return current;
        }
        else {
            return this.find(value, current.getNext());
        }
    }

    /**
     * @public
     * adds a new node to the beginning of the linkedList
     * @param {(string|number|boolean|null|undefined)} value
     */
    addFirst(value) {
        if (this.headNode === null) {
            this.headNode = new LinkedListNode(value);
        }
        else {
            this.headNode = new LinkedListNode(value, this.headNode);
        }
        this.count++;
    }

    /**
     * @public
     * adds a new node to the end of the linkedList
     * @param {(string|number|boolean|null|undefined)} value
     * @param {LinkedListNode} [lastNode=head] memoizes last node
     */
    addLast(value, lastNode = this.headNode) {
        if (lastNode === null) {
            this.headNode = new LinkedListNode(value);
            this.count++;
        }
        else if (lastNode.getNext() === null) {
            lastNode.setNext(new LinkedListNode(value));
            this.count++;
        }
        else {
            this.addLast(value, lastNode.getNext());
        }
    }

    /**
     * @public
     * adds a new node after an existing node
     * @param {(string|number|boolean|null|undefined)} value - existing node value
     * @param {(string|number|boolean|null|undefined)} newValue - new node value
     * @param {LinkedListNode} [current=head] - memoizes current node
     */
    addAfter(value, newValue, current = this.headNode) {
        if (current === null) {
            throw new Error('node ' + value + ' not found');
        }
        else if (current.getValue() === value) {
            let newNode = new LinkedListNode(newValue);
            newNode.setNext(current.getNext());
            current.setNext(newNode);
            this.count++;
        }
        else {
            this.addAfter(value, newValue, current.getNext());
        }
    }

    /**
     * @public
     * adds a new node before an existing node
     * @param {(string|number|boolean|null|undefined)} value - existing node value
     * @param {(string|number|boolean|null|undefined)} newValue - new node value
     * @param {LinkedListNode} [prev=null] - memoizes previous node
     * @param {LinkedListNode} [current=head] - memoizes current node
     */
    addBefore(value, newValue, prev = null, current = this.headNode) {
        if (current === null) {
            throw new Error('node ' + value + ' not found');
        }
        else if (current.getValue() === value && prev === null) {
            this.addFirst(newValue);
        }
        else if (current.getValue() === value && prev !== null) {
            let newNode = new LinkedListNode(newValue);
            newNode.setNext(current);
            prev.setNext(newNode);
            this.count++;
        }
        else {
            this.addBefore(value, newValue, current, current.getNext());
        }
    }

    /**
     * @public
     * removes a node from the linkedlist by its value
     * @param {(string|number|boolean|null|undefined)} value
     * @param {LinkedListNode} [prev=null] - memoizes previous node
     * @param {LinkedListNode} [current=head] - memoizes current node
     */
    remove(value, prev = null, current = this.headNode) {
        if (current !== null && current.getValue() === value && prev === null) {
            this.removeFirst(value);
        }
        else if (current !== null &&  current.getValue() === value && prev !== null) {
            prev.setNext(current.getNext());
            this.count--;
        }
        else if (current !== null) {
            this.remove(value, current, current.getNext());
        }
    }

    /**
     * @public
     * removes the first node
     */
    removeFirst() {
        if (this.headNode !== null) {
            if (this.headNode.getNext() === null ) {
                this.headNode = null;
            }
            else {
                this.headNode = this.headNode.getNext();
            }
            this.count--;
        }
    }

    /**
     * @public
     * removes the last node
     * @param {LinkedListNode} [prev=null] - memoizes previous node
     * @param {LinkedListNode} [current=head] - memoizes current node
     */
    removeLast(prev = null, current = this.headNode) {
        if (current !== null && current.getNext() === null && prev === null) {
            this.headNode = null;
            this.count--;
        }
        else if (current !== null && current.getNext() === null && prev !== null) {
            prev.setNext(null);
            this.count--;
        }
        else if (current !== null) {
            this.removeLast(current, current.getNext());
        }
    }

    /**
     * @public
     * traverse the linkedlist from a starting node to the end
     * @param {function} cb - called with the value of each node
     * @param {LinkedListNode} [current=head] - starting node, default is head
     */
    traverse(cb, current = this.headNode) {
        if (current !== null) {
            cb(current.getValue());
            this.traverse(cb, current.getNext());
        }
    }

    /**
     * @public
     * clears the linkedlist
     */
    clear() {
        this.init();
    }

}

module.exports = LinkedList;