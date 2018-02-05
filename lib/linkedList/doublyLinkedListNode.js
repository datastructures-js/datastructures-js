'use strict';

const LinkedListNode = require('./linkedListNode');

class DoublyLinkedListNode extends LinkedListNode {

    constructor(value, next, prev) {
        super(value, next);
        this.setPrev(prev);
    }

    /**
     * @public
     * @param {DoubleLinkedListNode} node
     */
    setNext(node) {
        this.setNode(node, 'next');
    }

    /**
     * @public
     * @param {DoubleLinkedListNode} node
     */
    setPrev(node) {
        this.setNode(node, 'prev');
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