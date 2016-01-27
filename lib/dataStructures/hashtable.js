/*!
 * datastructures-js
 * hashtable
 * Copyright(c) 2015 Eyas Ranjous <eyas@eyasranjous.info>
 * MIT Licensed
 */

'use strict';

module.exports = function(htPairFactory, htIteratorFactory, hashFunction) {

    var hashtable = function() {
        
        var self = {},
            elements = [], // hashtable array
            count = 0,

        // chain the collisions (keys with similar hash) in an array
        chain = function(hash, key, data) {
            elements[hash].push(htPairFactory(key, data));
            count++;
        },

        // save a new key-value pair to the hashtable array
        save = function(hash, key, data) {
            elements[hash] = [htPairFactory(key, data)];
            count++;
        },

        // override an existing key value
        update = function(hash, key, data) {
            var i, pair;
            for (i in elements[hash]) {
                pair = elements[hash][i];
                if (pair.getKey() === key) {
                    pair.setValue(data);
                    return true;
                }
            }
            return false;
        };

        // adds or updates a key-value pair in the hashtable array
        self.put = function(key, data) {
            var hash = hashFunction(key);
            if (elements[hash] === undefined) {
                save(hash, key, data);
            }
            else if (!update(hash, key, data)) {
                chain(hash, key, data);
            }
        };

        // return a pair value by a given key
        self.get = function(key) {
            var i, pair, 
            hash = hashFunction(key);
            if (elements[hash] !== undefined) {
                for (i in elements[hash]) {
                    pair = elements[hash][i];
                    if (pair.getKey() === key) {
                        return pair.getValue();
                    }
                }
            }
        };

        // remove a key-value pair by by a given key
        self.remove = function(key) {
            var i, length,
            hash = hashFunction(key);
            if (elements[hash] !== undefined) {
                length = elements[hash].length;
                if (length === 1) {
                    delete elements[hash];
                    count--;
                }
                else {
                    for (i = 0; i < length; i++) {
                        if (elements[hash][i].getKey() === key) {
                            elements[hash].splice(i, 1);
                            count--;
                        }
                    }
                }
            }
        };

        // checks if a key exists in the hashtable array
        self.contains = function(key) {
            var hash = hashFunction(key);
            return elements[hash] !== undefined ? true : false;
        };

        // returns an iterator on the hastable array
        self.iterator = function() {
            return htIteratorFactory(elements).export();
        };

        // return the number of pairs (elements) in the hashtable array
        self.count = function() {
            return count;
        };

        // export the hashtable api
        self.export = function() {
            return this;
        };

        return self;
    };

    return hashtable;

};