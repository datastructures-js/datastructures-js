'use strict';

const expect  = require('chai').expect;
const MinHeap = require('../../../lib/tree/heap/minHeap');

describe('minHeap tests', () => {

  let minHeap = new MinHeap();

  describe('.insert(value)', () => {
    it('should insert values into the min heap', () => {
      minHeap.insert(50);
      minHeap.insert(80);
      minHeap.insert(30);
      minHeap.insert(90);
      minHeap.insert(60);
      minHeap.insert(40);
      minHeap.insert(20);
    });
  });

  describe('.min()', () => {
    it ('should get the min value in the heap', () => {
      expect(minHeap.min()).to.equal(20);
    });
  });

  describe('.size()', () => {
    it('should get the size of the heap', () => {
      expect(minHeap.size()).to.equal(7);
    });
  });

  describe('.extractMin()', () => {
    it ('should extract the min value in the heap', () => {
      expect(minHeap.extractMin()).to.equal(20);
      expect(minHeap.min()).to.equal(30);
      expect(minHeap.size()).to.equal(6);
    });
  });

  describe('.remove(index)', () => {
    it ('should remove a value by its index', () => {
      minHeap.remove(0);   
      expect(minHeap.min()).to.equal(40);
      expect(minHeap.size()).to.equal(5);
      minHeap.remove(3);
      expect(minHeap.min()).to.equal(40);
      expect(minHeap.size()).to.equal(4);
      minHeap.remove(2);
      expect(minHeap.min()).to.equal(40);
      expect(minHeap.size()).to.equal(3);
    });
  });

  describe('.clear()', () => {
    it('should clear the heap', () => {
      minHeap.clear();
      expect(minHeap.min()).to.equal(null);
      expect(minHeap.extractMin()).to.equal(null);
      expect(minHeap.size()).to.equal(0);
    });
  });

});