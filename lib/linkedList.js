/*!
 * datastructures-js
 * linkedList
 * Copyright(c) 2015 Eyas Ranjous <eyas@eyasranjous.info>
 * MIT Licensed
 */

var llNode = require('./nodes/linkedListNode');

function linkedList() {

    'use strict';

    var self = {};

    self.head = null;

    self.nodesCount = 0;

    self.findNode = function(val) {
        var currentNode = this.head;
        while (currentNode) {
            if (currentNode.getValue() === val) {
                return currentNode;
            }
            currentNode = currentNode.getNext();
        }

        return null;
    };

    self.findBeforeNode = function(val) {
        var currentNode = this.head,
            foundNode = null;

        while (currentNode.getNext()) {
            if (currentNode.getNext().getValue() === val) {
                foundNode = currentNode;
                break;
            }
            currentNode = currentNode.getNext();
        }

        return foundNode;
    };
        
    self.addFirst = function(val) {
        this.head = this.head === null ? llNode(null, val) : llNode(this.head, val);
        this.nodesCount++;
    };

    self.addLast = function(val) {
        if (this.head === null) {
            this.head = llNode(null, val);
        }
        else {
            var lastNode = this.head;
            while (lastNode.getNext()) {
                lastNode = lastNode.getNext();
            } 
            lastNode.setNext(llNode(null, val));
        }
        this.nodesCount++;
    };

    self.addAfter = function(val, newVal) {
        var foundNode = self.findNode(val);
        if (foundNode === null) {
            throw {
                message: 'node ' + val + ' not found'
            };
        }

        if (foundNode.getNext() === null) {
            foundNode.setNext(llNode(null, newVal));
        }
        else {
            var newNode = llNode(foundNode.getNext(), newVal);
            foundNode.setNext(newNode);
        }

       this.nodesCount++;   
        
    };

    self.addBefore = function(val, newVal) {
        var foundNode = self.findNode(val);
        if (foundNode === null) {
            throw {
                message: 'node ' + val + ' not found'
            };
        }

        if (foundNode === this.head) {
            this.addFirst(newVal);
            return;
        }

        var before = this.head;
        while (before.getNext()) {
            if (before.getNext() === foundNode) {
                this.addAfter(before.getValue(), newVal);
                return;
            }
            before = before.getNext();
        }   
        
    };

    self.find = function(val) {
        var foundNode = this.findNode(val);
        return foundNode !== null ? foundNode.export() : null;
    };

    self.findBefore = function(val) {
        var foundNode = this.findBeforeNode(val);
        return foundNode !== null ? foundNode.export() : null;
    };

    self.findFirst = function() {
        return this.head.export();
    };

    self.findLast = function() {
        var currentNode = this.head;
        while (currentNode && currentNode.getNext()) {
            currentNode = currentNode.getNext();
        }

        return currentNode !== null ? currentNode.export() : null;
    };

    self.removeFirst = function() {
        if (this.head !== null) {
            this.head = this.head.getNext() === null ? null : this.head.getNext();
            this.nodesCount--;
        }
    };

    self.removeLast = function() {
        if (this.head !== null) {
            if (this.head.getNext() === null) {
                this.head = null;
            }
            else {
                var currentNode = this.head;
                while (currentNode.getNext()) {
                    if (currentNode.getNext().getNext() === null) {
                        currentNode.setNext(null);
                        break;
                    }
                    currentNode = currentNode.getNext();
                }
            }
            this.nodesCount--;
        }
    };

    self.remove = function(val) {
        var foundNode = this.findNode(val);

        if (foundNode === null) {
            throw {
                message: 'node ' + val + ' not found'
            };
        }

        if (foundNode === this.head) {
            this.removeFirst();
            return;
        }

        if (foundNode.getNext() === null) {
            this.removeLast();
            return;
        }

        var beforeNode = this.findBeforeNode(val);
        beforeNode.setNext(foundNode.getNext()); // link before to next which detaches node from list
        this.nodesCount--;
        
    };

    self.count = function() {
        return this.nodesCount;
    };

    self.clear = function() {
        this.head = null;
        this.nodesCount = 0;
    };

    // export the linkedList api
    self.export = function() {
        var that = this;
        return {
            addFirst: that.addFirst.bind(that),
            addLast: that.addLast.bind(that),
            addAfter: that.addAfter.bind(that),
            addBefore: that.addBefore.bind(that),
            find: that.find.bind(that),
            findFirst: that.findFirst.bind(that),
            findLast: that.findLast.bind(that),
            findBefore: that.findBefore.bind(that),
            remove: that.remove.bind(that),
            removeFirst: that.removeFirst.bind(that),
            removeLast: that.removeLast.bind(that),
            count: that.count.bind(that),
            clear: that.clear.bind(that)
        };
    };

    return self;
}

module.exports = linkedList;