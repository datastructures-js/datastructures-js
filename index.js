/*!
 * datastructures-js
 * index (main module object)
 * Copyright(c) 2015 Eyas Ranjous <eyas@eyasranjous.info>
 * MIT Licensed
 */

'use strict';

module.exports = (function() {

    var self = {};

    var getObject = function(ds, args) {
        return require('lib/' + ds).apply(this, args).export();
    };

    self.stack = function() {
        return getObject('stack');
    };

    self.queue = function() {
        return getObject('queue');
    };

    self.priorityQueue = function() {
        return getObject('priorityQueue');
    };

    self.set = function() {
        return getObject('set');
    };

    self.linkedList = function() {
        return getObject('linkedList');
    };

    self.doublyLinkedList = function() {
        return getObject('doublyLinkedList');
    };

    self.hashtable = function() {
        return getObject('hashtable');
    };

    self.binarySearchTree = function() {
        return getObject('binarySearchTree');
    };

    self.directedGraph = function() {
        return getObject('directedGraph');
    };

    return self;

})();