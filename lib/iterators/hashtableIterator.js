/*!
 * datastructures-js
 * hashtableIterator
 * Copyright(c) 2015 Eyas Ranjous <eyas.ranjous@gmail.com>
 * MIT Licensed
 */

'use strict';

module.exports = function(iteratorFactory) {

    var hashtableIterator = function(elements) {
        
        var prototype = iteratorFactory(elements), 
            self = Object.create(prototype);

        self.chainIterator = null;

        self.hasNext = function() {
            var length = Object.keys(elements).length;
            if ((length > 0 && this.index < length) || 
                (this.chainIterator && this.chainIterator.hasNext())) {
                return true;
            }
            return false;
        };

        self.next = function() {
            if (!this.chainIterator && this.hasNext()) {
                this.chainIterator = iteratorFactory(prototype.next());
            }
            if (this.chainIterator && this.chainIterator.hasNext()) {
                return this.chainIterator.next();
            }
            else if (this.hasNext() && !this.chainIterator.hasNext()) {
                this.chainIterator = null;
                return this.next();
            }

            return null;
        };
        
        return self;
    };

    return hashtableIterator;
};