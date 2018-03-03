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
    else if (this._priorities[priority] === undefined) {
      this._elements.push(element);
      this._priorities[priority] = this._elements.length - 1;
    }
  }

  /**
   * @private
   * @override
   * init the priorityQueue properties
   */
  _init() {
    super._init();
    this._priorities = {};
  }

  /**
   * @private
   * @override
   * retrieves the front element in the priority queue
   * @returns {object}
   */
  _getFrontElement() {
    let priorities = Object.keys(this._priorities);
    let frontIndex = this._priorities[priorities[this._offset]];
    return this._elements[frontIndex];
  }

  /**
   * @private
   * @override
   * retrieves the back element in the priority queue
   * @returns {object}
   */
  _getBackElement() {
    let priorities = Object.keys(this._priorities);
    let lastIndex = this._priorities[priorities[priorities.length -1]];
    return this._elements[lastIndex];
  }

  /**
   * @private
   * @override
   * remove previousely dequeued elements when reaching half the queue
   */
  _removeDequeued() {
    if (this._offset * 2 >= this.length()) {
      let priorities = Object.keys(this._priorities);
      let elements = [], prs = {};
      for (let i = this._offset; i < this._elements.length; i++) {
        elements.push(this._elements[this._priorities[priorities[i]]]);
        prs[priorities[i]] = elements.length - 1;           
      }
      this._priorities = prs;
      this._elements = elements;
      this._offset = 0;
    }
  }

}

module.exports = PriorityQueue;