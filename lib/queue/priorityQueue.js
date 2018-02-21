/**
 * datastructures-js/queue/PriorityQueue
 * @class
 * @extends Queue
 * @copyright 2018 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

const Queue = require('./queue');

class PriorityQueue extends Queue {

  /**
   * @constructor
   */
  constructor() {
    super();
    this._init();
  }

  /**
   * @public
   * @override
   * push an element with its priority to the queue
   * @param {object} element
   * @param {number} priority
   * @throws {Error} - when priority is not a number bigger than 0
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

  /**
   * @private
   * @override
   * init the priorityQueue properties
   */
  _init() {
    super._init();
    this.priorities = {};
  }

  /**
   * @private
   * @override
   * retrieves the front element in the priority queue
   * @returns {object}
   */
  _getFrontElement() {
    let priorities = Object.keys(this.priorities);
    let frontIndex = this.priorities[priorities[this.offset]];
    return this.elements[frontIndex];
  }

  /**
   * @private
   * @override
   * retrieves the back element in the priority queue
   * @returns {object}
   */
  _getBackElement() {
    let priorities = Object.keys(this.priorities);
    let lastIndex = this.priorities[priorities[priorities.length -1]];
    return this.elements[lastIndex];
  }

  /**
   * @private
   * @override
   * remove previousely dequeued elements when reaching half the queue
   */
  _removeDequeued() {
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

}

module.exports = PriorityQueue;