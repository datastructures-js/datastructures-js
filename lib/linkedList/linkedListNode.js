'use strict';

class LinkedListNode {

    constructor(value, next) {
        this.value = value;
        this.setNext(next);
    }


    /**
     * @public
     * @param {(string|number|boolean|null|undefined)} value
     */
    setValue(value) {
        this.value = value;
    }

    /**
     * @public
     * @returns {object}
     */    
    getValue() {
        return this.value;
    }

    /**
     * @protected
     * @param {LinkedListNode} node
     * @param {string} type
     */   
    setNode(node, type) {
        if (node instanceof LinkedListNode) {
            this[type] = node;
        }
        else {
            this[type] = null;
        }
    }

    /**
     * @public
     * @param {LinkedListNode} node
     */   
    setNext(node) {
        this.setNode(node, 'next');
    }

    /**
     * @public
     * @returns {LinkedListNode}
     */   
    getNext() {
        return this.next;
    }
}

module.exports = LinkedListNode;