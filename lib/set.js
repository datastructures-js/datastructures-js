/*!
 * datastructures-js
 * set
 * Copyright(c) 2015 Eyas Ranjous <eyas@eyasranjous.info>
 * MIT Licensed
 */

'use strict';

module.exports = function() {

    var set = function() {
            var iterator = require('./iterators/iterator'),
                self = {},
                elements = [],
                itr = iterator(elements);

            self.add = function(el) {
                if (elements.indexOf(el) === -1) {
                    elements.push(el);
                }
            };

            self.remove = function(el){ 
                var index = elements.indexOf(el);
                if (index !== -1) {
                    elements.splice(index, 1);
                }
            };

            self.iterator = function() {
                return itr.export();
            };

            self.isEmpty =function() {
                return elements.length > 0 ? false : true;
            };

            self.size = function(){
                return elements.length;
            };

            self.contains = function(el) {
                return elements.indexOf(el) !== -1 ? true : false;
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

    return set();
};