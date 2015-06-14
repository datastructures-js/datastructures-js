/**
 * Hashtable factory function
 *
 * @author Eyas Ranjous <eyas@eyasranjous.info>
 *
 * @return {object} representing a hashtable
 */

'use strict';

function hashtable(length) {

    var H = 31, // primary number

        elements = null,

        hashes = [],

        currentHashIndex= null,

        isPrimary = function(num) {
            if (isNaN(num) || !isFinite(num) || num % 1 || num < 2) {
                return false
            }

            var sqrt = Math.sqrt(num);
            for (var i = 2; i <= sqrt; i++) {
                if (num%i == 0) {
                    return false;
                }
            }
            return true;
        },
        
        // calculate a numberic hash of a value
        hash = function(value) {
            value = value.toString();
            var sum = 0;
            for (var i = 0; i < value.length; i++) {
                sum = (H * sum) + value.charCodeAt(i);
            }
            return sum % elements.length;
        },

        chainCollisions = function(hash, key, data) {
            elements[hash].push(data);
            hashes[hash].push(key);
        },

        saveElement = function(hash, key, data) {
            elements[hash] = [data];
            hashes[hash] = [key];
        },

        init = function(length) {
            // length should be a primary number bigger than H
            // to guarantee hashes to be between 1 to length-1
            if (!isPrimary(length)) {
                throw {
                    message: 'hashtable must have a prime number length'
                }
            }
            elements = new Array(length);
        };

    //init the hashtable with length
    init(length);

    return {

        put: function(key, data) {
            var h = hash(key);
            if (elements[h] === undefined) {
                saveElement(h, key, data);
            }
            else if (hashes[h].indexOf(key) === -1) {
                // identeical hash exists for this  so we chain it
                chainCollisions(h, key, data);
            }
            else {
                // overwrite element
                this.remove(key);
                saveElement(h, key, data);
            }
        },

        get: function(key) {
            var h = hash(key);

            if (elements[h] !== undefined) {
                return elements[h].length == 1 ? 
                    elements[h][0] : elements[h];
            }
            
            return elements[h];
        },

        remove: function(key) {
            var h = hash(key);
            delete elements[h];
            delete hashes[h];
        },

        contains: function(key) {
            var h = hash(key);

            if (elements[h] !== undefined && hashes[h].indexOf(key) !== -1) {
                return true;
            }

            return false;
        },

        iterator: function() {
            var hashesKeys = Object.keys(hashes);
            return {
                current: function() {
                    if (currentHashIndex !== null) {
                        var key = hashes[hashesKeys[currentHashIndex]],
                            value = elements[hashesKeys[currentHashIndex]];
                        return {
                            key: key.length == 1 ? key[0] : key,
                            value: value.length == 1 ? value[0] : value
                        }
                    }
                    return null;
                },

                next: function() {
                    var elementsKeys = Object.keys(elements);
                    if (currentHashIndex === null && elementsKeys.length > 0) {
                        currentHashIndex = 0;
                        return true;
                    }
                    else if (currentHashIndex >= elementsKeys.length - 1) {
                        currentHashIndex = null;
                        return false;
                    }
                    else {
                        currentHashIndex++;
                        return true;
                    }
                }
            }
        },

        getCollidedKeys: function() {
            var collisions = [],
                keys = Object.keys(hashes);
            for (var i = 0; i < keys.length; i++) {
                if (hashes[keys[i]].length > 1) {
                    collisions.push(hashes[keys[i]]);
                }
            }
            return collisions;
        },

        length: function() {
            return Object.keys(elements).length;
        }

    }
}

module.exports = hashtable;