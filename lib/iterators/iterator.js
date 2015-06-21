/*!
 * datastructures-js
 * iterator
 * Copyright(c) 2015 Eyas Ranjous <eyas@eyasranjous.info>
 * MIT Licensed
 */

function iterator(elements) {

    'use strict';

    var self = {};

    self.index = null;

    self.elements = elements;

    self.current = function() {
        return (this.index !== null ? this.elements[this.index] : null);
    };

    self.next = function() {
        if (this.index === null && this.elements.length > 0) {
            this.index = 0;
            return true;
        }
        else if (this.index >= this.elements.length - 1) {
            this.index = null;
            return false;
        }
        else {
            this.index++;
            return true;
        }
    };

    // export the iterator api
    self.export = function() {
        var that = this;
        return {
            current: that.current.bind(that),
            next: that.next.bind(that)
        };
    };

    return self;

}

module.exports = iterator;