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
    
    self.push = function(el) {
        elements[top++] = el;
    };

    self.pop =  function() {
        return top > 0 ? elements.splice(--top, 1)[0] : null;
    };

    self.peek = function() {
        return top > 0 ? elements[top-1] : null;
    };

    self.length = function() {
        return top;
    };

    // export the stack api
    self.export = function() {
        var that = this;
        return {
            push: that.push,
            pop: that.pop,
            peek: that.peek,
            length: that.length
        };
    };

    return self;
}

module.exports = stack;