var expect = require('chai').expect,
    priorityQueue = require('../src/priorityQueue.js');

describe('priority queue test', function() {

    var pq = priorityQueue();
    
    it('should be empty initially', function() {
        expect(pq.isEmpty()).to.be.equal(true);
    });
    
    it('should queue elements', function() {
        pq.enqueue('john', 2);
        pq.enqueue('sam', 4);
        pq.enqueue('samantha', 1);
        pq.enqueue('rose', 7);
        expect(pq.enqueue.bind(pq, 'ivan', 'test')).to.throw({
            message: 'priority should be a number'
        });
        expect(pq.isEmpty()).to.be.equal(false);
    });

    it('should retreive front and back elements', function(){
        expect(pq.front()).to.be.equal('john');
        expect(pq.back()).to.be.equal('rose');
    });

    it('should dequeue an element', function() {
        expect(pq.dequeue()).to.be.equal('samantha');
    });

});