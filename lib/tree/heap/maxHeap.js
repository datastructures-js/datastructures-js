/**
 * datastructures-js/heap/MaxHeap
 * @class
 * @extends Heap
 * @copyright 2018 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

const Heap = require('./heap');

class MaxHeap extends Heap {

  /**
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * @public
   * gets the max element in the heap
   * @returns {(string|number|null)}
   */
  max() {
    return this._root();
  }

  /**
   * @public
   * removes the max element from the heap
   * @returns {(string|number|null)}
   */
  extractMax() {
    return this._removeRoot();
  }

  /**
   * @public
   * removes an element at a given index
   * @param {number} index
   */
  remove(index) {
    this._updateKey(index, this.max() + 1);
    this.extractMax();
  }

  /**
   * @private
   * checks if left is bigger than right
   * @param {number} left
   * @param {number} right
   * @returns {boolean}
   */
  _compareChildren(left, right) {
    return this._nodes[left] > this._nodes[right];
  }

  /**
   * @protected
   * checks if the parent should be swapped with child
   * @param {number} parent
   * @param {number} child
   * @returns {boolean}
   */
  _isParentAChild(parent, child) {
    return this._nodes[parent] < this._nodes[child];
  }

}

module.exports = MaxHeap;