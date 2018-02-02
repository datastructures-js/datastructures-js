'use strict';

const expect = require('chai').expect,
      Queue  = require('../../lib/queue/queue');

describe('queue tests', () => {

    let queue = new Queue();

    describe('.enqueue(element)', () => {
        it('should enqueue 3 elements to the stack', () => {
            queue.enqueue(1);
            queue.enqueue(8);
            queue.enqueue(45);
        });
    });

    describe('.length()', () => {
        it('should have length of 3', () => {
            expect(queue.length()).to.equal(3);
        });
    });

    describe('.front()', () => {
        it('should peek the front element', () => {
            expect(queue.front()).to.equal(1);
        });
    });

    describe('.back()', () => {
        it('should peek the back element', () => {
            expect(queue.back()).to.equal(45);
        });
    });

    describe('.isEmpty()', () => {
        it('should not be empty', () => {
            expect(queue.isEmpty()).to.equal(false);
        });
    });

    describe('dequeue()', () => {
        it('should dequeue all elements', function() {
            expect(queue.dequeue()).to.be.equal(1);
            expect(queue.dequeue()).to.be.equal(8);
        });
    });

    describe('.clear()', () => {
        it('should clear the queue', () => {
            expect(queue.dequeue()).to.be.equal(45);
            expect(queue.dequeue()).to.be.equal(null);
            expect(queue.front()).to.be.equal(null);
            expect(queue.back()).to.be.equal(null);
            expect(queue.length()).to.be.equal(0);
            expect(queue.isEmpty()).to.be.equal(true);
        });
    });

});