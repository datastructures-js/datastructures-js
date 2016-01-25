var expect = require('chai').expect,
    di = require('../../di');
        
describe('doublyLinkedList test', function() {

    'use strict';

    var doublyLinkedList = di.getDoublyLinkedListFactory()();

    it('should have initial count of 0', function(){
        expect(doublyLinkedList.count()).to.be.equal(0);
    });

    it('should not be affected by removeFirst', function() {
        doublyLinkedList.removeFirst();
        expect(doublyLinkedList.count()).to.be.equal(0);
    });

    it('should not be affected by removeLast', function() {
        doublyLinkedList.removeLast();
        expect(doublyLinkedList.count()).to.be.equal(0);
    });

    it('should add a node at first for empty list', function(){
        doublyLinkedList.addFirst('n2');
        var n2 = doublyLinkedList.find('n2');
        expect(n2.getValue()).to.be.equal('n2');
        expect(n2.getPrev()).to.be.equal(null);
        expect(n2.getNext()).to.be.equal(null);
        expect(doublyLinkedList.count()).to.be.equal(1);
    });

    it('should add a node at first for non empty list', function(){
        doublyLinkedList.addFirst('n1');
        var n1 = doublyLinkedList.find('n1');
        expect(n1.getValue()).to.be.equal('n1');
        expect(n1.getPrev()).to.be.equal(null);
        expect(n1.getNext().getValue()).to.be.equal('n2');
        expect(doublyLinkedList.count()).to.be.equal(2);
    });

    it('should clear the linked list', function(){
        doublyLinkedList.clear();
        expect(doublyLinkedList.count()).to.be.equal(0);
    });

    it('should add a node at last for an empty list', function(){
        doublyLinkedList.addLast('n1');
        var n1 = doublyLinkedList.find('n1');
        expect(n1.getValue()).to.be.equal('n1');
        expect(n1.getPrev()).to.be.equal(null);
        expect(n1.getNext()).to.be.equal(null);
        expect(doublyLinkedList.count()).to.be.equal(1);
    });

    it('should add a node at last for a one node list', function(){
        doublyLinkedList.addLast('n4');
        var n4 = doublyLinkedList.find('n4');
        expect(n4.getValue()).to.be.equal('n4');
        expect(n4.getPrev().getValue()).to.be.equal('n1');
        expect(n4.getNext()).to.be.equal(null);
        expect(doublyLinkedList.count()).to.be.equal(2);
    });

    it('should add a node at last for more than one node list', function(){
        doublyLinkedList.addLast('n5');
        var n5 = doublyLinkedList.find('n5');
        expect(n5.getValue()).to.be.equal('n5');
        expect(n5.getPrev().getValue()).to.be.equal('n4');
        expect(n5.getNext()).to.be.equal(null);
        expect(doublyLinkedList.count()).to.be.equal(3);
    });

    it('should add a node after an existing node', function(){
        doublyLinkedList.addAfter('n1', 'n3');
        var n3 = doublyLinkedList.find('n3');
        expect(n3.getValue()).to.be.equal('n3');
        expect(n3.getPrev().getValue()).to.be.equal('n1');
        expect(n3.getNext().getValue()).to.be.equal('n4');
        expect(doublyLinkedList.count()).to.be.equal(4);
    });

    it('should add a node after the last node', function(){
        doublyLinkedList.addAfter('n5', 'n6');
        var n6 = doublyLinkedList.find('n6');
        expect(n6.getValue()).to.be.equal('n6');
        expect(n6.getPrev().getValue()).to.be.equal('n5');
        expect(n6.getNext()).to.be.equal(null);
        expect(doublyLinkedList.count()).to.be.equal(5);
    });

    it('should throw an exception when trying to add after a not found node', function(){
        expect(doublyLinkedList.addAfter.bind(doublyLinkedList, 'n10', 'n11')).to.throw({
            message: 'node n10 not found'
        });
    });

    it('should add a node before an existing node', function(){
        doublyLinkedList.addBefore('n3', 'n2');
        var n2 = doublyLinkedList.find('n2');
        expect(n2.getValue()).to.be.equal('n2');
        expect(n2.getPrev().getValue()).to.be.equal('n1');
        expect(n2.getNext().getValue()).to.be.equal('n3');
        expect(doublyLinkedList.count()).to.be.equal(6);
    });

    it('should add a node before the first node', function(){
        doublyLinkedList.addBefore('n1', 'n0');
        var n0 = doublyLinkedList.find('n0');
        expect(n0.getValue()).to.be.equal('n0');
        expect(n0.getPrev()).to.be.equal(null);
        expect(n0.getNext().getValue()).to.be.equal('n1');
        expect(doublyLinkedList.count()).to.be.equal(7);
    });

    it('should throw an exception when trying to add before a non existing node', function(){
        expect(doublyLinkedList.addBefore.bind(doublyLinkedList, 'n10', 'n9')).to.throw({
            message: 'node n10 not found'
        });
    });

    it('should find a node before an existing node', function(){
        var n = doublyLinkedList.findBefore('n0');
        var n2 = doublyLinkedList.findBefore('n3');
        expect(n).to.be.equal(null);
        expect(n2.getValue()).to.be.equal('n2');
    });

    it('should return null when trying to findBefore a not found node', function(){
        var n = doublyLinkedList.findBefore('n66');
        expect(n).to.be.equal(null);
    });

    it('should remove last node', function(){
        doublyLinkedList.removeLast();
        var last = doublyLinkedList.findLast();
        expect(doublyLinkedList.count()).to.be.equal(6);
        expect(last.getNext()).to.be.equal(null);
        expect(last.getPrev().getValue()).to.be.equal('n4');
    });

    it('should remove first node', function(){
        doublyLinkedList.removeFirst();
        var first = doublyLinkedList.findFirst();
        expect(doublyLinkedList.count()).to.be.equal(5);
        expect(first.getValue()).to.be.equal('n1');
    });

    it('should remove first node for one node list', function(){
        var oneNodeList = di.getDoublyLinkedListFactory()();
        oneNodeList.addFirst('n1');
        oneNodeList.removeFirst();
        expect(oneNodeList.count()).to.be.equal(0);
    });

    it('should remove last node for a one node list', function(){
        var oneNodeList = di.getDoublyLinkedListFactory()();
        oneNodeList.addFirst('n1');
        oneNodeList.removeLast();
        expect(oneNodeList.count()).to.be.equal(0);
    });

    it('should remove an existing node', function(){
        doublyLinkedList.remove('n4');
        var n4 = doublyLinkedList.find('n4');
        expect(doublyLinkedList.count()).to.be.equal(4);
        expect(n4).to.be.equal(null);
    });

    it('should remove the node of a one node list', function(){
        var oneNodeList = di.getDoublyLinkedListFactory()();
        oneNodeList.addFirst('n1');
        oneNodeList.remove('n1');
        expect(oneNodeList.count()).to.be.equal(0);
    });

    it('should remove the last node', function(){
        doublyLinkedList.remove('n5');
        var n5 = doublyLinkedList.find('n5');
        expect(n5).to.be.equal(null);
        expect(doublyLinkedList.count()).to.be.equal(3);
    });

    it('should throw an exception when trying to remove a non existing node', function(){
        expect(doublyLinkedList.remove.bind(doublyLinkedList, 'n10')).to.throw({
            message: 'node n10 not found'
        });
    });

});