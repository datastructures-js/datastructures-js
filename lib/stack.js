/*!
 * datastructures-js
 * stack
 * Copyright(c) 2015 Eyas Ranjous <eyas@eyasranjous.info>
 * MIT Licensed
 */

function stack() {

    'use strict';

    var self = {},
        top = 0,
        elements = [];

    self.isEmpty = function() {
        return top > 0 ? false : true;
    };

    self.length = function() {
        return top;
    };
    
    self.push = function(el) {
        elements[top++] = el;
    };

    self.pop =  function() {
        return top > 0 ? elements.splice(--top, 1)[0] : null;
    };

    self.peek = function() {
        return top > 0 ? elements[top-1] : null;
    };

    // export the stack api
    self.export = function() {
        var that = this;
        return {
            isEmpty: that.isEmpty.bind(that),
            length: that.length.bind(that),
            push: that.push.bind(that),
            pop: that.pop.bind(that),
            peek: that.peek.bind(that)
        };
    };

    return self;
}

module.exports = stack;