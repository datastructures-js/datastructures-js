/*!
 * datastructures-js
 * binarySearchTree
 * Copyright(c) 2015 Eyas Ranjous <eyas.ranjous@gmail.com>
 * MIT Licensed
 */

'use strict';

module.exports = function(bstNodeFactory) {

    var binarySearchTree = function() {

        var self = {
            root: null,
            nodesCount: 0
        },

        // get min value node in tree. aka last left node
        getMin = function(node) {
            var currentNode = node;
            while (currentNode.getLeft()) {
                currentNode = currentNode.getLeft();
            }
            return currentNode;
        },

        // get mmax value node in tree. aka last right node
        getMax = function(node) {
            var currentNode = node;
            while (currentNode.getRight()) {
                currentNode = currentNode.getRight();
            }
            return currentNode;
        };

        self.insert = function(value) {

            var node = bstNodeFactory(null, null, value),

            insertNode = function(currentNode, node) {
                if (node.getValue() > currentNode.getValue()) {
                    if (currentNode.getRight() === null) {
                        currentNode.setRight(node);
                    }
                    else {
                        insertNode(currentNode.getRight(), node);
                    }
                }
                else {
                    if (currentNode.getLeft() === null) {
                        currentNode.setLeft(node);
                    }
                    else {
                        insertNode(currentNode.getLeft(), node);
                    }
                }
            };

            if (this.root === null) {
                this.root = node;
            }
            else {
                insertNode(this.root, node);
            }
            this.nodesCount++;
        };

        self.remove = function(value) {
            // removing a node is not an easy task
            var removeNode = function(node, value) {
                if (!node) {
                    return null;
                }
                // when we get to the node, we have three possibilities: 
                if (value === node.getValue()) {

                    // 1. the node has no children
                    if (node.getLeft() === null && node.getRight() === null) {
                        self.nodesCount--;
                        return null;
                    }

                    // 2. the node has one child
                    if (node.getLeft() === null) {
                        self.nodesCount--;
                        return node.getRight();
                    }
                    if (node.getRight() === null) {
                        self.nodesCount--;
                        return node.getLeft();
                    }

                    // 3. the node has two children
                    var minNode = getMin(node.getRight()); // find min in the right
                    node.setValue(minNode.getValue()); // copy the min right value to the node
                    node.setRight(removeNode(node.getRight(), minNode.getValue())); // recursievely remove the right
                    return node;
                }
                // so the node is not what we are looking for, we search the tree recursievely
                else if (value < node.getValue()) {
                    node.setLeft(removeNode(node.getLeft(), value));
                    return node;
                }
                else {
                    node.setRight(removeNode(node.getRight(), value));
                    return node;
                }
            };

            this.root = removeNode(this.root, value);
        };

        self.traverse = function(order, func) {

            var inOrder = function(node, func) {
                if (node !== null) {
                    inOrder(node.getLeft(), func);
                    func.call(func, node.getValue());
                    inOrder(node.getRight(), func);
                }
            },

            preOrder = function(node, func) {
                if (node !== null) {
                    func.call(func, node.getValue());
                    preOrder(node.getLeft(), func);
                    preOrder(node.getRight(), func);
                }
            },

            postOrder = function(node, func) {
                if (node !== null) {
                    postOrder(node.getLeft(), func);
                    postOrder(node.getRight(), func);
                    func.call(func, node.getValue());
                }
            };

            switch(order) {
                case 'inOrder': 
                    inOrder(this.root, func);
                    break;
                case 'preOrder':
                    preOrder(this.root, func);
                    break;
                case 'postOrder':
                    postOrder(this.root, func);
                    break;
            }
        };

        self.find = function(value) {
            var current = this.root;
            while (current) {
                if (current.getValue() === value) {
                    return current.export();
                }
                current = value > current.getValue() ? 
                    current.getRight() : current.getLeft();
            }
            return null;
        };

        self.getRoot = function() {
            return this.root ? this.root.export() : null;
        };

        self.getMinValue = function() {
            return this.root ? getMin(this.root).getValue() : null;
        };

        self.getMaxValue = function() {
            return this.root ? getMax(this.root).getValue() : null;
        };

        self.count = function() {
            return this.nodesCount;
        };

        // export the binarySearchTree api
        self.export = function() {
            return this;
        };

        return self;       
    };

    return binarySearchTree;

};