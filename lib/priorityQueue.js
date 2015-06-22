/*!
 * datastructures-js
 * priorityQueue
 * Copyright(c) 2015 Eyas Ranjous <eyas@eyasranjous.info>
 * MIT Licensed
 */

function priorityQueue() {

    'use strict';

    var prototype = require('./queue')(), // queue object as the prototype
        self = Object.create(prototype);

    // determine the top priority element
    self.getTopPriorityIndex = function() {
        var  length = this.elements.length;
        if (length > 0) {
            var pIndex = 0;
            var p = this.elements[0].priority;

            for (var i = 1; i < length; i++) {
                var priority = this.elements[i].priority;
                if (priority < p) {
                    pIndex = i;
                    p = priority;
                }
            }
            return pIndex;
        }
        return -1;      
    };

    self.enqueue = function(el, p) {
        p = parseInt(p);
        if (isNaN(p)) {
            throw {
                message: 'priority should be an integer'
            };
        }
        this.elements.push({ // element is pushed as an object with a priority
            element: el,
            priority: p
        });
    };

    self.dequeue = function() {
        var pIndex = self.getTopPriorityIndex();
        return pIndex > -1 ? this.elements.splice(pIndex, 1)[0].element : null;
    };

    self.front = function() {
        return !this.isEmpty() ? this.elements[0].element : null;
    };

    self.back = function() {
        return !self.isEmpty() ? this.elements[this.elements.length - 1].element : null;
    };

    return self;
}

module.exports = priorityQueue;