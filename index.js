/*!
 * datastructures-js
 * index (main module object)
 * Copyright(c) 2015 Eyas Ranjous <eyas@eyasranjous.info>
 * MIT Licensed
 */

'use strict';

module.exports = (function() {

    var getObject = function(ds, args) {
        return require('lib/' + ds).apply(this, args).export();
    };

    return  {
        stack: function() {
            return getObject('stack');
        },

        queue: function() {
            return getObject('queue');
        },

        priorityQueue: function() {
            return getObject('priorityQueue');
        },

        set: function() {
            return getObject('set');
        },

        linkedList: function() {
            return getObject('linkedList');
        },

        doublyLinkedList: function() {
            return getObject('doublyLinkedList');
        },

        hashtable: function() {
            return getObject('hashtable');
        },

        binarySearchTree: function() {
            return getObject('binarySearchTree');
        },

        directedGraph: function() {
            return getObject('directedGraph');
        }
    };
})();