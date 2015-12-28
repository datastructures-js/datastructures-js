var expect = require('chai').expect,
    ds = require('../index');

describe('index (main module) test', function() {

    'use strict';

    it('should get a stack object', function() {
        expect(ds.stack()).to.be.an('object');
    });

    it('should get a queue object', function() {
        expect(ds.queue()).to.be.an('object');
    });

    it('should get a priorityQueue object', function() {
        expect(ds.priorityQueue()).to.be.an('object');
    });

    it('should get a set object', function() {
        expect(ds.set()).to.be.an('object');
    });

    it('should get a linkedList object', function() {
        expect(ds.linkedList()).to.be.an('object');
    });

    it('should get a doublyLinkedList object', function() {
        expect(ds.doublyLinkedList()).to.be.an('object');
    });

    it('should get a hashtable object', function() {
        expect(ds.hashtable()).to.be.an('object');
    });

    it('should get a binarySearchTree object', function() {
        expect(ds.binarySearchTree()).to.be.an('object');
    });

    it('should get a directedGraph object', function() {
        expect(ds.directedGraph()).to.be.an('object');
    });
});