/*!
 * datastructures-js
 * iterator
 * Copyright(c) 2015 Eyas Ranjous <eyas.ranjous@gmail.com>
 * MIT Licensed
 */

'use strict';

module.exports = function() {

    var iterator = function(elements) {
        
        var self = {
            index: 0
        };

        self.hasNext = function() {
            var length = Object.keys(elements).length;
            if (length > 0 && this.index < length) {
                return true;
            }
            return false;
        };

        self.next = function() {
            var keys = Object.keys(elements);
            if (this.hasNext()) {
                var el = elements[keys[this.index]];
                this.index++;
                return el;
            }
            return null;
        };

        // export the iterator api
        self.export = function() {
            var that = this;
            return {
                hasNext: that.hasNext.bind(that),
                next: that.next.bind(that)
            };
        };

        return self;
    };

    return iterator;

};