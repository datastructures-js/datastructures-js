var expect = require('chai').expect,
    di = require('../../di');

describe('sumCharsHash test', function() {

    'use strict';

    var sumCharsHash = di.getFactory('hlp', 'sumCharsHash', [3, 13]);

    it('should hash a value', function() {
        expect(sumCharsHash('eyas')).to.be.equal(10);
        expect(sumCharsHash(12)).to.be.equal(2);
    });

});