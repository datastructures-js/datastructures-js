/*!
 * datastructures-js
 * Stack
 * Copyright(c) 2018 Eyas Ranjous <eyas.ranjous@gmail.com>
 * MIT Licensed
 */

class Stack {

  constructor() {
    this._init();
  }

  /**
   * @public
   * checks if the stack is empty
   * @return {boolean}
   */
  isEmpty() {
      return this.top === 0;
  }

  /**
   * @public
   * the length of the stack
   * @return {number}
   */
  length() {
      return this.top;
  }

  /**
   * @public
   * pushes an element to the top of the stack
   * @param {object} element
   */
  push(element) {
      this.elements.push(element);
      this.top++;
  }

  /**
   * @public
   * pops an element from the top of the stack
   * only remove popped elements when reaching half of the stack
   * @returns {object}
   */
  pop() {
      if (!this.isEmpty()) {
          this.top--;
          let last = this.elements[this.top];
          this._removedPopped();
          return last;
      }
      else {
          return null;
      }
  }

  /**
   * @public
   * peeks the top element of the stack
   * @returns {object}
   */
  peek() {
      return !this.isEmpty() ? this.elements[this.top - 1] : null;
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
    this.top = 0;
    this.elements = [];
  }

  /**
   * @private
   * removes all popped elements from the stack when reaching half size
   */
  _removedPopped() {
      if (this.top * 2 <= this.elements.length) {
          this.elements  = this.elements.slice(0, this.top);
      }
  }

}

module.exports = Stack;