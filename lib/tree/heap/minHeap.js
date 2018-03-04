/**
 * datastructures-js/heap/MinHeap
 * @class
 * @extends Heap
 * @copyright 2018 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

const Heap = require('./heap');

class MinHeap extends Heap {

  /**
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * @public
   * gets the min element in the heap
   * @returns {(string|number|null)}
   */
  min() {
    return this._root();
  }

  /**
   * @public
   * removes the min element from the heap
   * @returns {(string|number|null)}
   */
  extractMin() {
    return this._removeRoot();
  }

  /**
   * @public
   * removes an element at a given index
   * @param {number} index
   */
  remove(index) {
    if (index >= 0 && index < this._size) {
      this._updateKey(index, this.min() - 1);
      this.extractMin();
    }
  }

  /**
   * @private
   * checks if left is less than right
   * @param {number} left
   * @param {number} right
   * @returns {boolean}
   */
  _compareChildren(left, right) {
    return this._nodes[left] < this._nodes[right];
  }

  /**
   * @protected
   * checks if the parent should be swapped with child
   * @param {number} parent
   * @param {number} child
   * @returns {boolean}
   */
  _isParentAChild(parent, child) {
    return this._nodes[parent] > this._nodes[child];
  }

  /**
   * @private
   * fix the min element of the heap starting from a parent
   * @param {number} parent
   */
  _fixRoot(parent) {
    let minChild = this._child(this._left(parent), this._right(parent));
    if (minChild !== null && this._nodes[parent] > this._nodes[minChild]) {
      this._swap(parent, minChild);
      this._fixRoot(minChild);
    }
  }

}

module.exports = MinHeap;