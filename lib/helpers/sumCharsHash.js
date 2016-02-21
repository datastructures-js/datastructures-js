/*!
 * datastructures-js
 * helpers/sumCharsHash
 * Copyright(c) 2015 Eyas Ranjous <eyas.ranjous@gmail.com>
 * MIT Licensed
 */

'use strict';

module.exports = function(H, P) {

    var sumCharsHash = function(value) {
        
        var sum = 0;

        value = value.toString();
        for (var i = 0; i < value.length; i++) {
            sum = (H * sum) + value.charCodeAt(i);
        }

        return sum % P;
    };

    return sumCharsHash;

};