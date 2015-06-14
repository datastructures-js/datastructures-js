/**
 * PriorityQueue factory function
 *
 * @author Eyas Ranjous <eyas@eyasranjous.info>
 *
 * @return {object} representing a priorityQueue
 */

'use strict';

function priorityQueue() {

    var elements = [],

        // determine the top priority element
        getTopPriorityIndex = function() {
            if (elements.length > 0) {
                var pIndex = 0;
                var p = elements[0].priority;
                
                for (var i = 1; i < elements.length; i++) {
                    if (elements[i].priority < p) {
                        pIndex = i;
                        p = elements[i].priority;
                    }
                }
                return pIndex;
            }
            return null;
        };

    return {

        isEmpty: function() {
            return elements.length > 0 ? false : true;
        },

        enqueue: function(el, p) {
            p = parseInt(p);
            if (isNaN(p)) {
                throw {
                    message: 'priority should be an integer'
                }
            }

            elements.push({ // element is pushed as an object with a priority
                element: el,
                priority: p
            });
        },

        dequeue: function() {
            var pIndex = getTopPriorityIndex();
            return elements.splice(pIndex, 1)[0].element;
        },

        front: function() {
            return !this.isEmpty() ? elements[0].element : null;
        },

        back: function() {
            return !this.isEmpty() ? elements[elements.length - 1].element : null;
        }

    }
}

module.exports = priorityQueue;