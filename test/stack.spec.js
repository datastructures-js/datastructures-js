var expect = require('chai').expect,
    stack = require('../lib/stack');

describe('stack test', function() {

    var s = stack().export();

    it('should have length of 0', function() {
        expect(s.length()).to.be.equal(0);
    });

    it('sould return null when peek on empty stack', function() {
        expect(s.peek()).to.be.equal(null);
    });
    
    it('should push elements', function() {
        s.push(5);
        s.push(7);
        s.push(12);
        expect(s.length()).to.be.equal(3);
    });

    it('should peek on top element', function() {
        expect(s.peek()).to.be.equal(12);
    });

    it('should pop elements', function() {
        expect(s.pop()).to.be.equal(12);
        expect(s.pop()).to.be.equal(7);
        expect(s.pop()).to.be.equal(5);
    });

    it('should have different length after pop', function() {
        expect(s.length()).to.be.equal(0);
    });

    it('sould return null when pop from empty stack', function() {
        expect(s.pop()).to.be.equal(null);
    });

});