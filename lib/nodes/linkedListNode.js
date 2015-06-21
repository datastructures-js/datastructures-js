/*!
 * datastructures-js
 * linkedListNode implementation
 * Copyright(c) 2015 Eyas Ranjous <eyas@eyasranjous.info>
 * MIT Licensed
 */

function linkedListNode(next, value) {
    
    'use strict';

    var self = {};
        next = next;
        value = value;

    self.setNext = function(n) {
        next = n;
    };
    
    self.setValue = function(v) {
        value = v;
    };

    self.getNext = function() {
        return next;
    };
    
    self.getValue = function() {
        return value;
    };

    // export the connected (next) node api
    self.exportConnectedNode = function(node) {
        return function() {
            if (node !== null) {
                return {
                    getNext: node.export().getNext,
                    getValue: node.export().getValue
                };
            }
            return null;
        };
    };

    // export the linkedListNode api
    self.export = function() {
        var that = this; // because context will change in the return
        return {
            getNext: that.exportConnectedNode(that.getNext()),
            getValue: that.getValue
        };
    };

    return self;

}

module.exports = linkedListNode;