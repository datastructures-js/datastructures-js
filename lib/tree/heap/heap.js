/**
 * datastructures-js/heap/Heap
 * @class
 * @abstract
 * @copyright 2018 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

class Heap {

  /**
   * @constructor
   */
  constructor() {
    this._init();
  }

  /**
   * @public
   * gets the size of the heap
   * @returns {number}
   */
  size() {
    return this._size;
  }

  /**
   * @public
   * gets the size of the heap
   * @param {(string|number)} value
   */
  insert(value) {
    this._nodes.push(value);
    this._size++;
    this._bubble(this._nodes.length - 1); // abstract
  }

  /**
   * @public
   * clears the heap
   */
  clear() {
    this._init();
  }

  /**
   * @protected
   * gets the root element
   * @returns {(string|number|null)}
   */
  _root() {
    if (this._size > 0) {
      return this._nodes[0];
    }
    else {
      return null;
    }
  }

  /**
   * @protected
   * removes the root node of the heap
   * @returns {(number|null)}
   */
  _removeRoot() {
    if (this._size > 0) {
      let root = this._nodes[0];
      this._nodes[0] = this._nodes[this._size - 1];
      this._nodes.pop();
      this._size--;
      this._fixRoot(0); // abstract
      return root;
    }
    else {
      return null;
    }
  }

  /**
   * @protected
   * updates the value of the key at an index
   * @parram {number} index
   * @parram {(string|number)} value
   */
  _updateKey(index, value) {
    this._nodes[index] = value;
    this._bubble(index); // abstract
  }

  /**
   * @protected
   * calculates the parent index
   * @param {number} i
   * @returns {number}
   */
  _parent(i) {
    return Math.floor((i - 1) / 2);
  }

  /**
   * @protected
   * calculates the left child index
   * @param {number} i
   * @returns {number}
   */
  _left(i) {
    return (i * 2) + 1;
  }

  /**
   * @protected
   * calculates the right child index
   * @param {number} i
   * @returns {number}
   */
  _right(i) {
    return (i * 2) + 2;
  }

  /**
   * @private
   * returns one of the children based on a compare function
   * @param {number} left
   * @param {right} left
   * @param {function} compare
   */
  _child(left, right, compare) {
    if (left < this._size && right < this._size) {
      if (compare()) {
        return left;
      }
      else {
        return right;
      }
    }
    else if (right < this._size) {
      return right;
    }
    else if (left < this._size) {
      return left;
    }
  }

  _bubble(i, isParentAChild) {
    let index = i;
    let parent = this._parent(i);
    while (index > 0 && isParentAChild(parent, index)) {
      this._swap(index, parent);
      index = parent;
      parent = this._parent(index);
    }
  }

  /**
   * @protected
   * swaps two elements in the nodes list
   */
  _swap(i, j) {
    let temp = this._nodes[i];
    this._nodes[i] = this._nodes[j];
    this._nodes[j] = temp;
  }

  /**
   * @private
   * initialize the heap properties
   */
  _init() {
    this._nodes = [];
    this._size = 0;
  }
}

module.exports = Heap;