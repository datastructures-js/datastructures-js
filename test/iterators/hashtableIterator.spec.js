var expect = require('chai').expect,
    hashtableIterator = require('../../src/iterators/hashtableIterator');

describe('hashtableIterator test', function() {

    var elements = [],
        hashes = [],
        itr = hashtableIterator(elements, hashes).export();

    it('should have a null current first', function() {
        expect(itr.current()).to.be.equal(null);
    });

    it('should iterate over the elements', function() {
        var e = [];
        
        hashes[11] = [1];
        hashes[12] = [2];
        hashes[13] = [3];

        elements[11] = 'a';
        elements[12] = 'b';
        elements[13] = 'c';

        while (itr.next()) {
            e.push(itr.current());
        }

        expect(e).to.be.eql([
            {
                key: 1,
                value: 'a'
            },            
            {
                key: 2,
                value: 'b'
            },           
            {
                key: 3,
                value: 'c'
            },
        ]);
    });

});