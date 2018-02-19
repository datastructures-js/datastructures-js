'use strict';

const expect               = require('chai').expect;
const DoublyLinkedListNode = require('../../lib/linkedList/doublyLinkedListNode');
const DoublyLinkedList     = require('../../lib/linkedList/doublyLinkedList');

describe('doublyLinkedList tests', function() {

  let doublyLinkedList = new DoublyLinkedList();

  describe('.addFirst(value)', () => {
    it('should add a node at the beginning of the list', () => {
        doublyLinkedList.addFirst('test 1');
        doublyLinkedList.addFirst('test 2');
    });
  });

  describe('.addLast(value)', () => {
    it('should add a node to the end of the list', () => {
        doublyLinkedList.addLast('test 3');
        doublyLinkedList.addLast('test 4');
    });
  });

  describe('.addAfter(value, newValue)', () => {
    it('should add a node after a specific value', () => {
        doublyLinkedList.addAfter('test 2', 'test 5');
        doublyLinkedList.addAfter('test 3', 'test 6');
    });
  });

  describe('.addBefore(value, newValue)', () => {
    it('should add a node after a specific value', () => {
        doublyLinkedList.addBefore('test 5', 'test 7');
        doublyLinkedList.addBefore('test 2', 'test 8');
    });
  });

  describe('.length()', () => {
    it('should get the length of the list', () => {
        expect(doublyLinkedList.length()).to.equal(8);
    });
  });

  describe('.head()', () => {
    it('should get the head node', () => {
        expect(doublyLinkedList.head().getValue()).to.equal('test 8');
    });
  });

  describe('.tail()', () => {
    it('should get the tail node', () => {
        expect(doublyLinkedList.tail().getValue()).to.equal('test 4');
    });
  });

  describe('.traverse(cb)', () => {
    it('should traverse the linked list', () => {
      let values = [];
      doublyLinkedList.traverse((value) => {
        values.push(value);
      });
      expect(values).to.deep.equal([
        'test 8', 'test 2', 'test 7', 
        'test 5', 'test 1', 'test 3', 
        'test 6', 'test 4'
      ]);
    });
  });

  describe('.traverseBackward(cb)', () => {
      it('should traverse the linked list backward', () => {
        let values = [];
        doublyLinkedList.traverseBackward((value) => {
          values.push(value);
        });
        expect(values).to.deep.equal([
         'test 4', 'test 6','test 3', 
         'test 1', 'test 5', 'test 7', 
         'test 2', 'test 8'
        ]);
      });
  });

  describe('.find(value)', () => {
      it('should find a nodes', () => {
        let n = doublyLinkedList.find('test 5');
        expect(n).to.be.instanceof(DoublyLinkedListNode);
        expect(n.getValue()).to.equal('test 5');
        expect(n.getNext().getValue()).to.equal('test 1');
      });

      it('should return null when a node not found', () => {
        expect(doublyLinkedList.find('not found')).to.equal(null);
      });
  });

  describe('.removeFirst()', () => {
      it('should remove the first node', () => {
        doublyLinkedList.removeFirst();
        expect(doublyLinkedList.length()).to.equal(7);
        expect(doublyLinkedList.head().getValue()).to.equal('test 2');
      });
  });

  describe('.removeLast()', () => {
      it('should remove the last node', () => {
        doublyLinkedList.removeLast();
        expect(doublyLinkedList.length()).to.equal(6);
        expect(doublyLinkedList.find('test 4')).to.equal(null);
      });
  });

  describe('.remove(value)', () => {
      it('should remove a node', () => {
        doublyLinkedList.remove('test 5');
        expect(doublyLinkedList.length()).to.equal(5);
        expect(doublyLinkedList.find('test 5')).to.equal(null);
      });
  });

});