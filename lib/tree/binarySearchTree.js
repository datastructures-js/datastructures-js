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
    this._BinaryNode = BinaryNode;
    this._init();
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
    return this._edge('right', node);
  }

  /**
   * @public
   * gets the node of the min value in the tree
   * @param {BinaryNode} [node=root] - starting node
   * @returns {BinaryNode}
   */
  min(node = this._rootNode) {
    return this._edge('left', node);
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
   * @param {BinaryNode} [parent=root] - value node's parent
   */
  insert(value, parent = this._rootNode) {
    if (parent !== null && value < parent.getValue()) {
      this._insertChild(value, parent, 'left');
    }
    else if (parent !== null && value > parent.getValue()) {
      this._insertChild(value, parent, 'right');
    }
    else if (parent === null) {
      this._rootNode = new this._BinaryNode(value);
      this._nodesCount++;
    }
  }

  /**
   * @public
   * removes a node by a given value from the tree 
   * @param {(string|number)} value
   * @param {BinaryNode} [node=root] - starting node for deletion
   */
  remove(value, node = this._rootNode) {
    if (node !== null && value === node.getValue()) {
      this._removeNode(node);
    }
    else if (node !== null && value < node.getValue()) {
      this.remove(value, node.getLeft());
    }
    else if (node !== null && value > node.getValue()) {
      this.remove(value, node.getRight());
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
      let newNode = new this._BinaryNode(value, node);
      if (type === 'left') {
        node.setLeft(newNode);
      }
      else if (type === 'right') {
        node.setRight(newNode);
      }
      this._nodesCount++;
    }
    else {
      this.insert(value, child);
    }
  }

  /**
   * @private
   * @param {BinaryNode} node
   */
  _removeLeaf(node) {
    let parent = node.getParent();
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
   * @param {BinaryNode} node
   * @param {string} type
   */
  _removeNodeWithChild(node, type) {
    let parent = node.getParent();
    let child = this._getChild(node, type);
    if (node.getValue() > parent.getValue()) {
      parent.setRight(child);
    }
    else {
      parent.setLeft(child);
    }
    child.setParent(parent);
    this._nodesCount--;
  }

  /**
   * @private
   * @param {BinaryNode} node
   */
  _removeNode(node) {
    if (node.getRight() === null && node.getLeft() === null) {
      this._removeLeaf(node);
    }
    else if (node.getRight() === null) {
      this._removeNodeWithChild(node, 'left');
    }
    else if (node.getLeft() === null) {
      this._removeNodeWithChild(node, 'right');
    }
    else {
      // remove node with two children
      let minRight = this.min(node.getRight());
      node.setValue(minRight.getValue());
      this.remove(minRight.getValue(), node.getRight());
    }        
  }

  /**
   * @private
   * traverse the binary tree in-order (left-node-right) 
   * @param {function} cb - called with each node value
   * @param {object} [node=root] - starting node
   */
  _traverseInOrder(cb, node = this._rootNode) {
    if (node !== null) {
      this._traverseInOrder(cb, node.getLeft());
      cb(node.getValue());
      this._traverseInOrder(cb, node.getRight());
    }
  }

  /**
   * @private
   * traverse the binary tree pre-order (node-left-right) 
   * @param {function} cb - called with each node value
   * @param {object} [node=root] - starting node
   */
  _traversePreOrder(cb, node = this._rootNode) {
    if (node !== null) {
      cb(node.getValue());
      this._traversePreOrder(cb, node.getLeft());
      this._traversePreOrder(cb, node.getRight());
    }
  }

  /**
   * @private
   * traverse the binary tree post-order (left-right-node) 
   * @param {function} cb - called with each node value
   * @param {object} [node=root] - starting node
   */
  _traversePostOrder(cb, node = this._rootNode) {
    if (node !== null) {
      this._traversePostOrder(cb, node.getLeft());
      this._traversePostOrder(cb, node.getRight());
      cb(node.getValue());
    }
  }

  /**
   * @private
   * gets an edge leaf of the tree
   * @param {string} type
   * @param {BinaryNode} [node=root] - starting node
   * @returns {BinaryNode}
   */
  _edge(type, node) {
    let child = this._getChild(node, type);
    if (child !== null) {
      return this._edge(type, child);
    }
    else {
      return node;
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