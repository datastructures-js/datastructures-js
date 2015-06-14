/**
 * BinarySearchTree factory function
 *
 * @author Eyas Ranjous <eyas@eyasranjous.info>
 *
 * @return {object} representing a binarySearchTree
 */

'use strict';

function binarySearchTree() {

    // tree node object
    var node = function(value_, left_, right_) {
            var left = left_,
                right = right_,
                value = value_,

                toReadOnly = function(n) {
                    return function() {
                        if (n !== null) {
                            return {
                                getLeft: n.toReadOnly().getLeft,
                                getRight: n.toReadOnly().getRight,
                                getValue: n.getValue
                            }
                        }
                        return null;
                    }
                }

            return {
                setLeft: function(l) {
                    left = l;
                },
                setRight: function(r) {
                    right = r;
                },
                setValue: function(v) {
                    value = v;
                },
                getLeft: function() {
                    return left;
                },
                getRight: function() {
                    return right;
                },
                getValue: function() {
                    return value;
                },
                // used to return a node object to the client
                toReadOnly: function() {
                    var that = this; // the node's return object
                    return { // implements a read only interface
                        getLeft: toReadOnly(that.getLeft()),
                        getRight: toReadOnly(that.getRight()),
                        getValue: that.getValue
                    }
                }
            }
        },

        // get min value in tree. aka last left node
        getMin = function(node) {
            var currentNode = node;
            while (currentNode.getLeft()) {
                currentNode = currentNode.getLeft();
            }
            return currentNode.toReadOnly();
        },

        // get mmax value in tree. aka last right node
        getMax = function(node) {
            var currentNode = node;
            while (currentNode.getRight()) {
                currentNode = currentNode.getRight();
            }
            return currentNode.toReadOnly();
        },

        // removing a node is not an easy task
        removeNode = function(node, value) {
            if (!node) {
                return null;
            }
            // when we get to the node, we have three possibilities: 
            if (value === node.getValue()) {

                // 1. the node has no children
                if (node.getLeft() === null && node.getRight() === null) {
                    return null;
                }

                // 2. the node has one child
                if (node.getLeft() === null) {
                    return node.getRight();
                }
                if (node.getRight() === null) {
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
            else if (value > node.getValue()) {
                node.setRight(removeNode(node.getRight(), value));
                return node;
            }
        },

        root = null,
        count = 0;

    return {

        insert: function(value) {
            var n = node(value, null, null);

            if (root === null) {
                root = n;
            }
            else {
                var current = root;
                while (current) {
                    if (value > current.getValue()) {
                        if (current.getRight() === null) {
                            current.setRight(n);
                            break;
                        }
                        current = current.getRight();
                    }
                    else {
                        if (current.getLeft() === null) {
                            current.setLeft(n);
                            break;
                        }
                        current = current.getLeft();
                    }
                }
            }
            count++;
        },

        remove: function(value) {
            root = removeNode(root, value);
            count--;
        },

        traverse: function(order, func) {
            var elements = [],

                inOrder = function(node, func) {
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
                    inOrder(root, func);
                    break;
                case 'preOrder':
                    preOrder(root, func);
                    break;
                case 'postOrder':
                    postOrder(root, func);
                    break;
            }
        },

        find: function(value) {
            var current = root;
            while (current) {
                if (current.getValue() === value) {
                    return current.toReadOnly();
                }
                current = value > current.getValue() ? 
                    current.getRight() : current.getLeft();
            }
            return null;
        },

        getRoot: function() {
            return root;
        },

        getMinValue: function() {
            return root ? getMin(root).getValue() : null;
        },

        getMaxValue: function() {
            return root ? getMax(root).getValue() : null;
        },

        count: function() {
            return count;
        }
    }
}

module.exports = binarySearchTree;