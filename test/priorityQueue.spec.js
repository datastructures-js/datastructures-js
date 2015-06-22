var expect = require('chai').expect,
    priorityQueue = require('../lib/priorityQueue');

describe('priorityQueue test', function() {

    var pq = priorityQueue().export();

    describe('when the queue is empty', function() {

        it('.isEmpty() should return true', function() {
            expect(pq.isEmpty()).to.be.equal(true);
        });

        it('.length() should return 0', function() {
            expect(pq.length()).to.be.equal(0);
        });

        it('.front(), .back() and .dequeue() should return null', function() {
            expect(pq.dequeue()).to.be.equal(null);
            expect(pq.front()).to.be.equal(null);
            expect(pq.back()).to.be.equal(null);
        });

        it('.enqueue() should queue elements', function() {
            pq.enqueue('john', 2);
            pq.enqueue('sam', 4);
            pq.enqueue('samantha', 1);
            pq.enqueue('rose', 7);
        });

        it('.enqueue() should throw an exception wheen priority is not a number', function() {
            expect(pq.enqueue.bind(pq, 'ivan', 'test')).to.throw({
                message: 'priority should be a number'
            });
        });
   
    });

    describe('when the queue is not empty', function() {

        it('.isEmpty() should return false', function() {
            expect(pq.isEmpty()).to.be.equal(false);
        });

        it('.length() should return a number bigger than 0', function() {
            expect(pq.length()).to.be.equal(4);
        });

        it('.front() should retreive the front element', function(){
            expect(pq.front()).to.be.equal('john');
        });

        it('.back() should retreive the back element', function(){
            expect(pq.back()).to.be.equal('rose');
        });

        it('.dequeue() should dequeue a high priority element', function() {
            expect(pq.dequeue()).to.be.equal('samantha');
            expect(pq.length()).to.be.equal(3);
        });

    });

});