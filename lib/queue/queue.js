/**
 * datastructures-js/queue/Queue
 * @class
 * @copyright 2018 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

class Queue {

  /**
   * @contructor
   */
  constructor() {
    this._init();
  }

  /**
   * @public
   * gets the length of the queue
   * @returns {number}
   */
  length() {
    return this._elements.length - this._offset;
  }

  /**
   * @public
   * gets the element at the front of the queue
   * @returns {object}
   */
  front() {
    return this._getEdgeElement('front');
  }

  /**
   * @public
   * gets the element at the back of the queue
   * @returns {object}
   */
  back() {
    return this._getEdgeElement('back');
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
   * pushes an element to the end of the queue
   * @param {object} element
   */
  enqueue(element) {
    this._elements.push(element);
  }

  /**
   * @public
   * dequeues an element from the beginning of the queue
   * only remove dequeued elements when reaching half of the queue
   * @returns {object}
   */
  dequeue() {
    if (!this.isEmpty()) {
      let first = this._getFrontElement();
      this._offset++;
      this._removeDequeued();
      return first;
    }
    else {
      return null;
    }
  }

  /**
   * @public
   * converts the queue into an array
   * @returns {array}
   */
  toArray() {
    return this._elements.slice(this._offset);
  }

  /**
   * @public
   * clears the queue
   */
  clear() {
    this._init();
  }

  /**
   * @protected
   * init the queue properties
   */
  _init() {
    this._elements = [];
    this._offset = 0;
  }

  /**
   * @protected
   * remove dequeued elements when reaching half of the queue
   */    
  _removeDequeued() {
    if (this._offset * 2 >= this.length()) {
      this._elements  = this._elements.slice(this._offset);
      this._offset = 0;
    }
  }

  /**
   * @protected
   * retrieves the front element in the queue
   * @returns {object}
   */
  _getFrontElement() {
    return this._elements[this._offset];
  }

  /**
   * @protected
   * retrieves the back element in the queue
   * @returns {object}
   */
  _getBackElement() {
    return this._elements[this._elements.length - 1];
  }

  /**
   * @private
   * returns the edge element of the queue based on direction
   * @returns {object}
   */
  _getEdgeElement(side) {
    if (!this.isEmpty() && side === 'front') {
      return this._getFrontElement();
    }
    else if (!this.isEmpty() && side === 'back') {
      return this._getBackElement();
    }
    else {
      return null;
    }
  }

}

module.exports = Queue;