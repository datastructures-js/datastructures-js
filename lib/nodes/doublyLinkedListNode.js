/*!
 * datastructures-js
 * doublyLinkedListNode
 * Copyright(c) 2015 Eyas Ranjous <eyas.ranjous@gmail.com>
 * MIT Licensed
 */

'use strict';

module.exports = function(llNodeFactory) {

    var doublyLinkedListNode = function(prev_, next, value) {
        
        var prototype = llNodeFactory(next, value),
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
    };

    return doublyLinkedListNode;
};