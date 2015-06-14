/**
 * LinkedList factory function
 *
 * @author Eyas Ranjous <eyas@eyasranjous.info>
 *
 * @return {object} representing a linkedList
 */

'use strict';

function linkedList() {

    // local variables (private properties)
    var head,
        count,

        // node object
        node = function(next_, value_) {
            var next = next_,
                value = value_,

                toReadOnly = function(n) {
                    return function() {
                        if (n !== null) {
                            return {
                                getNext: n.toReadOnly().getNext,
                                getValue: n.getValue
                            }
                        }
                        return null;
                    }
                }

            return {
                setNext: function(n) {
                    next = n;
                },
                setValue: function(v) {
                    value = v;
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

        findBefore = function(val) {
            var currentNode = head,
                foundNode = null;

            while (currentNode.getNext()) {
                if (currentNode.getNext().getValue() === val) {
                    foundNode = currentNode;
                    break;
                }
                currentNode = currentNode.getNext();
            }

            return foundNode;
        },

        init = function() {
            head = null;
            count = 0;
        };

    // init the linked list
    init();

    // return object with linkedList operations
    return {
        
        addFirst: function(val) {
            head = (head === null ? node(null, val) : node(head, val));
            count++;
        },

        addLast: function(val) {
            if (head === null) {
                head = node(null, val);
            }
            else {
                var lastNode = head;
                while (lastNode.getNext()) {
                    lastNode = lastNode.getNext()
                } 
                lastNode.setNext(node(null, val));
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

            if (node_.getNext() === null) {
                node_.setNext(node(null, newVal));
            }
            else {
                var newNode = node(node_.getNext(), newVal);
                node_.setNext(newNode);
            }

           count++;   
            
        },

        addBefore: function(val, newVal) {
            var node_ = find(val);
            if (node_ === null) {
                throw {
                    message: 'node ' + val + ' not found'
                }
            }

            if (node_ === head) {
                this.addFirst(newVal);
                return;
            }

            var before = head;
            while (before.getNext()) {
                if (before.getNext() === node_) {
                    this.addAfter(before.getValue(), newVal);
                    return;
                }
                before = before.getNext();
            }   
            
        },

        find: function(val) {
            var foundNode = find(val);
            return foundNode !== null ? foundNode.toReadOnly() : null;
        },

        findBefore: function(val) {
            var foundNode = findBefore(val);
            return foundNode !== null ? foundNode.toReadOnly() : null;
        },

        findFirst: function() {
            return head;
        },

        findLast: function() {
            var currentNode = head;
            while (currentNode && currentNode.getNext()) {
                currentNode = currentNode.getNext();
            }

            return currentNode !== null ? currentNode.toReadOnly() : null;
        },

        removeFirst: function() {
            if (head !== null) {
                head = head.getNext() === null ? null : head.getNext();
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
                        if (currentNode.getNext().getNext() === null) {
                            currentNode.setNext(null);
                            break;
                        }
                        currentNode = currentNode.getNext();
                    }
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

            if (node_.getNext() === null) {
                this.removeLast();
                return;
            }

            var beforeNode = findBefore(val);
            beforeNode.setNext(node_.getNext()); // link before to next which detaches node from list
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

module.exports = linkedList;