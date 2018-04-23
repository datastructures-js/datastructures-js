/**
 * datastructures-js/tree/AvlTree
 * @class
 * @abstract
 * @extends BinarySearchTree
 * @copyright 2018 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

const BinarySearchTree = require('./binarySearchTree');

class SelfBalancingTree extends BinarySearchTree {

  /**
   * @public
   * @abstract
   * @override
   * inserts a value and balances the tree
   * @param {(string|number)} value
   * @param {BinaryNode} [node=root] - starting node
   */
  insert(value, node = this._rootNode) {
    super.insert(value, node);
    this._balanceInsertion(value, node);
  }

  /**
   * @public
   * @abstract
   * @override
   * removes a value and balances the tree
   * @param {(string|number)} value
   * @param {BinaryNode} [node=root] - starting node
   */
  remove(value, node = this._rootNode) {
    super.remove(value, node);
    this._balanceRemoval(node);
  }

  /**
   * @protected
   * performs a left rotation of a node (counter-clockwise)
   * @param {BinaryNode} node - the node to be rotated
   */
  _rotateLeft(node) {
    let parent = node.getParent();
    let right = node.getRight();
    let rightLeft = right.getLeft();
    node.setRight(rightLeft);
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
    if (rightLeft !== null) {
      rightLeft.setParent(node);
    }
    node.setParent(right);
    right.setParent(parent);
    this._updateLeftRotation(node);
  }

  /**
   * @protected
   * performs a right rotation of a node (clockwise)
   * @param {BinaryNode} node - the node to be rotated
   */
  _rotateRight(node) {
    let parent = node.getParent();
    let left = node.getLeft();
    let leftRight = left.getRight();
    node.setLeft(leftRight);
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
    if (leftRight !== null) {
      leftRight.setParent(node);
    }
    node.setParent(left);
    left.setParent(parent);
    this._updateRightRotation(node);
  }

  /**
   * @protected
   * performs a left rotation of the left child then a right rotation of the node
   * @param {BinaryNode} node - the node to be rotated
   */
  _rotateLeftRight(node) {
    this._rotateLeft(node.getLeft());
    this._rotateRight(node);
  }

  /**
   * @internal
   * performs a right rotation of the right child then a left rotation of the node
   * @param {BinaryNode} node - the node to be rotated
   */
  _rotateRightLeft(node) {
    this._rotateRight(node.getRight());
    this._rotateLeft(node);
  }

}

module.exports = SelfBalancingTree;