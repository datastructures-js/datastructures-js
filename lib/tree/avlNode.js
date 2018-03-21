/**
 * datastructures-js/tree/AvlNode
 * @class
 * @extends BinaryNode
 * @copyright 2018 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

const BinaryNode = require('./binaryNode');

class AvlNode extends BinaryNode {

  /**
   * @constructor
   * @param {(string|number)} value
   * @param {AvlNode} left
   * @param {AvlNode} right
   */
  constructor(value, left, right) {
    super(value, left, right);
    this._height = 1;
  }

  /**
   * @public
   * @param {number} height
   */
  setHeight(height) {
    this._height = height;
  }

  /**
   * @public
   * @returns {number}
   */
  getHeight() {
    return this._height;
  }

}

module.exports = AvlNode;