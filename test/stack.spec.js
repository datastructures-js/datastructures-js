var expect = require('chai').expect,
    stack = require('../lib/stack');

describe('stack test', function() {

    var s = stack().export();

    describe('when the stack is empty', function() {

        it('.isEmpty() should return true', function() {
            expect(s.isEmpty()).to.be.equal(true);
        });

        it('.length() should return 0', function() {
            expect(s.length()).to.be.equal(0);
        });

        it('.peek() and .pop() should return null', function() {
            expect(s.peek()).to.be.equal(null);
            expect(s.pop()).to.be.equal(null);
        });

        it('.push() should push elements', function() {
            s.push(5);
            s.push(7);
            s.push(12);
        });

    });

    describe('when the stack is not empty', function() {

        it('.isEmpty() should return false', function() {
            expect(s.isEmpty()).to.be.equal(false);
        });

        it('.length() should return a number bigger than 0', function() {
            expect(s.length()).to.be.equal(3);
        });

        it('.peek() should return the top element', function() {
            expect(s.peek()).to.be.equal(12);
        });

        it('.pop() should pop the top element', function() {
            expect(s.pop()).to.be.equal(12);
            expect(s.length()).to.be.equal(2);
            expect(s.peek()).to.be.equal(7);
        });

    });

});