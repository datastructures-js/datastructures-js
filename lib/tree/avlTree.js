/**
 * datastructures-js/tree/AvlTree
 * @class
 * @extends SelfBalancingTree
 * @copyright 2018 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

const SelfBalancingTree = require('./selfBalancingTree');

class AvlTree extends SelfBalancingTree {

  /**
   * @private
   * rotates a node upon insertion based on its balance to maintain a balanced tree
   * @param {(string|number)} value
   * @param {BinaryNode} [node=root] - starting node
   */
  _balanceInsertion(value, node) {
    this._updateHeight(node);
    let balance = this._calculateBalance(node);
    if (balance > 1 && value < node.getLeft().getValue()) {
      this._rotateRight(node);
    }
    else if (balance > 1 && value > node.getLeft().getValue()) {
      this._rotateLeftRight(node);
    }
    else if (balance < -1 && value > node.getRight().getValue()) {
      this._rotateLeft(node);
    }
    else if (balance < -1 && value < node.getRight().getValue()) {
      this._rotateRightLeft(node);
    }
  }

  /**
   * @private
   * rotates a node upon removal based on its balance to maintain a balanced tree
   * @param {(string|number)} value
   * @param {BinaryNode} [node=root] - starting node
   */
  _balanceRemoval(node) {
    this._updateHeight(node);
    let balance = this._calculateBalance(node);
    let child = this._getBalanceChild(node);
    if (balance > 1 && child.getLeft() !== null) {
      this._rotateRight(node);
    }
    else if (balance > 1 && child.getRight() !== null) {
      this._rotateLeftRight(node);
    }
    else if (balance < -1 && child.getRight() !== null) {
      this._rotateLeft(node);
    }
    else if (balance < -1 && child.getLeft() !== null) {
     this._rotateRightLeft(node);
    }
  }

  /**
   * @protected
   * @override
   * updates the height of a node and its parent after a left rotation
   * @param {AvlNode} node
   */
  _updateLeftRotation(node) {
    this._updateHeight(node);
    this._updateHeight(node.getParent());
  }

  /**
   * @protected
   * @override
   * updates the height of a node and its parent after a right rotation
   * @param {AvlNode} node
   */
  _updateRightRotation(node) {
    this._updateHeight(node);
    this._updateHeight(node.getParent());
  }

  /**
   * @private
   * updates the height of a node
   * @param {AvlNode}
   */
  _updateHeight(node) {
    if (node !== null) {
      let rightHeight = this._height(node.getRight());
      let leftHeight = this._height(node.getLeft());
      node.setHeight(Math.max(rightHeight, leftHeight) + 1);
    }
  }

  /**
   * @private
   * gets the node's child based on balance
   * @param {AvlNode} node
   * @returns {AvlNode} child node
   */
  _getBalanceChild(node) {
    let balance = this._calculateBalance(node);
    if (balance > 1) {
      return node.getLeft();
    }
    else if (balance < -1) {
      return node.getRight();
    }
  }

  /**
   * @private
   * gets the height of a node
   * @returns {number}
   */
  _height(node) {
    return (node && node.getHeight()) || 0;
  }

  /**
   * @private
   * calculates the balance of a node based on its childrens heights
   * @returns {number}
   */
  _calculateBalance(node) {
    if (node !== null) {
      return this._height(node.getLeft()) - this._height(node.getRight());
    }
    else {
      return 0;
    }
  }

}

module.exports = AvlTree;