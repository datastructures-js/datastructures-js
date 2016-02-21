/*!
 * datastructures-js
 * set
 * Copyright(c) 2015 Eyas Ranjous <eyas.ranjous@gmail.com>
 * MIT Licensed
 */

'use strict';

module.exports = function(iterator) {

    var set = function() {

        var self = {},
            elements = [];

        self.add = function(element) {
            if (elements.indexOf(element) === -1) {
                elements.push(element);
            }
        };

        self.remove = function(element){ 
            var index = elements.indexOf(element);
            if (index !== -1) {
                elements.splice(index, 1);
            }
        };

        self.iterator = function() {
            return iterator(elements).export();
        };

        self.isEmpty =function() {
            return elements.length > 0 ? false : true;
        };

        self.size = function(){
            return elements.length;
        };

        self.contains = function(element) {
            return elements.indexOf(element) !== -1 ? true : false;
        };

        self.union = function(s) {
            var resultSet = s.clone();
            for (var i = 0; i < elements.length; i++) {
                resultSet.add(elements[i]);
            }
            return resultSet;
        };

        self.intersect = function(s) {
            var resultSet = set();
            for (var i = 0; i < elements.length; i++) {
                if (s.contains(elements[i])) {
                    resultSet.add(elements[i]);
                }
            }
            return resultSet;
        };

        self.difference = function(s) {
            var resultSet = set();
            for (var i = 0; i < elements.length; i++) {
                if (!s.contains(elements[i])) {
                    resultSet.add(elements[i]);
                }
            }
            return resultSet;  
        };

        self.isSubset = function(s) {
            if (elements.length <= s.size()) {
                for (var i = 0; i < elements.length; i++) {
                    if (!s.contains(elements[i])) {
                        return false;
                    }
                }
                return true;
            }
            return false;
        };

        self.clone = function() {
            var s = set();
            for (var i = 0; i < elements.length; i++) {
                s.add(elements[i]);
            }
            return s;
        };

        // export the set api
        self.export = function() {
            return this;
        };

        return self;
    };

    return set;
};