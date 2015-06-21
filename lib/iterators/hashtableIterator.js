/*!
 * datastructures-js
 * hashtableIterator
 * Copyright(c) 2015 Eyas Ranjous <eyas@eyasranjous.info>
 * MIT Licensed
 */

function hashtableIterator(elements, hashes) {

    'use strict';

    var getKeys = function(elements) {
            return Object.keys(elements);
        },
        elements_ = elements,
        prototype = require('./iterator')(getKeys(elements)), // create iterator object
        self = Object.create(prototype); // use iterator as prototype
        
    // override `current` method in prototype to return a key-value object
    self.current = function() {
        var hashesKeys = getKeys(hashes);

        if (this.index !== null) {
            var key = hashes[hashesKeys[this.index]],
                value = elements_[hashesKeys[this.index]];
            return {
                key: key.length === 1 ? key[0] : key,
                value: value.length === 1 ? value[0] : value
            };
        }
        return null;    
    };

    // decorate next method to refresh the elements keys
    self.next = function() {
        this.elements = getKeys(elements_); // refresh elements
        return prototype.next.call(this); // reuse the prototype method
    };
    
    return self;
}

module.exports = hashtableIterator;