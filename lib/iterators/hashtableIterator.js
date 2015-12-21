/*!
 * datastructures-js
 * hashtableIterator
 * Copyright(c) 2015 Eyas Ranjous <eyas@eyasranjous.info>
 * MIT Licensed
 */

'use strict';

module.exports = function(elements) {

    var iterator = require('./iterator'),
        prototype = iterator(elements), 
        self = Object.create(prototype);

    self.chainIterator = null;

    self.currentHash = function() {
        return Object.keys(elements)[this.index];
    };

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
            this.chainIterator = iterator(prototype.next());
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