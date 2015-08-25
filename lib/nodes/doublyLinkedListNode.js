/*!
 * datastructures-js
 * doublyLinkedListNode
 * Copyright(c) 2015 Eyas Ranjous <eyas@eyasranjous.info>
 * MIT Licensed
 */

var llNode = require('./linkedListNode');

function doublyLinkedListNode(prev_, next, value) {
    
    'use strict';

    var prototype = llNode(next, value),
        self = Object.create(prototype),
        prev = prev_;

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