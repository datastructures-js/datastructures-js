'use strict';

const BinaryNode = require('./binaryNode');

class BinarySearchTree {

    constructor() {
        this.init();
    }

    /**
     * @protected
     * initialize the binary search tree properties
     */
    init() {
        this.root = null;
        this.nodesCount = 0;        
    }

    /**
     * @public
     * retrieves the root of the bst
     * @returns {BinaryNode}
     */
    getRoot() {
        return this.root;
    }

    /**
     * @public
     * the number of nodes in the tree
     * @returns {number}
     */
    count() {
        return this.nodesCount;
    }

    /**
     * @public
     * retrieves the node of the max value in the tree
     * @param {BinaryNode} [node=root] - starting node
     * @returns {BinaryNode}
     */
    getMax(node = this.root) {
        if (node.getRight() !== null) {
            return this.getMax(node.getRight());
        }
        else {
            return node;
        }
    }

    /**
     * @public
     * retrieves the node of the min value in the tree
     * @param {BinaryNode} [node=root] - starting node
     * @returns {BinaryNode}
     */
    getMin(node = this.root) {
        if (node.getLeft() !== null) {
            return this.getMin(node.getLeft());
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
    find(value, node = this.root) {
        if (node !== null) {
            if (value === node.getValue()) {
                return node;
            }
            else if (value < node.getValue()) {
                return this.find(value, node.getLeft());
            }
            else if (value > node.getValue()) {
                return this.find(value, node.getRight());
            }
        }
        else {
            return null;
        }
    }

    /**
     * @public
     * creates a node from a value and insert it into the tree
     * @param {(string|number)} value
     * @param {BinaryNode} [node=root] - starting node
     */
    insert(value, node = this.root) {
        if (node !== null) {
            if (value < node.getValue()) {
                if (node.getLeft() === null) {
                    node.setLeft(new BinaryNode(value, null, null));
                    this.nodesCount++;
                }
                else {
                    this.insert(value, node.getLeft());
                }
            }
            else if (value > node.getValue()) {
                if (node.getRight() === null) {
                    node.setRight(new BinaryNode(value, null, null));
                    this.nodesCount++;
                }
                else {
                    this.insert(value, node.getRight());
                }
            }
        }
        else {
            this.root = new BinaryNode(value, null, null);
            this.nodesCount++;
        }
    }

    /**
     * @public
     * removes a node by a given value from the tree 
     * @param {(string|number)} value
     * @param {object} [parent=null] - parent of starting node
     * @param {BinaryNode} [node=root] - starting node for deletion
     */
    remove(value, parent = null, node = this.root) {
        if (node !== null) {
            if (value === node.getValue()) {
                if (node.getRight() === null && node.getLeft() === null) {
                    if (parent === null) {
                        this.root = null;
                    }
                    else if (node.getValue() >= parent.getValue()) {
                        parent.setRight(null);
                    }
                    else {
                        parent.setLeft(null);
                    }
                    this.nodesCount--;
                }
                else if (node.getRight() === null) {
                    if (node.getValue() > parent.getValue()) {
                        parent.setRight(node.getLeft());
                    }
                    else {
                        parent.setLeft(node.getLeft());
                    }
                    this.nodesCount--;
                }
                else if (node.getLeft() === null) {
                    if (node.getValue() > parent.getValue()) {
                        parent.setRight(node.getRight());
                    }
                    else {
                        parent.setLeft(node.getRight());
                    }
                    this.nodesCount--;
                }
                else {
                    let minRight = this.getMin(node.getRight());
                    node.setValue(minRight.getValue());
                    this.remove(minRight.getValue(), node, node.getRight());
                }
            }
            else if (value < node.getValue()) {
                this.remove(value, node, node.getLeft());
            }
            else if (value > node.getValue()) {
                this.remove(value, node, node.getRight());
            }
        }
    }

    /**
     * @public
     * traverse the binary tree in-order (left-parent-right) 
     * @param {function} cb - called with each node value
     * @param {object} [parent=root] - starting node
     */
    traverseInOrder(cb, parent = this.root) {
        if (parent !== null) {
            this.traverseInOrder(cb, parent.getLeft());
            cb(parent.getValue());
            this.traverseInOrder(cb, parent.getRight());
        }
    }

    /**
     * @public
     * traverse the binary tree pre-order (parent-left-right) 
     * @param {function} cb - called with each node value
     * @param {object} [parent=root] - starting node
     */
    traversePreOrder(cb, parent = this.root) {
        if (parent !== null) {
            cb(parent.getValue());
            this.traversePreOrder(cb, parent.getLeft());
            this.traversePreOrder(cb, parent.getRight());
        }
    }

    /**
     * @public
     * traverse the binary tree post-order (left-right-parent) 
     * @param {function} cb - called with each node value
     * @param {object} [parent=root] - starting node
     */
    traversePostOrder(cb, parent = this.root) {
        if (parent !== null) {
            this.traversePostOrder(cb, parent.getLeft());
            this.traversePostOrder(cb, parent.getRight());
            cb(parent.getValue());
        }
    }

    /**
     * @public
     * traverse the binary tree
     * @param {function} cb - called with each node value
     * @param {string} type -'inOrder' | 'preOrder' | 'postOrder'
     */
    traverse(cb, type = 'inOrder') {
        switch(type) {
            case 'inOrder':
                this.traverseInOrder(cb);
                break;
            case 'preOrder':
                this.traversePreOrder(cb);
                break;
            case 'postOrder':
                this.traversePostOrder(cb);
                break;
            default:
                this.traverseInOrder(cb);
        }
    }

}

module.exports = BinarySearchTree;