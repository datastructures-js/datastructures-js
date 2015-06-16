    /**
 * Hashtable Iterator factory function
 *
 * returns hashtable iterator object
 * extends iterator object
 *
 * @author Eyas Ranjous <eyas@eyasranjous.info>
 *
 */

function hashtableIterator(elements, hashes) {

    'use strict';

    var getKeys = function(elements) {
            return Object.keys(elements);
        },

        iterator = require('./iterator')(getKeys(elements)), // get parent object

        htIterator = Object.create(iterator); // create an object with iterator as prototype
        
    // override current method to return a key-value object
    htIterator.current = function() {
        var hashesKeys = Object.keys(hashes);
        if (htIterator.getIndex() !== null) {
            var key = hashes[hashesKeys[iterator.getIndex()]],
                value = elements[hashesKeys[iterator.getIndex()]];
            return {
                key: key.length === 1 ? key[0] : key,
                value: value.length === 1 ? value[0] : value
            };
        }
        return null;    
    };

    // decorate next method to refresh the elements keys
    htIterator.next = function() {
        iterator.setElements(getKeys(elements)); // refresh the keys
        return iterator.next(); // reuse next of iterator
    };
    

    return htIterator;
}

module.exports = hashtableIterator;