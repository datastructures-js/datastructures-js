'use strict';

const expect        = require('chai').expect,
      PriorityQueue = require('../../lib/queue/priorityQueue');

describe('priorityQueue tests', function() {

    let priorityQueue = new PriorityQueue();

    describe('enqueue(element, priority)', () => {
        it('should throw an error when trying to queue an element with none valid priority', () => {
            expect(() => priorityQueue.enqueue('test', 'p')).to.throw('element priority should be a number bigger than 0');
        });

        it('should queue elements with priorities', () => {
            priorityQueue.enqueue('john', 2);
            priorityQueue.enqueue('sam', 4);
            priorityQueue.enqueue('samantha', 1);
            priorityQueue.enqueue('rose', 7);
        });
    });

    describe('.length()', () => {
        it('should have length of 4', () => {
            expect(priorityQueue.length()).to.equal(4);
        });
    });

    describe('.front()', () => {
        it('should get the front element', () => {
            expect(priorityQueue.front()).to.equal('samantha');
        });
    });

    describe('.back()', () => {
        it('should get the back element', () => {
            expect(priorityQueue.back()).to.equal('rose');
        });
    });

    describe('toArray()', () => {
        it('should convert the queue into an array', function() {
            expect(priorityQueue.toArray()).to.deep.equal(['john', 'sam', 'samantha', 'rose']);
        });
    });

    describe('.dequeue()', () => {
        it('should dequeue elements by priority', () => {
            expect(priorityQueue.dequeue()).to.equal('samantha');
            expect(priorityQueue.length()).to.equal(3);
            expect(priorityQueue.front()).to.equal('john');

            expect(priorityQueue.dequeue()).to.equal('john');
            expect(priorityQueue.length()).to.equal(2);
            expect(priorityQueue.front()).to.equal('sam');  

            expect(priorityQueue.dequeue()).to.equal('sam');
            expect(priorityQueue.length()).to.equal(1);
            expect(priorityQueue.front()).to.equal('rose');        
        });
    });

    describe('.isEmpty()', () => {
        it('should not be empty', () => {
            expect(priorityQueue.isEmpty()).to.equal(false);
        });
    });


    describe('.clear()', () => {
        it('should clear the priorty queue', () => {
            priorityQueue.clear();
            expect(priorityQueue.length()).to.equal(0);
            expect(priorityQueue.isEmpty()).to.equal(true);
        });
    });
});