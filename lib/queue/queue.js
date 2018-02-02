'use strict';

class Queue {

    constructor() {
        this.init();
    }

    /**
     * @protected
     * init the queue properties
     */
    init() {
        this.elements = [];
        this.offset = 0;
    }

    /**
     * @protected
     * remove dequeued elements when reaching half the queue
     */    
    removeDequeued() {
        if (this.offset * 2 >= this.length()) {
            this.elements  = this.elements.slice(this.offset);
            this.offset = 0;
        }
    }

    /**
     * @protected
     * retrieves the front element in the queue
     * @returns {object}
     */
    getFrontElement() {
        return this.elements[this.offset];
    }

    /**
     * @protected
     * retrieves the back element in the queue
     * @returns {object}
     */
    getBackElement() {
        return this.elements[this.elements.length - 1];
    }

    /**
     * @public
     * checks if the queue is empty
     * @returns {boolean}
     */
    isEmpty() {
        return this.length() === 0;
    }

    /**
     * @public
     * the length of the queue
     * @returns {number}
     */
    length() {
        return this.elements.length - this.offset;
    }

    /**
     * @public
     * push an element to the end of the queue
     * @param {object} element
     */
    enqueue(element) {
        this.elements.push(element);
    }

    /**
     * @public
     * dequeues an element from the beginning of the queue
     * only remove dequeued elements when reaching half of the queue
     * @returns {object}
     */
    dequeue() {
        if (!this.isEmpty()) {
            let first = this.getFrontElement();
            this.offset++;
            this.removeDequeued();
            return first;
        }
        else {
            return null;
        }
    }

    /**
     * @public
     * checks the element at the front of the queue
     * @returns {object}
     */
    front() {
        if (!this.isEmpty()) {
            return this.getFrontElement();
        }
        else {
            return null;
        }
    }

    /**
     * @public
     * checks the element at the back of the queue
     * @returns {object}
     */
    back() {
        if (!this.isEmpty()) {
            return this.getBackElement();
        }
        else {
            return null;
        }
    }

    /**
     * @public
     * clears the queue
     */
    clear() {
        this.init();
    }
}

module.exports = Queue;