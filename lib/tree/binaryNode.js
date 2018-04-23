/**
 * datastructures-js/tree/BinaryNode
 * @class
 * @copyright 2018 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

class BinaryNode {

  /**
   * @constructor
   * @param {(string|number)} value
   * @param {BinaryNode} parent
   * @param {BinaryNode} left
   * @param {BinaryNode} right
   */
  constructor(value, parent, left, right) {
    this._value = value;
    this._parent = parent || null;
    this._left = left || null;
    this._right = right || null;
  }

  /**
   * @public
   * @returns {object}
   */
  getValue() {
    return this._value;
  }

  /**
   * @public
   * @param {object} value
   */
  setValue(value) {
    this._value = value;
  }

  /**
   * @public
   * @param {BinaryNode} parent
   */
  setParent(parent) {
    this._parent = parent;
  }

  /**
   * @public
   * @returns {BinaryNode}
   */
  getParent() {
    return this._parent;
  }
  
  /**
   * @public
   * @returns {BinaryNode}
   */
  getLeft() {
    return this._left;
  }

  /**
   * @public
   * @param {BinaryNode} node
   */
  setLeft(node) {
    this._left = node;
  }

  /**
   * @public
   * @returns {BinaryNode}
   */
  getRight() {
    return this._right;
  }

  /**
   * @public
   * @param {BinaryNode} node
   */
  setRight(node) {
    this._right = node;
  }

}

module.exports = BinaryNode;
