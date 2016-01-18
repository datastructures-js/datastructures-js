var expect = require('chai').expect,
    di = require('../../di');

describe('iterator test', function() {

    'use strict';

    var elements = [],
        itr = di.getFactory('itr', 'iterator')(elements);

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

    it('should export iterator api', function() {
        var exportedIterator = itr.export();
        expect(exportedIterator.hasNext()).to.be.equal(false);
        expect(exportedIterator.next()).to.be.equal(null);
    });

});