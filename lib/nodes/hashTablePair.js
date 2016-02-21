/*!
 * datastructures-js
 * hashTablePair
 * Copyright(c) 2015 Eyas Ranjous <eyas.ranjous@gmail.com>
 * MIT Licensed
 */

'use strict';

module.exports = function() {

    var hashTablePair = function(key_, value_) {
        
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
    };

    return hashTablePair;
};