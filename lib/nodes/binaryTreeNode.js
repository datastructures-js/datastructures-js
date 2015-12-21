/*!
 * datastructures-js
 * binaryTreeNode
 * Copyright(c) 2015 Eyas Ranjous <eyas@eyasranjous.info>
 * MIT Licensed
 */

'use strict';

module.exports = function(left, right, value) {
    
    var dllNode = require('./doublyLinkedListNode'),
        prototype = dllNode(left, right, value),
        self = Object.create(prototype);

    self.setLeft = self.setPrev;
    self.setRight = self.setNext;
    self.getLeft = self.getPrev;
    self.getRight = self.getNext;

    // export the binaryTreeNode api (reuse the doublyLinkedListNode export)
    self.export = function() {
        var exp = prototype.export();
        return {
            getRight: exp.getNext,
            getLeft: exp.getPrev,
            getValue: exp.getValue
        };
    };

    return self;
};