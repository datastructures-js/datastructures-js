/*!
 * datastructures-js
 * doublyLinkedList
 * Copyright(c) 2015 Eyas Ranjous <eyas@eyasranjous.info>
 * MIT Licensed
 */

function doublyLinkedList() {

    'use strict';

    var node = require('./nodes/doublyLinkedListNode'),
        prototype = require('./linkedList')(),
        self = Object.create(prototype);

        
    self.addFirst = function(val) {
        if (this.head === null) {
            this.head = node(null, null, val);
        }
        else {
            this.head.setPrev(node(null, this.head, val));
            this.head = this.head.getPrev();
        }
        this.count++;
    };

    self.addLast = function(val) {
        if (this.head === null) {
            this.head = node(null, null, val);
        }
        else {
            var lastNode = this.head;
            while (lastNode.getNext()) {
                lastNode = lastNode.getNext();
            } 
            lastNode.setNext(node(lastNode, null, val));
        }
        this.count++;
    };

    self.addAfter = function(val, newVal) {
        var node_ = this.findNode(val);
        if (node_ === null) {
            throw {
                message: 'node ' + val + ' not found'
            };
        }
        if (node_ !== null) {
            var recentNext = node_.getNext();
            var newNode = node(node_, recentNext, newVal);
            node_.setNext(newNode);
            if (recentNext !== null) {
                recentNext.setPrev(newNode);
            }
            this.count++;
        }
    };

    self.addBefore = function(val, newVal) {
        var node_ = this.findNode(val);
        if (node_ === null) {
            throw {
                message: 'node ' + val + ' not found'
            };
        }
        var recentBefore = node_.getPrev();
        var newNode = node(recentBefore, node_, newVal);
        node_.setPrev(newNode);
        if (recentBefore !== null) {
            recentBefore.setNext(newNode);
        }
        this.count++;
        
    };

    self.findBefore = function(node) {
        return node.getPrev();
    };

    self.removeFirst = function() {
        if (this.head !== null) {
            if (this.head.getNext() === null) {
                this.head = null;
            }
            else {
                var second = this.head.getNext();
                second.setPrev(null);
                this.head = second;
            }
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
                    currentNode = currentNode.getNext();
                }
                currentNode.getPrev().setNext(null); //separate last node
            }
            this.count--;
        }
    };

    self.remove = function(val) {
        var node_ = this.findNode(val);
        if (node_ === null) {
            throw {
                message: 'node ' + val + ' not found'
            };
        }

        if (node_ === this.head) {
            this.removeFirst();
            return;
        }

        var prev = node_.getPrev(),
            next = node_.getNext();
            
        prev.setNext(next);
        if (next !== null) {
            next.setPrev(prev);
        }

        this.count--;
        
    };

    return self;

}

module.exports = doublyLinkedList;