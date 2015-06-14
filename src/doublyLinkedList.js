/**
 * DoublyLinkedList factory function
 *
 * @author Eyas Ranjous <eyas@eyasranjous.info>
 *
 * @return {object} representing a doublyLinkedList
 */

'use strict';

function doublyLinkedList() {

    // local variables (private properties)
    var head,
        count,

        node = function(prev_, next_, value_) {
            var prev = prev_,
                next = next_,
                value = value_,

                toReadOnly = function(n) {
                    return function() {
                        if (n !== null) {
                            return {
                                getPrev: n.toReadOnly().getPrev,
                                getNext: n.toReadOnly().getNext,
                                getValue: n.getValue
                            }
                        }
                        return null;
                    }
                }

            return {
                setPrev: function(p) {
                    prev = p;
                },
                setNext: function(n) {
                    next = n;
                },
                setValue: function(v) {
                    value = v;
                },
                getPrev: function() {
                    return prev;
                },
                getNext: function() {
                    return next;
                },
                getValue: function() {
                    return value;
                },
                // used to return a node object to the client
                toReadOnly: function() {
                    var that = this; // the node's return object
                    return { // implements a read only interface
                        getPrev: toReadOnly(that.getPrev()),
                        getNext: toReadOnly(that.getNext()),
                        getValue: that.getValue
                    }
                }
            }
        },

        find = function(val) {
            var currentNode = head;
            while (currentNode) {
                if (currentNode.getValue() === val) {
                    return currentNode;
                }
                currentNode = currentNode.getNext();
            }
            return null;
        },

        init = function() {
            head = null;
            count = 0;
        };

    // init the doubly linked list
    init();

    // return object with doublyLinkedList operations
    return {
        
        addFirst: function(val) {
            if (head === null) {
                head = node(null, null, val);
            }
            else {
                head.setPrev(node(null, head, val));
                head = head.getPrev();
            }
            count++;
        },

        addLast: function(val) {
            if (head === null) {
                head = node(null, null, val);
            }
            else {
                var lastNode = head;
                while (lastNode.getNext()) {
                    lastNode = lastNode.getNext();
                } 
                lastNode.setNext(node(lastNode, null, val));
            }
            count++;
        },

        addAfter: function(val, newVal) {
            var node_ = find(val);
            if (node_ === null) {
                throw {
                    message: 'node ' + val + ' not found'
                }
            }
            if (node_ !== null) {
                var recentNext = node_.getNext();
                var newNode = node(node_, recentNext, newVal);
                node_.setNext(newNode);
                if (recentNext !== null) {
                    recentNext.setPrev(newNode);
                }
                count++;
            }
        },

        addBefore: function(val, newVal) {
            var node_ = find(val);
            if (node_ === null) {
                throw {
                    message: 'node ' + val + ' not found'
                }
            }
            var recentBefore = node_.getPrev();
            var newNode = node(recentBefore, node_, newVal);
            node_.setPrev(newNode);
            if (recentBefore !== null) {
                recentBefore.setNext(newNode);
            }
            count++;
            
        },

        find: function(val) {
            var foundNode = find(val);
            return foundNode !== null ? foundNode.toReadOnly() : null;
        },

        findFirst: function() {
            return head;
        },

        findLast: function(val) {
            var currentNode = head;
            while (currentNode && currentNode.getNext()) {
                currentNode = currentNode.getNext();
            }

            return currentNode !== null ? currentNode.toReadOnly() : null;
        },

        removeFirst: function() {
            if (head !== null) {
                if (head.getNext() === null) {
                    head = null;
                }
                else {
                    var second = head.getNext();
                    second.setPrev(null);
                    head = second;
                }
                count--;
            }
        },

        removeLast: function() {
            if (head !== null) {
                if (head.getNext() === null) {
                    head = null;
                }
                else {
                    var currentNode = head;
                    while (currentNode.getNext()) {
                        currentNode = currentNode.getNext();
                    }
                    currentNode.getPrev().setNext(null); //separate last node
                }
                count--;
            }
        },

        remove: function(val) {
            var node_ = find(val);
            if (node_ === null) {
                throw {
                    message: 'node ' + val + ' not found'
                }
            }

            if (node_ === head) {
                this.removeFirst();
                return;
            }

            var prev = node_.getPrev(),
                next = node_.getNext();
                
            prev.setNext(next);
            if (next !== null) {
                next.setPrev(prev);
            }

            count--;
            
        },

        length: function() {
            return count;
        },

        clear: function() {
            init();
        }

    }
}

module.exports = doublyLinkedList;