/*!
 * datastructures-js
 * queue
 * Copyright(c) 2015 Eyas Ranjous <eyas@eyasranjous.info>
 * MIT Licensed
 */

function queue() {

    'use strict';

    var self = {};

    self.elements = [];
    
    self.isEmpty = function() {
        return this.elements.length > 0 ? false : true;
    };

    self.enqueue = function(el) {
        this.elements.push(el);
    };

    self.dequeue = function() {
        return !this.isEmpty() ? this.elements.shift() : null;
    };

    self.front = function() {
        return !this.isEmpty() ? this.elements[0] : null;
    };

    self.back = function() {
        return !this.isEmpty() ? this.elements[this.elements.length - 1] : null;
    };

    // export the queue api
    self.export = function() {
        var that = this;
        return {
            isEmpty: that.isEmpty.bind(that),
            enqueue: that.enqueue.bind(that),
            dequeue: that.dequeue.bind(that),
            front: that.front.bind(that),
            back: that.back.bind(that)
        };
    };

    return self;
}

module.exports = queue;