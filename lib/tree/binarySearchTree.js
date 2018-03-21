/**
 * datastructures-js/tree/BinarySearchTree
 * @class
 * @copyright 2018 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

class BinarySearchTree {

  /**
   * @constructor
   * @param {function} BinaryNode
   */
  constructor(BinaryNode) {
    this._init();
    this._BinaryNode = BinaryNode;
  }

  /**
   * @public
   * gets the root of the bst
   * @returns {BinaryNode}
   */
  root() {
    return this._rootNode;
  }

  /**
   * @public
   * gets the number of nodes in the tree
   * @returns {number}
   */
  count() {
    return this._nodesCount;
  }

  /**
   * @public
   * gets the node of the max value in the tree
   * @param {BinaryNode} [node=root] - starting node
   * @returns {BinaryNode}
   */
  max(node = this._rootNode) {
    if (node.getRight() !== null) {
      return this.max(node.getRight());
    }
    else {
      return node;
    }
  }

  /**
   * @public
   * gets the node of the min value in the tree
   * @param {BinaryNode} [node=root] - starting node
   * @returns {BinaryNode}
   */
  min(node = this._rootNode) {
    if (node.getLeft() !== null) {
      return this.min(node.getLeft());
    }
    else {
      return node;
    }
  }

  /**
   * @public
   * finds a node in the tree by a given value
   * @param {(string|number)} value
   * @param {BinaryNode} [node=root]
   * @returns {BinaryNode}
   */
  find(value, node = this._rootNode) {
    if (node !== null && value === node.getValue()) {
      return node;
    }
    else if (node !== null && value < node.getValue()) {
      return this.find(value, node.getLeft());
    }
    else if (node !== null && value > node.getValue()) {
      return this.find(value, node.getRight());
    }
    else {
      return null;
    }
  }

  /**
   * @public
   * inserts a node by a given value into the tree
   * @param {(string|number)} value
   * @param {BinaryNode} [parent=null] - parent of starting node
   * @param {BinaryNode} [node=root] - starting node
   */
  insert(value, parent = null, node = this._rootNode) {
    if (node !== null && value < node.getValue()) {
      this._insertChild(value, node, 'left');
    }
    else if (node !== null && value > node.getValue()) {
      this._insertChild(value, node, 'right');
    }
    else if (node === null) {
      this._rootNode = new this._BinaryNode(value, null, null);
      this._nodesCount++;
    }
  }

  /**
   * @public
   * removes a node by a given value from the tree 
   * @param {(string|number)} value
   * @param {BinaryNode} [parent=null] - parent of starting node
   * @param {BinaryNode} [node=root] - starting node for deletion
   */
  remove(value, parent = null, node = this._rootNode) {
    if (node !== null && value === node.getValue()) {
      this._removeNode(parent, node);
    }
    else if (node !== null && value < node.getValue()) {
      this.remove(value, node, node.getLeft());
    }
    else if (node !== null && value > node.getValue()) {
      this.remove(value, node, node.getRight());
    }
  }

  /**
   * @public
   * traverse the binary tree
   * @param {function} cb - called with each node value
   * @param {string} type - 'inOrder' | 'preOrder' | 'postOrder'
   */
  traverse(cb, type = 'inOrder') {
    switch(type) {
      case 'inOrder':
        this._traverseInOrder(cb);
        break;
      case 'preOrder':
        this._traversePreOrder(cb);
        break;
      case 'postOrder':
        this._traversePostOrder(cb);
        break;
      default:
        this._traverseInOrder(cb);
    }
  }

  /**
   * @public
   * clears the tree
   */
  clear() {
    return this._init();
  }

  /**
   * @private
   * @param {BinaryNode} node
   * @param {string} type
   */
  _getChild(node, type) {
    if (type === 'left') {
      return node.getLeft();
    }
    else if (type === 'right') {
      return node.getRight();
    }
  }

  /**
   * @private
   * @param {(string|number)} value
   * @param {BinaryNode} [node=root] - starting node
   * @param {string} - type
   */
  _insertChild(value, node, type) {
    let child = this._getChild(node, type);
    if (child === null) {
      let newNode = new this._BinaryNode(value, null, null);
      if (type === 'left') {
        node.setLeft(newNode);
      }
      else if (type === 'right') {
        node.setRight(newNode);
      }
      this._nodesCount++;
    }
    else {
      this.insert(value, node, child);
    }
  }

  /**
   * @private
   * @param {BinaryNode} parent
   * @param {BinaryNode} node
   */
  _removeLeaf(parent, node) {
    if (parent === null) {
      this._rootNode = null;
    }
    else if (node.getValue() >= parent.getValue()) {
      parent.setRight(null);
    }
    else {
      parent.setLeft(null);
    }
    this._nodesCount--;
  }

  /**
   * @private
   * @param {BinaryNode} parent
   * @param {BinaryNode} node
   * @param {string} type
   */
  _removeNodeWithChild(parent, node, type) {
    let child = this._getChild(node, type);
    if (node.getValue() > parent.getValue()) {
      parent.setRight(child);
    }
    else {
      parent.setLeft(child);
    }
    this._nodesCount--;
  }

  /**
   * @private
   * @param {BinaryNode} parent
   * @param {BinaryNode} node
   */
  _removeNode(parent, node) {
    if (node.getRight() === null && node.getLeft() === null) {
      this._removeLeaf(parent, node);
    }
    else if (node.getRight() === null) {
      this._removeNodeWithChild(parent, node, 'left');
    }
    else if (node.getLeft() === null) {
      this._removeNodeWithChild(parent, node, 'right');
    }
    else {
      // remove node with two children
      let minRight = this.min(node.getRight());
      node.setValue(minRight.getValue());
      this.remove(minRight.getValue(), node, node.getRight());
    }        
  }

  /**
   * @private
   * traverse the binary tree in-order (left-parent-right) 
   * @param {function} cb - called with each node value
   * @param {object} [parent=root] - starting node
   */
  _traverseInOrder(cb, parent = this._rootNode) {
    if (parent !== null) {
      this._traverseInOrder(cb, parent.getLeft());
      cb(parent.getValue());
      this._traverseInOrder(cb, parent.getRight());
    }
  }

  /**
   * @private
   * traverse the binary tree pre-order (parent-left-right) 
   * @param {function} cb - called with each node value
   * @param {object} [parent=root] - starting node
   */
  _traversePreOrder(cb, parent = this._rootNode) {
    if (parent !== null) {
      cb(parent.getValue());
      this._traversePreOrder(cb, parent.getLeft());
      this._traversePreOrder(cb, parent.getRight());
    }
  }

  /**
   * @private
   * traverse the binary tree post-order (left-right-parent) 
   * @param {function} cb - called with each node value
   * @param {object} [parent=root] - starting node
   */
  _traversePostOrder(cb, parent = this._rootNode) {
    if (parent !== null) {
      this._traversePostOrder(cb, parent.getLeft());
      this._traversePostOrder(cb, parent.getRight());
      cb(parent.getValue());
    }
  }

  /**
   * @protected
   * initialize the binary search tree properties
   */
  _init() {
    this._rootNode = null;
    this._nodesCount = 0;        
  }


}

module.exports = BinarySearchTree;