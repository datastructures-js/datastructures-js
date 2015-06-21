/*!
 * datastructures-js
 * linkedList
 * Copyright(c) 2015 Eyas Ranjous <eyas@eyasranjous.info>
 * MIT Licensed
 */

function linkedList() {

    'use strict';

    var self = {},
        node = require('./nodes/linkedListNode');

    self.head = null;

    self.count = 0;

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
        this.head = this.head === null ? node(null, val) : node(this.head, val);
        this.count++;
    };

    self.addLast = function(val) {
        if (this.head === null) {
            this.head = node(null, val);
        }
        else {
            var lastNode = this.head;
            while (lastNode.getNext()) {
                lastNode = lastNode.getNext();
            } 
            lastNode.setNext(node(null, val));
        }
        this.count++;
    };

    self.addAfter = function(val, newVal) {
        var n = self.findNode(val);
        if (n === null) {
            throw {
                message: 'node ' + val + ' not found'
            };
        }

        if (n.getNext() === null) {
            n.setNext(node(null, newVal));
        }
        else {
            var newNode = node(n.getNext(), newVal);
            n.setNext(newNode);
        }

       this.count++;   
        
    };

    self.addBefore = function(val, newVal) {
        var node = self.findNode(val);
        if (node === null) {
            throw {
                message: 'node ' + val + ' not found'
            };
        }

        if (node === this.head) {
            this.addFirst(newVal);
            return;
        }

        var before = this.head;
        while (before.getNext()) {
            if (before.getNext() === node) {
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
        return this.head;
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
            this.count--;
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
            this.count--;
        }
    };

    self.remove = function(val) {
        var node = this.findNode(val);

        if (node === null) {
            throw {
                message: 'node ' + val + ' not found'
            };
        }

        if (node === this.head) {
            this.removeFirst();
            return;
        }

        if (node.getNext() === null) {
            this.removeLast();
            return;
        }

        var beforeNode = this.findBeforeNode(val);
        beforeNode.setNext(node.getNext()); // link before to next which detaches node from list
        this.count--;
        
    };

    self.length = function() {
        return this.count;
    };

    self.clear = function() {
        this.head = null;
        this.count = 0;
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
            remove: that.remove.bind(that),
            removeFirst: that.removeFirst.bind(that),
            removeLast: that.removeLast.bind(that),
            length: that.length.bind(that),
            clear: that.clear.bind(that)
        };
    };

    return self;
}

module.exports = linkedList;