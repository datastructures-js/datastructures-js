/*!
 * datastructures-js
 * binarySearchTree
 * Copyright(c) 2015 Eyas Ranjous <eyas@eyasranjous.info>
 * MIT Licensed
 */

'use strict';

module.exports = function() {

    var bstNode = require('./nodes/binaryTreeNode'),
        self = {};

    var insertNode = function(currentNode, n) {
        if (n.getValue() > currentNode.getValue()) {
            if (currentNode.getRight() === null) {
                currentNode.setRight(n);
            }
            else {
                insertNode(currentNode.getRight(), n);
            }
        }
        else {
            if (currentNode.getLeft() === null) {
                currentNode.setLeft(n);
            }
            else {
                insertNode(currentNode.getLeft(), n);
            }
        }
    };

    self.root = null;
    self.nodesCount = 0;

    // get min value node in tree. aka last left node
    self.getMin = function(node) {
        var currentNode = node;
        while (currentNode.getLeft()) {
            currentNode = currentNode.getLeft();
        }
        return currentNode;
    };

    // get mmax value node in tree. aka last right node
    self.getMax = function(node) {
        var currentNode = node;
        while (currentNode.getRight()) {
            currentNode = currentNode.getRight();
        }
        return currentNode;
    };

    // removing a node is not an easy task
    self.removeNode = function(node, value) {
        if (!node) {
            return null;
        }
        // when we get to the node, we have three possibilities: 
        if (value === node.getValue()) {

            // 1. the node has no children
            if (node.getLeft() === null && node.getRight() === null) {
                this.nodesCount--;
                return null;
            }

            // 2. the node has one child
            if (node.getLeft() === null) {
                this.nodesCount--;
                return node.getRight();
            }
            if (node.getRight() === null) {
                this.nodesCount--;
                return node.getLeft();
            }

            // 3. the node has two children
            var minNode = this.getMin(node.getRight()); // find min in the right
            node.setValue(minNode.getValue()); // copy the min right value to the node
            node.setRight(this.removeNode(node.getRight(), minNode.getValue())); // recursievely remove the right
            return node;
        }
        // so the node is not what we are looking for, we search the tree recursievely
        else if (value < node.getValue()) {
            node.setLeft(this.removeNode(node.getLeft(), value));
            return node;
        }
        else if (value > node.getValue()) {
            node.setRight(this.removeNode(node.getRight(), value));
            return node;
        }
    };

    self.insert = function(value) {
        var n = bstNode(null, null, value);
        if (this.root === null) {
            this.root = n;
        }
        else {
            insertNode(this.root, n);
        }
        this.nodesCount++;
    };

    self.remove = function(value) {
        this.root = this.removeNode(this.root, value);
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
        return this.root ? this.getMin(this.root).getValue() : null;
    };

    self.getMaxValue = function() {
        return this.root ? this.getMax(this.root).getValue() : null;
    };

    self.count = function() {
        return this.nodesCount;
    };

    // export the binarySearchTree api
    self.export = function() {
        var that = this;
        return {
            insert: that.insert.bind(that),
            getMinValue: that.getMinValue.bind(that),
            getMaxValue: that.getMaxValue.bind(that),
            find: that.find.bind(that),
            getRoot: that.getRoot.bind(that),
            remove: that.remove.bind(that),
            traverse: that.traverse.bind(that),
            count: that.count.bind(that)
        };
    };

    return self;
};