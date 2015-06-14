/**
 * Stack factory function
 *
 * @author Eyas Ranjous <eyas@eyasranjous.info>
 *
 * @return {object} representing a stack
 */

'use strict';

function stack() {

    // local variables (private properties)
    var top = 0,
        elements = [];

    // return object with stack operations
    return {
        push: function(el) {
            elements[top++] = el;
        },

        pop: function() {
            return top > 0 ? elements.splice(--top, 1)[0] : null
        },

        peek: function() {
            return top > 0 ? elements[top-1] : null;
        },

        length: function() {
            return top;
        }
    }
}

module.exports = stack;