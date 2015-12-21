/*!
 * datastructures-js
 * hashTablePair
 * Copyright(c) 2015 Eyas Ranjous <eyas@eyasranjous.info>
 * MIT Licensed
 */

'use strict';

module.exports = function(key_, value_) {
    
    var linkedListNode = require('./linkedListNode'),
        self = {},
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
};