/*!
 * datastructures-js
 * dependency container
 * Copyright(c) 2015 Eyas Ranjous <eyas.ranjous@gmail.com>
 * MIT Licensed
 */

'use strict';

var modules = {
    itr: require('./lib/iterators'),
    nd: require('./lib/nodes'),
    ds: require('./lib/dataStructures'),
    hlp: require('./lib/helpers')
};

module.exports = (function() {

    var self = {};

    self.exportObject = function(obj) {
        return obj.export();
    };

    self.getFactory = function(module, name, args) {
        return modules[module][name].apply(null, args);
    };

    self.getHtIteratorFactory = function() {
        var iteratorFactory = this.getFactory('itr', 'iterator');
        return this.getFactory('itr', 'hashtableIterator', [iteratorFactory]);
    };

    self.getDllNodeFactory = function() {
        var llNodeFactory = this.getFactory('nd', 'linkedListNode');
        return this.getFactory('nd', 'doublyLinkedListNode', [llNodeFactory]);
    };

    self.getBstNodeFactory = function() {
        var dllNodeFactory = this.getDllNodeFactory();
        return this.getFactory('nd', 'binaryTreeNode', [dllNodeFactory]);
    };

    self.getSetFactory = function() {
        var iteratorFactory = this.getFactory('itr', 'iterator');
        return this.getFactory('ds', 'set', [iteratorFactory]);
    };

    self.getPriorityQueueFactory = function() {
        var queue = this.getFactory('ds', 'queue')();
        return this.getFactory('ds', 'priorityQueue', [queue]);
    };

    self.getLinkedListFactory = function() {
        var llNodeFactory = this.getFactory('nd', 'linkedListNode');
        return this.getFactory('ds', 'linkedList', [llNodeFactory]);
    };

    self.getDoublyLinkedListFactory = function() {
        var linkedList = this.getFactory('ds', 'linkedList')(),
            dllNodeFactory = this.getDllNodeFactory();
        return this.getFactory('ds', 'doublyLinkedList', [dllNodeFactory, linkedList]);
    };

    self.getHashtableFactory = function() {
        var htPairFactory = this.getFactory('nd', 'hashTablePair'),
            hashFunction = this.getFactory('hlp', 'sumCharsHash', [31, 104729]),
            htIteratorFactory = this.getHtIteratorFactory();
        return this.getFactory('ds', 'hashtable', 
            [htPairFactory, htIteratorFactory, hashFunction]);
    };

    self.getBinarySearchTreeFactory = function() {
        var bstNodeFactory = this.getBstNodeFactory();
        return this.getFactory('ds', 'binarySearchTree', [bstNodeFactory]);
    };

    return self;
}());