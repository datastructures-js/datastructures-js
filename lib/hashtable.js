/*!
 * datastructures-js
 * hashtable
 * Copyright(c) 2015 Eyas Ranjous <eyas@eyasranjous.info>
 * MIT Licensed
 */

'use strict';

module.exports = function() {

    var hashTablePair = require('./nodes/hashTablePair'),
        iterator = require('./iterators/hashtableIterator'),
        self = {},
        H = 31, // small primary number
        P = 104729, // big primary number
        elements = [], // hashtable array
        count = 0;

    // calculate a numeric hash for a value
    var hash = function(value) {
            value = value.toString();
            var sum = 0;
            for (var i = 0; i < value.length; i++) {
                sum = (H * sum) + value.charCodeAt(i);
            }
            return sum % P;
        },

        // chain the collisions (keys with similar hash) in an array
        chain = function(hash, key, data) {
            elements[hash].push(hashTablePair(key, data));
            count++;
        },

        // save a new key-value pair to the hashtable array
        save = function(hash, key, data) {
            elements[hash] = [hashTablePair(key, data)];
            count++;
        },

        // override an existing key value
        update = function(hash, key, data) {
            for (var i in elements[hash]) {
                var pair = elements[hash][i];
                if (pair.getKey() === key) {
                    pair.setValue(data);
                    return true;
                }
            }
            return false;
        };

    // adds or updates a key-value pair in the hashtable array
    self.put = function(key, data) {
        var h = hash(key);
        if (elements[hash] === undefined) {
            save(h, key, data);
        }
        else {
            if (!update(h, key, data)) {
                chain(h, key, data);
            }
        }
    };

    // return a pair value by a given key
    self.get = function(key) {
        var h = hash(key);
        if (elements[h] !== undefined) {
            for (var i in elements[h]) {
                var pair = elements[h][i];
                if (pair.getKey() === key) {
                    return pair.getValue();
                }
            }
        }
    };

    // remove a key-value pair by by a given key
    self.remove = function(key) {
        var h = hash(key);
        if (elements[h] !== undefined) {
            var length = elements[h].length;
            if (length === 1) {
                delete elements[h];
                count--;
            }
            else {
                for (var i = 0; i < length; i++) {
                    if (elements[h][i].getKey() === key) {
                        elements[h].splice(i, 1);
                        count--;
                    }
                }
            }
        }
    };

    // checks if a key exists in the hashtable array
    self.contains = function(key) {
        var h = hash(key);
        return elements[h] !== undefined ? true : false;
    };

    // returns an iterator on the hastable array
    self.iterator = function() {
        var it = iterator(elements);
        return it.export();
    };

    // return the number of pairs (elements) in the hashtable array
    self.count = function() {
        return count;
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
            count: that.count.bind(that)
        };
    };

    return self;
};