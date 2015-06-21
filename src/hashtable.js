/*!
 * datastructures-js
 * hashtable
 * Copyright(c) 2015 Eyas Ranjous <eyas@eyasranjous.info>
 * MIT Licensed
 */

function hashtable(length) {

    'use strict';
    
    var self = {},

        iterator = require('./iterators/hashtableIterator'),
    
        H = 31, // primary number

        elements = null,

        hashes = [],

        isPrimary = function(num) {
            if (isNaN(num) || !isFinite(num) || num % 1 || num < 2) {
                return false;
            }

            var sqrt = Math.sqrt(num);
            for (var i = 2; i <= sqrt; i++) {
                if (num % i === 0) {
                    return false;
                }
            }
            return true;
        },

        init = function(length) {
            // length should be a primary number bigger than H
            // to guarantee hashes to be between 1 to length-1
            if (!isPrimary(length)) {
                throw {
                    message: 'hashtable must have a prime number length'
                };
            }
            elements = new Array(length);
        }(length); //init the hashtable with length

    // calculate a numberic hash of a value
    self.hash = function(value) {
        value = value.toString();
        var sum = 0;
        for (var i = 0; i < value.length; i++) {
            sum = (H * sum) + value.charCodeAt(i);
        }
        return sum % elements.length;
    };

    self.chainCollisions = function(hash, key, data) {
        elements[hash].push(data);
        hashes[hash].push(key);
    };

    self.saveElement = function(hash, key, data) {
        elements[hash] = [data];
        hashes[hash] = [key];
    };

    self.put = function(key, data) {
        var h = this.hash(key);
        if (elements[h] === undefined) {
            this.saveElement(h, key, data);
        }
        else if (hashes[h].indexOf(key) === -1) {
            // identeical hash exists for this  so we chain it
            this.chainCollisions(h, key, data);
        }
        else {
            // overwrite element
            this.remove(key);
            this.saveElement(h, key, data);
        }
    };

    self.get = function(key) {
        var h = this.hash(key);
        if (elements[h] !== undefined) {
            return elements[h].length === 1 ? 
                elements[h][0] : elements[h];
        }
        
        return elements[h];
    };

    self.remove = function(key) {
        var h = this.hash(key);
        delete elements[h];
        delete hashes[h];
    };

    self.contains = function(key) {
        var h = this.hash(key);

        if (elements[h] !== undefined && hashes[h].indexOf(key) !== -1) {
            return true;
        }

        return false;
    };

    self.iterator = function() {
        var itr = iterator(elements, hashes);
        return itr.export();
    };

    self.getCollidedKeys = function() {
        var collisions = [],
            keys = Object.keys(hashes);
        for (var i = 0; i < keys.length; i++) {
            if (hashes[keys[i]].length > 1) {
                collisions.push(hashes[keys[i]]);
            }
        }
        return collisions;
    };

    self.length = function() {
        return Object.keys(elements).length;
    };

    // export the hashtable api
    self.export = function() {
        var that = this;
        return {
            put: that.put.bind(that),
            get: that.get.bind(that),
            contains: that.contains.bind(that),
            iterator: that.iterator.bind(that),
            remove: that.remove.bind(that),
            length: that.length.bind(that),
            getCollidedKeys: that.getCollidedKeys.bind(that)
        };
    };

    return self;

}

module.exports = hashtable;