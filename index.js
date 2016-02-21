/*!
 * datastructures-js
 * index (main module object)
 * Copyright(c) 2015 Eyas Ranjous <eyas.ranjous@gmail.com>
 * MIT Licensed
 */

'use strict';

var di = require('./di');

module.exports = (function() {

    var self = {};

    self.stack = function() {
        var stack = di.getFactory('ds', 'stack')();
        return di.exportObject(stack);
    };

    self.queue = function() {
        var queue = di.getFactory('ds', 'queue')();
        return di.exportObject(queue);
    };

    self.priorityQueue = function() {
        var priorityQueue = di.getPriorityQueueFactory()();
        return di.exportObject(priorityQueue);
    };

    self.set = function() {
        var set = di.getSetFactory()();
        return di.exportObject(set);
    };

    self.linkedList = function() {
        var linkedList = di.getLinkedListFactory()();
        return di.exportObject(linkedList);
    };

    self.doublyLinkedList = function() {
        var doublyLinkedList = di.getDoublyLinkedListFactory()();
        return di.exportObject(doublyLinkedList);
    };

    self.hashtable = function() {
        var hashtable = di.getHashtableFactory()();
        return di.exportObject(hashtable);
    };

    self.binarySearchTree = function() {
        var binarySearchTree = di.getBinarySearchTreeFactory()();
        return di.exportObject(binarySearchTree);
    };

    self.directedGraph = function() {
       var directedGraph = di.getFactory('ds', 'directedGraph')();
        return di.exportObject(directedGraph);
    };

    return self;

}());