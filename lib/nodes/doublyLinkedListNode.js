/*!
 * datastructures-js
 * doublyLinkedListNode
 * Copyright(c) 2015 Eyas Ranjous <eyas@eyasranjous.info>
 * MIT Licensed
 */

function doublyLinkedListNode(prev, next, value) {
    
    'use strict';

    var prototype = require('./linkedListNode')(next, value),
        self = Object.create(prototype);
        prev = prev;

    self.setPrev = function(p) {
        prev = p;
    };

    self.getPrev = function() {
        return prev;
    };

    // export the connected (next & prev) nodes api
    self.exportConnectedNode = function(node) {
        return function() {
            if (node !== null) {
                return {
                    getNext: node.export().getNext,
                    getPrev: node.export().getPrev,
                    getValue: node.export().getValue
                };
            }
            return null;
        };
    };

    // export the doublyLinkedListNode api
    self.export = function() {
        var that = this;
        return {
            getNext: that.exportConnectedNode(that.getNext()),
            getPrev: that.exportConnectedNode(that.getPrev()),
            getValue: that.getValue
        };
    };

    return self;
}

module.exports = doublyLinkedListNode;