/*!
 * datastructures-js
 * doublyLinkedList
 * Copyright(c) 2015 Eyas Ranjous <eyas@eyasranjous.info>
 * MIT Licensed
 */

'use strict';

module.exports = function(dllNodeFactory, linkedList) {

    return function() {

        var self = Object.create(linkedList);

        self.addFirst = function(val) {
            if (this.head === null) {
                this.head = dllNodeFactory(null, null, val);
            }
            else {
                this.head.setPrev(dllNodeFactory(null, this.head, val));
                this.head = this.head.getPrev();
            }
            this.nodesCount++;
        };

        self.addLast = function(val) {
            if (this.head === null) {
                this.head = dllNodeFactory(null, null, val);
            }
            else {
                var lastNode = this.head;
                while (lastNode.getNext()) {
                    lastNode = lastNode.getNext();
                } 
                lastNode.setNext(dllNodeFactory(lastNode, null, val));
            }
            this.nodesCount++;
        };

        self.addAfter = function(val, newVal) {
            var foundNode = this.findNode(val);
            if (foundNode === null) {
                throw {
                    message: 'node ' + val + ' not found'
                };
            }
            if (foundNode !== null) {
                var recentNext = foundNode.getNext();
                var newNode = dllNodeFactory(foundNode, recentNext, newVal);
                foundNode.setNext(newNode);
                if (recentNext !== null) {
                    recentNext.setPrev(newNode);
                }
                this.nodesCount++;
            }
        };

        self.addBefore = function(val, newVal) {
            var foundNode = this.findNode(val);
            if (foundNode === null) {
                throw {
                    message: 'node ' + val + ' not found'
                };
            }
            var recentBefore = foundNode.getPrev();
            var newNode = dllNodeFactory(recentBefore, foundNode, newVal);
            foundNode.setPrev(newNode);
            if (recentBefore !== null) {
                recentBefore.setNext(newNode);
            }
            this.nodesCount++;
            
        };

        self.findBefore = function(val) {
            var foundNode = this.findNode(val);
            return foundNode ? foundNode.getPrev() : null;
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
                        currentNode = currentNode.getNext();
                    }
                    currentNode.getPrev().setNext(null); //separate last node
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

            var prev = foundNode.getPrev(),
                next = foundNode.getNext();
                
            prev.setNext(next);
            if (next !== null) {
                next.setPrev(prev);
            }

            this.nodesCount--;
            
        };

        return self;        
    };

};