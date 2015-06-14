/**
 * Set factory function
 *
 * returns an object with the main Set operations 
 *
 * @author Eyas Ranjous <eyas@eyasranjous.info>
 *
 */

'use strict';

function set() {

    // local variables (private properties)
    var elements = [],
        currentIndex = null;

    // return an object with the Set operations
    return {

        add: function(el) {
            if (elements.indexOf(el) === -1) {
                elements.push(el);
            }
        },

        remove: function(el){ 
            var index = elements.indexOf(el);
            if (index !== -1) {
                elements.splice(index, 1);
            }
        },

        iterator: function() {
            return {
                current: function() {
                    return (currentIndex !== null ? elements[currentIndex] : null);
                },

                next: function() {
                    if (currentIndex === null && elements.length > 0) {
                        currentIndex = 0;
                        return true;
                    }
                    else if (currentIndex >= elements.length - 1) {
                        currentIndex = null;
                        return false;
                    }
                    else {
                        currentIndex++;
                        return true;
                    }
                }
            }
        },

        isEmpty: function() {
            return elements.length > 0 ? false : true;
        },

        size: function(){
            return elements.length;
        },

        contains: function(el) {
            return elements.indexOf(el) !== -1 ? true : false;
        },

        union: function(s) {
            var resultSet = s.clone();

            for (var i = 0; i < elements.length; i++) {
                resultSet.add(elements[i]);
            }

            return resultSet;
        },

        intersect: function(s) {
            var resultSet = set();

            for (var i = 0; i < elements.length; i++) {
                if (s.contains(elements[i])) {
                    resultSet.add(elements[i]);
                }
            }

            return resultSet;
        },

        difference: function(s) {
            var resultSet = set();

            for (var i = 0; i < elements.length; i++) {
                if (!s.contains(elements[i])) {
                    resultSet.add(elements[i]);
                }
            }

            return resultSet;  
        },

        isSubset: function(s) {
            if (elements.length <= s.size()) {
                for (var i = 0; i < elements.length; i++) {
                    if (!s.contains(elements[i])) {
                        return false;
                    }
                }
                return true;
            }
            return false;
        },

        clone: function() {
            var s = set();
            for (var i = 0; i < elements.length; i++) {
                s.add(elements[i]);
            }
            return s;
        }

    }
}

module.exports = set;