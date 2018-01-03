var expect = require('chai').expect,
    di = require('../../di');

describe('queue test', function() {

    'use strict';

    var q = di.getFactory('ds', 'queue')();

    describe('when the queue is empty', function() {

        it('.isEmpty() should return true', function() {
            expect(q.isEmpty()).to.be.equal(true);
        });

        it('.length() should return 0', function() {
            expect(q.length()).to.be.equal(0);
        });

        it('.front(), .back() and .dequeue() should return null', function() {
            expect(q.dequeue()).to.be.equal(null);
            expect(q.front()).to.be.equal(null);
            expect(q.back()).to.be.equal(null);
        });

        it('.enqueue() should queue elements', function() {
            q.enqueue(1);
            q.enqueue(8);
            q.enqueue(45);
            expect(q.isEmpty()).to.be.equal(false);
        });

    });

    describe('when the queue is not empty', function() {

        it('.isEmpty() should return false', function() {
            expect(q.isEmpty()).to.be.equal(false);
        });

        it('.length() should return a number bigger than 0', function() {
            expect(q.length()).to.be.equal(3);
        });

        it('.front() should retreive the front element', function(){
            expect(q.front()).to.be.equal(1);
        });

        it('.back() should retreive the back element', function(){
            expect(q.back()).to.be.equal(45);
        });

        it('.dequeue() should dequeue an element', function() {
            expect(q.dequeue()).to.be.equal(1);
            expect(q.front()).to.be.equal(8);
            expect(q.back()).to.be.equal(45);
        });

        it('.clear() should empty the queue', function(){
            expect(q.length()).to.be.equal(2);
            q.clear();
            expect(q.length()).to.be.equal(0);
        });

        it('.getElements() should return all elements', function(){
            q.enqueue(1);
            q.enqueue(8);
            q.enqueue(45);
            var elements = q.getElements();
            expect(elements[0]).to.be.equal(1);
            expect(elements[1]).to.be.equal(8);
            expect(elements[2]).to.be.equal(45);
        });

    });

});
