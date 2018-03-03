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
   * @param {BinaryNode} left
   * @param {BinaryNode} right
   */
  constructor(value, left, right) {
    this._value = value;
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
