'use strict';

const expect = require('chai').expect,
      Stack  = require('../lib/stack');

describe('stack tests', () => {

    let stack = new Stack();

    describe('.push(element)', () => {
        it('should push elements to the top of the stack', () => {
            stack.push(1);
            stack.push(2);
            stack.push('third');
        });
    });

    describe('.length()', () => {
        it('should have length of 3', () => {
            expect(stack.length()).to.equal(3);
        });
    });

    describe('.isEmpty()', () => {
        it('should not be empty', () => {
            expect(stack.isEmpty()).to.equal(false);
        });
    });


    describe('.peek()', () => {
        it('should peek the top element', () => {
            expect(stack.peek()).to.equal('third');
        });
    });

    describe('.pop()', () => {
        it('should pop the elements', () => {
            expect(stack.pop()).to.equal('third');
            expect(stack.pop()).to.equal(2);
        });
    });

    describe('.clear()', () => {
        it('should clear the stack', () => {
            stack.clear();
            expect(stack.pop()).to.equal(null);
            expect(stack.length()).to.equal(0);
            expect(stack.isEmpty()).to.equal(true);
        });
    });

});