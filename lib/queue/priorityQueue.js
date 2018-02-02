'use strict';

const Queue = require('./queue');

class PriorityQueue extends Queue {

    constructor() {
        super();
        this.init();
    }

    /**
     * @private
     * @override
     * init the priorityQueue properties
     */
    init() {
        super.init();
        this.priorities = {};
    }

    /**
     * @private
     * @override
     * remove dequeued elements when reaching half the queue
     * @returns {object}
     */
    getFrontElement() {
        let priorities = Object.keys(this.priorities);
        let frontIndex = this.priorities[priorities[this.offset]];
        return this.elements[frontIndex];
    }

    /**
     * @private
     * @override
     * retrieves the back element in the priorityQueue
     * @returns {object}
     */
    getBackElement() {
        let priorities = Object.keys(this.priorities);
        let lastIndex = this.priorities[priorities[priorities.length -1]];
        return this.elements[lastIndex];
    }

    /**
     * @private
     * @override
     * remove dequeued elements when reaching half the queue
     */
    removeDequeued() {
        if (this.offset * 2 >= this.length()) {
            let priorities = Object.keys(this.priorities);
            let elements = [], prs = {};
            for (let i = this.offset; i < this.elements.length; i++) {
                elements.push(this.elements[this.priorities[priorities[i]]]);
                prs[priorities[i]] = elements.length - 1;           
            }
            this.priorities = prs;
            this.elements = elements;
            this.offset = 0;
        }
    }

    /**
     * @public
     * @override
     * push an element with its priority to the priorityQueue
     * @param {object} element
     * @param {number} priority
     */
    enqueue(element, priority) {
        if (isNaN(priority) || priority < 1) {
            throw new Error('element priority should be a number bigger than 0');
        }
        else if (this.priorities[priority] === undefined) {
            this.elements.push(element);
            this.priorities[priority] = this.elements.length - 1;
        }
    }
 
}

module.exports = PriorityQueue;