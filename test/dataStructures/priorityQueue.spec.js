var expect = require('chai').expect,
    di = require('../../di');

describe('priorityQueue test', function() {

    'use strict';

    var priorityQueue = di.getPriorityQueueFactory()();

    describe('when the queue is empty', function() {

        it('.isEmpty() should return true', function() {
            expect(priorityQueue.isEmpty()).to.be.equal(true);
        });

        it('.length() should return 0', function() {
            expect(priorityQueue.length()).to.be.equal(0);
        });

        it('.front(), .back() and .dequeue() should return null', function() {
            expect(priorityQueue.dequeue()).to.be.equal(null);
            expect(priorityQueue.front()).to.be.equal(null);
            expect(priorityQueue.back()).to.be.equal(null);
        });

        it('.enqueue() should queue elements', function() {
            priorityQueue.enqueue('john', 2);
            priorityQueue.enqueue('sam', 4);
            priorityQueue.enqueue('samantha', 1);
            priorityQueue.enqueue('rose', 7);
        });

        it('.enqueue() should throw an exception wheen priority is not a number', function() {
            expect(priorityQueue.enqueue.bind(priorityQueue, 'ivan', 'test')).to.throw({
                message: 'priority should be a number'
            });
        });
   
    });

    describe('when the queue is not empty', function() {

        it('.isEmpty() should return false', function() {
            expect(priorityQueue.isEmpty()).to.be.equal(false);
        });

        it('.length() should return a number bigger than 0', function() {
            expect(priorityQueue.length()).to.be.equal(4);
        });

        it('.front() should retreive the front element', function(){
            expect(priorityQueue.front()).to.be.equal('john');
        });

        it('.back() should retreive the back element', function(){
            expect(priorityQueue.back()).to.be.equal('rose');
        });

        it('.dequeue() should dequeue a high priority element', function() {
            expect(priorityQueue.dequeue()).to.be.equal('samantha');
            expect(priorityQueue.length()).to.be.equal(3);
        });

    });

});