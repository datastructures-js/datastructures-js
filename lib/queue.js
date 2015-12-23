/*!
 * datastructures-js
 * queue
 * Copyright(c) 2015 Eyas Ranjous <eyas@eyasranjous.info>
 * MIT Licensed
 */

 'use strict';

 module.exports = function() {

    var self = {
        elements: []
    };
    
    self.isEmpty = function() {
        return this.elements.length > 0 ? false : true;
    };

    self.length = function() {
        return this.elements.length;
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
        return this;
    };

    return self;
 };