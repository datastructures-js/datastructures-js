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
     * @public
     * @param {LinkedListNode} next
     */   
    setNext(next) {
        if (next instanceof LinkedListNode) {
            this.next = next;
        }
        else {
            this.next = null;
        }
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