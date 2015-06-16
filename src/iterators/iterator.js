/**
 * Iterator factory function
 *
 * returns an iterator object
 *
 * @author Eyas Ranjous <eyas@eyasranjous.info>
 *
 */

function iterator(elements) {

    'use strict';

    var index = null,
        elements_ = elements;

    return {
        setIndex: function(i) {
            index = i;
        },

        getIndex: function() {
            return index;
        },

        setElements: function(e) {
            elements_ = e;
        },

        getElements: function() {
            return elements_;
        },

        current: function() {
            return (index !== null ? elements_[index] : null);
        },

        next: function() {
            if (index === null && elements_.length > 0) {
                index = 0;
                return true;
            }
            else if (index >= elements_.length - 1) {
                index = null;
                return false;
            }
            else {
                index++;
                return true;
            }
        },

        // get an object with the get methods only
        toReadOnly: function() {
            var that = this;
            return {
                current: that.current,
                next: that.next
            };
        }
    };
}

module.exports = iterator;