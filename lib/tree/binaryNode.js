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
    this.value = value;
    this.left = left || null;
    this.right = right || null;
  }

  /**
   * @public
   * @returns {object}
   */
  getValue() {
    return this.value;
  }

  /**
   * @public
   * @param {object} value
   */
  setValue(value) {
    this.value = value;
  }

  /**
   * @public
   * @returns {BinaryNode}
   */
  getLeft() {
    return this.left;
  }

  /**
   * @public
   * @param {BinaryNode} node
   */
  setLeft(node) {
    this.left = node;
  }

  /**
   * @public
   * @returns {BinaryNode}
   */
  getRight() {
    return this.right;
  }

  /**
   * @public
   * @param {BinaryNode} node
   */
  setRight(node) {
    this.right = node;
  }

}

module.exports = BinaryNode;
