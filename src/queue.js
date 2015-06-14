/**
 * Queue factory function
 *
 * returns an object with the main PriorityQueue operations
 *
 * @author Eyas Ranjous <eyas@eyasranjous.info>
 *
 */

'use strict';

function queue() {

    var elements = [];

    // return an object with the Queue operations
    return {

        isEmpty: function() {
            return elements.length > 0 ? false : true;
        },

        enqueue: function(el) {
            elements.push(el);
        },

        dequeue: function() {
            return !this.isEmpty() ? elements.shift() : null;
        },

        front: function() {
            return !this.isEmpty() ? elements[0] : null;
        },

        back: function() {
            return !this.isEmpty() ? elements[elements.length - 1] : null;
        } 
        
    }
}

module.exports = queue;