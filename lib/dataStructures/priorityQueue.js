/*!
 * datastructures-js
 * priorityQueue
 * Copyright(c) 2015 Eyas Ranjous <eyas@eyasranjous.info>
 * MIT Licensed
 */

'use strict';

module.exports = function(queue) {

    var priorityQueue = function() {
        
        var self = Object.create(queue),

        // determine the top priority element
        getTopPriorityIndex = function() {
            var  length = self.elements.length;
            if (length > 0) {
                var topPriorityIndex = 0;
                var topPriority = self.elements[0].priority;
                for (var i = 1; i < length; i++) {
                    var priority = self.elements[i].priority;
                    if (priority < topPriority) {
                        topPriorityIndex = i;
                        topPriority = priority;
                    }
                }
                return topPriorityIndex;
            }
            return -1;      
        };

        self.enqueue = function(element, priority) {
            if (isNaN(parseInt(priority))) {
                throw {
                    message: 'priority should be a number'
                };
            }
            this.elements.push({ // element is pushed as an object with a priority
                element: element,
                priority: priority
            });
        };

        self.dequeue = function() {
            var topPriorityIndex = getTopPriorityIndex();
            return topPriorityIndex > -1 ? 
                this.elements.splice(topPriorityIndex, 1)[0].element : null;
        };

        self.front = function() {
            return !this.isEmpty() ? this.elements[0].element : null;
        };

        self.back = function() {
            return !self.isEmpty() ? 
                this.elements[this.elements.length - 1].element : null;
        };

        return self;        
    };

    return priorityQueue;

};