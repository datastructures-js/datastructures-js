var expect = require('chai').expect,
    queue = require('../src/queue');

describe('queue test', function() {

    var q = queue().export();
    
    it('should be empty initially', function() {
        expect(q.isEmpty()).to.be.equal(true);
    });
    
    it('should queue elements', function() {
        q.enqueue(1);
        q.enqueue(8);
        q.enqueue(45);
        expect(q.isEmpty()).to.be.equal(false);
    });

    it('should retreive front and back elements', function(){
        expect(q.front()).to.be.equal(1);
        expect(q.back()).to.be.equal(45);
    });

    it('should dequeue an element', function() {
        expect(q.dequeue()).to.be.equal(1);
        expect(q.front()).to.be.equal(8);
        expect(q.back()).to.be.equal(45);
    });

    it('should dequeue all elements', function() {
        q.dequeue();
        q.dequeue();
        expect(q.front()).to.be.equal(null);
        expect(q.back()).to.be.equal(null);
        expect(q.dequeue()).to.be.equal(null);
        expect(q.isEmpty()).to.be.equal(true);
    });

});