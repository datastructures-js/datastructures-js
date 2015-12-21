describe('iterator test', function() {

    'use strict';
    
    var expect = require('chai').expect,
        iterator = require('../../lib/iterators/iterator'),
        elements = [],
        itr = iterator(elements).export();

    it('should have a next', function() {
        expect(itr.hasNext()).to.be.equal(false);
        expect(itr.next()).to.be.equal(null);
    });

    it('should iterate over the elements', function() {
        var e = [];

        elements.push(1);
        elements.push(2);
        elements.push(3);

        while (itr.hasNext()) {
            e.push(itr.next());
        }

        expect(e).to.be.eql(elements);
    });

});