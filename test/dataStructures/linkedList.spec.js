var expect = require('chai').expect,
    di = require('../../di');

describe('linkedList test', function() {

    'use strict';

    var linkedList = di.getLinkedListFactory()();

    it('should have initial count of 0', function(){
        expect(linkedList.count()).to.be.equal(0);
    });
    
    it('should not find the first node', function() {
        expect(linkedList.findFirst()).to.be.equal(null);
    });

    it('should add 2 nodes at first n1 and n2', function(){
        linkedList.addFirst('n2');
        linkedList.addFirst('n1');
        expect(linkedList.count()).to.be.equal(2);
    });

    it('should add a first node using addLast as well', function(){
        linkedList.clear();
        linkedList.addLast('n2');
        linkedList.addFirst('n1');
        expect(linkedList.count()).to.be.equal(2);
    });

    it('should find the first node n1', function(){
        var n1 = linkedList.find('n1');
        expect(n1).not.to.be.equal(null);
        expect(n1.getValue()).to.be.equal('n1');
        expect(n1.getNext().getValue()).to.be.equal('n2');
    });

    it('should add 2 nodes at last n5 and n6', function(){
        linkedList.addLast('n5');
        linkedList.addLast('n6');
        expect(linkedList.count()).to.be.equal(4);
    });

    it('should find last node n6', function(){
        var n6 = linkedList.find('n6');
        expect(n6).not.to.be.equal(null);
        expect(n6.getValue()).to.be.equal('n6');
        expect(n6.getNext()).to.be.equal(null);
    });

    it('should add a new node n3 after node n2', function(){
        linkedList.addAfter('n2', 'n3');
        linkedList.addAfter('n6', 'n7');
        expect(linkedList.count()).to.be.equal(6);
    });

    it('should find the node n3', function(){
        var n3 = linkedList.find('n3');
        expect(n3).not.to.be.equal(null);
        expect(n3.getValue()).to.be.equal('n3');
        expect(n3.getNext().getValue()).to.be.equal('n5');
    });

    it('should throw exception when trying to add after a non existing node', function(){
        expect(linkedList.addAfter.bind(linkedList, 'n11', 'n9')).to.throw({
            message: 'node n11 not found'
        });
    });


    it('should add a new node n4 before node n5', function(){
        linkedList.addBefore('n5', 'n4');
        linkedList.addBefore('n1', 'n0');
        expect(linkedList.count()).to.be.equal(8);
    });

    it('should find the node n4', function(){
        var n4 = linkedList.find('n4');
        expect(n4).not.to.be.equal(null);
        expect(n4.getValue()).to.be.equal('n4');
        expect(n4.getNext().getValue()).to.be.equal('n5');
    });

    it('should throw exception when trying to add before a non existing node', function(){
        expect(linkedList.addBefore.bind(linkedList, 'n11', 'n9')).to.throw({
            message: 'node n11 not found'
        });
    });

    it('should find last node', function(){
        var last = linkedList.findLast();
        expect(last.getValue()).to.be.equal('n7');
        expect(last.getNext()).to.be.equal(null);
    });

    it('should find a node before another node', function(){
        var beforeNode1 = linkedList.findBefore('n0');
        var beforeNode2 = linkedList.findBefore('n4');
        expect(beforeNode1).to.be.equal(null);
        expect(beforeNode2.getValue()).to.be.equal('n3');
    });

    it('should remove last node for a list with one node', function(){
        var oneNodeList = di.getLinkedListFactory()();
        oneNodeList.addFirst('n1');
        expect(oneNodeList.count()).to.be.equal(1);
        oneNodeList.removeLast();
        expect(oneNodeList.count()).to.be.equal(0);
    });

    it('should remove last node', function(){
        linkedList.removeLast();
        var last = linkedList.findLast();
        expect(linkedList.count()).to.be.equal(7);
        expect(last.getValue()).to.be.equal('n6');
    });

    it('should remove first node n1', function(){
        linkedList.removeFirst();
        var n1 = linkedList.find('n0');
        expect(linkedList.count()).to.be.equal(6);
        expect(n1).to.be.equal(null);
    });

    it('should remove a node', function(){
        linkedList.remove('n4');
        var n4 = linkedList.find('n4');
        var n3 = linkedList.find('n3');
        expect(linkedList.count()).to.be.equal(5);
        expect(n4).to.be.equal(null);
        expect(n3.getNext().getValue()).to.be.equal('n5');

        linkedList.remove('n1');
        var n1 = linkedList.find('n1');
        expect(linkedList.count()).to.be.equal(4);
        expect(n1).to.be.equal(null);
    
        linkedList.remove('n6');
        var n6 = linkedList.find('n6');
        expect(linkedList.count()).to.be.equal(3);
        expect(n6).to.be.equal(null);
    });

    it('should throw exception when trying to remove a non existing node', function(){
        expect(linkedList.remove.bind(linkedList, 'n11')).to.throw({
            message: 'node n11 not found'
        });
    });

    it('should contain the node n5', function(){
        expect(linkedList.find('n5')).to.not.be.equal(null);
    });    

    it('should clear the linked list', function(){
        linkedList.clear();
        expect(linkedList.count()).to.be.equal(0);
    });    

});