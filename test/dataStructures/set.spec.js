var expect = require('chai').expect,
    di = require('../../di');

describe('set test', function() {

    'use strict';

    var s1 = di.getSetFactory()(),
        s2 = di.getSetFactory()();

    it('should be empty sets', function() {
        expect(s1.isEmpty()).to.be.equal(true);
        expect(s2.isEmpty()).to.be.equal(true);
    });

    it('should add elements to the set', function() {
        s1.add(1);
        s1.add(2);
        s1.add(3);
        s1.add(4);

        expect(s1.isEmpty()).to.be.equal(false);
        expect(s1.size()).to.be.equal(4);
        expect(s1.contains(1)).to.be.equal(true);
        expect(s1.contains(2)).to.be.equal(true);
        expect(s1.contains(3)).to.be.equal(true);
        expect(s1.contains(4)).to.be.equal(true);
    });



    it('should remove element from the set', function() {
        s1.remove(1);

        expect(s1.size()).to.be.equal(3);
        expect(s1.contains(1)).to.be.equal(false);
        expect(s1.contains(2)).to.be.equal(true);
        expect(s1.contains(3)).to.be.equal(true);
        expect(s1.contains(4)).to.be.equal(true);
    });

    it('should not affect the set when removing a non existing element', function() {
        s1.remove(33);
        expect(s1.size()).to.be.equal(3);
    });

    it('should iterate over the set', function() {
        var itr = s1.iterator(),
            elements = [];

        while (itr.hasNext()) {
            elements.push(itr.next());
        }

        expect(itr.hasNext()).to.be.equal(false);
        expect(itr.next()).to.be.equal(null);
        expect(elements.length).to.be.equal(3);
        expect(elements).to.have.members([2, 3, 4]);
    });

    it('should union sets', function() {
        s2.add(3);
        s2.add(4);
        s2.add(5);
        s2.add(6);

        var s = s1.union(s2);

        expect(s.size()).to.be.equal(5);
        expect(s.contains(2)).to.be.equal(true);
        expect(s.contains(3)).to.be.equal(true);
        expect(s.contains(4)).to.be.equal(true);
        expect(s.contains(5)).to.be.equal(true);
        expect(s.contains(6)).to.be.equal(true);
    });

    it('should intersect sets', function() {
        var s = s1.intersect(s2);

        expect(s.size()).to.be.equal(2);
        expect(s.contains(3)).to.be.equal(true);
        expect(s.contains(4)).to.be.equal(true);
    });

    it('should difference sets', function() {
        var d1 = s1.difference(s2),
            d2 = s2.difference(s1);

        expect(d1.size()).to.be.equal(1);
        expect(d1.contains(2)).to.be.equal(true);
        expect(d2.size()).to.be.equal(2);
        expect(d2.contains(5)).to.be.equal(true);
        expect(d2.contains(6)).to.be.equal(true);
    });

    it('should check if a set is a subset of another one', function() {
        s1.remove(2);

        expect(s1.isSubset(s2)).to.be.equal(true);
        expect(s2.isSubset(s1)).to.be.equal(false);

        s2.remove(3);
        s2.remove(4);

        expect(s2.isSubset(s1)).to.be.equal(false);
    });

});