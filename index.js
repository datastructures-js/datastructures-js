var src = './lib';

// export objects api
var getObject = function(ds, args) {
    return require(src + '/' + ds + '.js').apply(this, args).export();
};

module.exports = {

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

    hashtable: function(length) {
    	return getObject('hashtable', [length]);
    },

    binarySearchTree: function() {
        return getObject('binarySearchTree');
    },

    directedGraph: function() {
        return getObject('directedGraph');
    }
    
};