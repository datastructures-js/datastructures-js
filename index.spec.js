const { expect } = require('chai');
const ds = require('./index');

describe('datastructures-js tests', () => {
  it('should get a queue object', () => {
    expect(ds.queue()).to.be.an('object');
    expect(ds.q()).to.be.an('object');
  });

  it('should get a priority queue object', () => {
    expect(ds.priorityQueue()).to.be.an('object');
    expect(ds.pq()).to.be.an('object');
  });

  it('should get a set object', () => {
    expect(ds.set()).to.be.an('object');
  });

  it('should get a stack object', () => {
    expect(ds.stack()).to.be.an('object');
  });

  it('should get a linked list object', () => {
    expect(ds.linkedList()).to.be.an('object');
    expect(ds.ll()).to.be.an('object');
  });

  it('should get a doubly linked list object', () => {
    expect(ds.doublyLinkedList()).to.be.an('object');
    expect(ds.dll()).to.be.an('object');
  });

  it('should get a min heap object', () => {
    expect(ds.minHeap()).to.be.an('object');
  });

  it('should get a max heap object', () => {
    expect(ds.maxHeap()).to.be.an('object');
  });

  it('should get a trie object', () => {
    expect(ds.trie()).to.be.an('object');
  });

  it('should get a binary search tree object', () => {
    expect(ds.binarySearchTree()).to.be.an('object');
    expect(ds.bst()).to.be.an('object');
  });

  it('should get an avl tree object', () => {
    expect(ds.avlTree()).to.be.an('object');
    expect(ds.avl()).to.be.an('object');
  });

  it('should get an graph object', () => {
    expect(ds.graph()).to.be.an('object');
  });
});
