/**
 * datastructures-js/Stack
 * @class
 * @copyright 2018 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

class Stack {

  /**
   * @constructor
   */
  constructor() {
    this._init();
  }

  /**
   * @public
   * gets the length of the stack
   * @returns {number}
   */
  length() {
    return this._top;
  }

  /**
   * @public
   * checks if the stack is empty
   * @returns {boolean}
   */
  isEmpty() {
    return this._top === 0;
  }

  /**
   * @public
   * pushes an element to the top of the stack
   * @param {object} element
   */
  push(element) {
    this._elements.push(element);
    this._top++;
  }

  /**
   * @public
   * pops an element from the top of the stack
   * only remove popped elements when reaching half of the stack
   * @returns {object}
   */
  pop() {
    if (!this.isEmpty()) {
      this._top--;
      let last = this._elements[this._top];
      this._removedPopped();
      return last;
    }
    else {
      return null;
    }
  }

  /**
   * @public
   * gets the top element of the stack
   * @returns {object}
   */
  peek() {
    return !this.isEmpty() ? this._elements[this._top - 1] : null;
  }

  /**
   * @public
   * clears the stack
   */
  clear() {
    this._init();
  }

  /**
   * @private
   * init the stack properties
   */
  _init() {
    this._top = 0;
    this._elements = [];
  }

  /**
   * @private
   * removes previousely popped elements when reaching half the stack
   */
  _removedPopped() {
    if (this._top * 2 <= this._elements.length) {
      this._elements  = this._elements.slice(0, this._top);
    }
  }

}

module.exports = Stack;