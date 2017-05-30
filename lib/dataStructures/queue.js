/*!
 * datastructures-js
 * queue
 * Copyright(c) 2015 Eyas Ranjous <eyas.ranjous@gmail.com>
 * MIT Licensed
 */

 'use strict';

 module.exports = function() {

    var queue = function() {
        
        var self = {
            offset: 0,
            elements: []
        };
        
        self.isEmpty = function() {
            return this.elements.length === 0;
        };

        self.length = function() {
            return this.elements.length - this.offset;
        };

        self.enqueue = function(el) {
            this.elements.push(el);
        };

        self.dequeue = function() {
            if (!this.isEmpty()) {
                var first = this.elements[this.offset];
                this.offset++;
                if (this.offset * 2 >= this.length()){
                  this.elements  = this.elements.slice(this.offset);
                  this.offset = 0;
                }
                return first;
            }
            return null;
        };

        self.front = function() {
            return !this.isEmpty() ? this.elements[this.offset] : null;
        };

        self.back = function() {
            return !this.isEmpty() ? this.elements[this.elements.length - 1] : null;
        };

        // export the queue api
        self.export = function() {
            var that = this;
            return {
                isEmpty: that.isEmpty.bind(that),
                length: that.length.bind(that),
                enqueue: that.enqueue.bind(that),
                dequeue: that.dequeue.bind(that),
                front: that.front.bind(that),
                back: that.back.bind(that),
            };
        };

        return self;
    };

    return queue;

 };