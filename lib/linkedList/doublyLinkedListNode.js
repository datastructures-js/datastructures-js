'use strict';

const LinkedListNode = require('./linkedListNode');

class DoublyLinkedListNode extends LinkedListNode {

    constructor(value, next, prev) {
        super(value, next);
        this.setPrev(prev);
    }

    /**
     * @public
     * @param {DoubleLinkedListNode} next
     */
    setNext(next) {
        if (next instanceof DoublyLinkedListNode) {
            this.next = next;
        }
        else {
            this.next = null;
        }
    }

    /**
     * @public
     * @param {DoubleLinkedListNode} prev
     */
    setPrev(prev) {
        if (prev instanceof DoublyLinkedListNode) {
            this.prev = prev;
        }
        else {
            this.prev = null;
        }
    }


    /**
     * @public
     * @return {DoublyLinkedListNode}
     */
    getPrev() {
        return this.prev;
    }

}

module.exports = DoublyLinkedListNode;