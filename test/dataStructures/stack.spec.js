var expect = require('chai').expect,
    di = require('../../di');

describe('stack test', function() {

    'use strict';

    var stack = di.getFactory('ds', 'stack')();

    describe('when the stack is empty', function() {

        it('.isEmpty() should return true', function() {
            expect(stack.isEmpty()).to.be.equal(true);
        });

        it('.length() should return 0', function() {
            expect(stack.length()).to.be.equal(0);
        });

        it('.peek() and .pop() should return null', function() {
            expect(stack.peek()).to.be.equal(null);
            expect(stack.pop()).to.be.equal(null);
        });

        it('.push() should push elements', function() {
            stack.push(5);
            stack.push(7);
            stack.push(12);
        });

    });

    describe('when the stack is not empty', function() {

        it('.isEmpty() should return false', function() {
            expect(stack.isEmpty()).to.be.equal(false);
        });

        it('.length() should return a number bigger than 0', function() {
            expect(stack.length()).to.be.equal(3);
        });

        it('.peek() should return the top element', function() {
            expect(stack.peek()).to.be.equal(12);
        });

        it('.pop() should pop the top element', function() {
            expect(stack.pop()).to.be.equal(12);
            expect(stack.length()).to.be.equal(2);
            expect(stack.peek()).to.be.equal(7);
        });

    });

});