/**
 * datastructures-js/tree/AvlTree
 * @class
 * @extends BinarySearchTree
 * @copyright 2018 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

const BinarySearchTree = require('./binarySearchTree');

class AvlTree extends BinarySearchTree {

  /**
   * @constructor
   * @param {function} AvlNode
   */
  constructor(AvlNode) {
    super(AvlNode);
  }

  /**
   * @public
   * inserts a value into the tree and balances the tree
   * @override
   * @param {(string|number)} value
   * @param {BinaryNode} [parent=null] - parent of starting node
   * @param {BinaryNode} [node=root] - starting node
   */
  insert(value, parent = null, node = this._rootNode) {
    super.insert(value, parent, node);
    this._balanceInsertion(value, parent, node);
  }

  /**
   * @public
   * removes a value from the tree and balances the tree
   * @override
   * @param {(string|number)} value
   * @param {BinaryNode} [parent=null] - parent of starting node
   * @param {BinaryNode} [node=root] - starting node
   */
  remove(value, parent = null, node = this._rootNode) {
    super.remove(value, parent, node);
    this._balanceRemoval(parent, node);
  }

  /**
   * @private
   * gets the height if a node
   * @returns {number}
   */
  _height(node) {
    return (node && node.getHeight()) || 0;
  }

  /**
   * @private
   * calculates the balance of a node
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

  /**
   * @private
   * updates the height of the node
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
   * performs a left rotation of a node (counter-clockwise)
   * @param {AvlNode} - parent node of the rotating node
   * @param {AvlNode} - the node to be rotated
   */  
  _rotateLeft(parent, node) {
    let right = node.getRight();
    node.setRight(right.getLeft());
    right.setLeft(node);
    if (node === this._rootNode) {
      this._rootNode = right;
    }
    else if (parent.getValue() < right.getValue()) {
      parent.setRight(right);
    }
    else if (parent.getValue() > right.getValue()) {
      parent.setLeft(right);
    }
    this._updateHeight(node);
    this._updateHeight(right);
  }

  /**
   * @private
   * performs a left rotation of a node (clockwise)
   * @param {AvlNode} - parent node of the rotating node
   * @param {AvlNode} - the node to be rotated
   */  
  _rotateRight(parent, node) {
    let left = node.getLeft();
    node.setLeft(left.getRight());
    left.setRight(node);
    if (node === this._rootNode) {
      this._rootNode = left;
    }
    else if (parent.getValue() > left.getValue()) {
      parent.setLeft(left);
    }
    else if (parent.getValue() < left.getValue()) {
      parent.setRight(left);
    }
    this._updateHeight(node);
    this._updateHeight(left);
  }

  /**
   * @private
   * rotates a node upon insertion based on its balance to maintain a balanced tree
   * @param {(string|number)} value
   * @param {BinaryNode} [parent=null] - parent of starting node
   * @param {BinaryNode} [node=root] - starting node
   */
  _balanceInsertion(value, parent, node) {
    this._updateHeight(node);
    let balance = this._calculateBalance(node);
    if (balance > 1 && value < node.getLeft().getValue()) {
      this._rotateRight(parent, node);
    }
    else if (balance > 1 && value > node.getLeft().getValue()) {
      this._rotateLeft(node, node.getLeft());
      this._rotateRight(parent, node);
    }
    else if (balance < -1 && value > node.getRight().getValue()) {
      this._rotateLeft(parent, node);
    }
    else if (balance < -1 && value < node.getRight().getValue()) {
      this._rotateRight(node, node.getRight());
      this._rotateLeft(parent, node);
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
   * rotates a node upon removal based on its balance to maintain a balanced tree
   * @param {(string|number)} value
   * @param {BinaryNode} [parent=null] - parent of starting node
   * @param {BinaryNode} [node=root] - starting node
   */
  _balanceRemoval(parent, node) {
    this._updateHeight(node);
    let balance = this._calculateBalance(node);
    let child = this._getBalanceChild(node);
    if (balance > 1 && child.getLeft() !== null) {
      this._rotateRight(parent, node);
    }
    else if (balance > 1 && child.getRight() !== null) {
      this._rotateLeft(node, child);
      this._rotateRight(parent, node);
    }
    else if (balance < -1 && child.getRight() !== null) {
      this._rotateLeft(parent, node);
    }
    else if (balance < -1 && child.getLeft() !== null) {
      this._rotateRight(node, child);
      this._rotateLeft(parent, node);
    }
  }

}

module.exports = AvlTree;