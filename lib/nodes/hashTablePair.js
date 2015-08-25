/*!
 * datastructures-js
 * hashTablePair
 * Copyright(c) 2015 Eyas Ranjous <eyas@eyasranjous.info>
 * MIT Licensed
 */

var linkedListNode = require('./linkedListNode');

function hashTablePair(key_, value_) {
    
    'use strict';

    var self = {},
        value = value_,
        key = key_;

    self.getKey = function() {
        return key;
    };

    self.setValue = function(v) {
        value = v;
    };

    self.getValue = function() {
        return value;
    };

    // export the hashTablePair api
    self.export = function() {
        var that = this;
        return {
            getKey: that.getKey,
            getValue: that.getValue
        };
    };

    return self;
}

module.exports = hashTablePair;