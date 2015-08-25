var expect = require('chai').expect,
    hashTablePair = require('../../lib/nodes/hashTablePair');
    hashtableIterator = require('../../lib/iterators/hashtableIterator');

describe('hashtableIterator test', function() {

    var elements = [],
        itr = hashtableIterator(elements);

    it('should have a null next first', function() {
        expect(itr.hasNext()).to.be.equal(false);
        expect(itr.next()).to.be.equal(null);
    });

    it('should iterate over the elements', function() {
        var el = [];

        elements[11] = [hashTablePair('a', '111111')];
        elements[12] = [hashTablePair('b', '222222'),  hashTablePair('c', '333333')];

        while (itr.hasNext()) {
            var pair = itr.next();
            el.push({
                key: pair.getKey(),
                value: pair.getValue()
            });
        }

        expect(el).to.be.eql([
            {
                key: 'a',
                value: '111111'
            },
            {
                key: 'b',
                value: '222222'
            },
            {
                key: 'c',
                value: '333333'
            }
        ]);
    });

});