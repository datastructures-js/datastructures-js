/*!
 * datastructures-js
 * stack
 * Copyright(c) 2015 Eyas Ranjous <eyas.ranjous@gmail.com>
 * MIT Licensed
 */
 
'use strict';

module.exports = function() {

    var stack = function() {
        
        var self = {},
            top = 0,
            elements = [];

        self.isEmpty = function() {
            return top > 0 ? false : true;
        };

        self.length = function() {
            return top;
        };
        
        self.push = function(element) {
            elements[top++] = element;
        };

        self.pop =  function() {
            return top > 0 ? elements.splice(--top, 1)[0] : null;
        };

        self.peek = function() {
            return top > 0 ? elements[top-1] : null;
        };

        // export the stack api
        self.export = function() {
            return this;
        };

        return self;
    };

    return stack;
};