/**
 * Stack factory function
 *
 * returns an object with the main Set operations 
 *
 * @author Eyas Ranjous <eyas@eyasranjous.info>
 *
 */

function stack() {

    'use strict';

    // local variables (private properties)
    var top = 0,
        elements = [];

    // return object with stack operations
    return {
        push: function(el) {
            elements[top++] = el;
        },

        pop: function() {
            return top > 0 ? elements.splice(--top, 1)[0] : null;
        },

        peek: function() {
            return top > 0 ? elements[top-1] : null;
        },

        length: function() {
            return top;
        }
    };
}

module.exports = stack;