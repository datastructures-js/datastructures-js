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
        this.head = null;
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
    getHead() {
        return this.head;
    }

    /**
     * @public
     * finds a node in the linkedList by a given value
     * @param {(string|number|boolean|null|undefined)} value
     * @param {LinkedListNode} [current=head] memoisez current node
     * @returns {LinkedListNode}
     */
    find(value, current = this.head) {
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
        if (this.head === null) {
            this.head = new LinkedListNode(value);
        }
        else {
            this.head = new LinkedListNode(value, this.head);
        }
        this.count++;
    }

    /**
     * @public
     * adds a new node to the end of the linkedList
     * @param {(string|number|boolean|null|undefined)} value
     * @param {LinkedListNode} [lastNode=head] memoizes last node
     */
    addLast(value, lastNode = this.head) {
        if (lastNode === null) {
            this.head = new LinkedListNode(value);
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
     */
    addAfter(value, newValue) {
        let valueNode = this.find(value);
        if (valueNode === null) {
            throw new Error('node ' + value + ' not found');
        }
        else {
            let newValueNode = new LinkedListNode(newValue);
            if (valueNode.getNext() !== null) {
                newValueNode.setNext(valueNode.getNext());
            }
            valueNode.setNext(newValueNode);
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
        let valueNode = this.find(value);
        if (valueNode === null) {
            throw new Error('node ' + value + ' not found');
        }
        else if (valueNode === this.head) {
            this.addFirst(newValue);
        }
        else {
            let current = this.head;
            while (current.getNext() !== null) {
                if (current.getNext() === valueNode) {
                    let newValueNode = new LinkedListNode(newValue);
                    newValueNode.setNext(valueNode);
                    current.setNext(newValueNode);
                    this.count++;
                    break;
                }
            }
        }
    }

    /**
     * @public
     * removes a node from the linkedlist by its value
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
        else {
            let current = this.head;
            while (current.getNext() !== null) {
                if (current.getNext() === valueNode) {
                    current.setNext(valueNode.getNext());
                    valueNode.setNext(null);
                    break;
                }
                current = current.getNext();
            }
            this.count--;
        }
    }

    /**
     * @public
     * removes the first node
     */
    removeFirst() {
        if (this.head !== null) {
            if (this.head.getNext() === null ) {
                this.head = null;
            }
            else {
                this.head = this.head.getNext();
            }
            this.count--;
        }
    }

    /**
     * @public
     * removes the last node
     */
    removeLast() {
        if (this.head !== null) {
            if (this.head.getNext() === null) {
                this.head = null;
            }
            else {
                let current = this.head;
                while (current.getNext() !== null) {
                    if (current.getNext().getNext() === null) {
                        current.setNext(null);
                        break;
                    }
                    else {
                        current = current.getNext();
                    }
                }
                this.count--;
            }
        }
    }

    /**
     * @public
     * traverse the linkedlist from a starting node to the end
     * @param {function} cb - called with the value of each node
     * @param {LinkedListNode} [current=head] - starting node, default is head
     */
    traverse(cb, current = this.head) {
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