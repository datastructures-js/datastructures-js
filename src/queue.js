/**
 * Queue factory function
 *
 * @author Eyas Ranjous <eyas@eyasranjous.info>
 *
 * @return {object} representing a queue
 */

'use strict';

function queue() {

    var elements = [];

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