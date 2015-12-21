describe('linkedList test', function() {

    'use strict';

    var expect = require('chai').expect,
        linkedList = require('../lib/linkedList'),
        ll = linkedList().export();

    it('should have initial count of 0', function(){
        expect(ll.count()).to.be.equal(0);
    });
    
    it('should not find the first node', function() {
        expect(ll.findFirst()).to.be.equal(null);
    });

    it('should add 2 nodes at first n1 and n2', function(){
        ll.addFirst('n2');
        ll.addFirst('n1');
        expect(ll.count()).to.be.equal(2);
    });

    it('should add a first node using addLast as well', function(){
        ll.clear();
        ll.addLast('n2');
        ll.addFirst('n1');
        expect(ll.count()).to.be.equal(2);
    });

    it('should find the first node n1', function(){
        var n1 = ll.find('n1');
        expect(n1).not.to.be.equal(null);
        expect(n1.getValue()).to.be.equal('n1');
        expect(n1.getNext().getValue()).to.be.equal('n2');
    });

    it('should add 2 nodes at last n5 and n6', function(){
        ll.addLast('n5');
        ll.addLast('n6');
        expect(ll.count()).to.be.equal(4);
    });

    it('should find last node n6', function(){
        var n6 = ll.find('n6');
        expect(n6).not.to.be.equal(null);
        expect(n6.getValue()).to.be.equal('n6');
        expect(n6.getNext()).to.be.equal(null);
    });

    it('should add a new node n3 after node n2', function(){
        ll.addAfter('n2', 'n3');
        ll.addAfter('n6', 'n7');
        expect(ll.count()).to.be.equal(6);
    });

    it('should find the node n3', function(){
        var n3 = ll.find('n3');
        expect(n3).not.to.be.equal(null);
        expect(n3.getValue()).to.be.equal('n3');
        expect(n3.getNext().getValue()).to.be.equal('n5');
    });

    it('should throw exception when trying to add after a non existing node', function(){
        expect(ll.addAfter.bind(ll, 'n11', 'n9')).to.throw({
            message: 'node n11 not found'
        });
    });


    it('should add a new node n4 before node n5', function(){
        ll.addBefore('n5', 'n4');
        ll.addBefore('n1', 'n0');
        expect(ll.count()).to.be.equal(8);
    });

    it('should find the node n4', function(){
        var n4 = ll.find('n4');
        expect(n4).not.to.be.equal(null);
        expect(n4.getValue()).to.be.equal('n4');
        expect(n4.getNext().getValue()).to.be.equal('n5');
    });

    it('should throw exception when trying to add before a non existing node', function(){
        expect(ll.addBefore.bind(ll, 'n11', 'n9')).to.throw({
            message: 'node n11 not found'
        });
    });

    it('should find last node', function(){
        var last = ll.findLast();
        expect(last.getValue()).to.be.equal('n7');
        expect(last.getNext()).to.be.equal(null);
    });

    it('should find a node before another node', function(){
        var beforeNode1 = ll.findBefore('n0');
        var beforeNode2 = ll.findBefore('n4');
        expect(beforeNode1).to.be.equal(null);
        expect(beforeNode2.getValue()).to.be.equal('n3');
    });

    it('should remove last node for a list with one node', function(){
        var oneNodeList = linkedList().export();
        oneNodeList.addFirst('n1');
        expect(oneNodeList.count()).to.be.equal(1);
        oneNodeList.removeLast();
        expect(oneNodeList.count()).to.be.equal(0);
    });

    it('should remove last node', function(){
        ll.removeLast();
        var last = ll.findLast();
        expect(ll.count()).to.be.equal(7);
        expect(last.getValue()).to.be.equal('n6');
    });

    it('should remove first node n1', function(){
        ll.removeFirst();
        var n1 = ll.find('n0');
        expect(ll.count()).to.be.equal(6);
        expect(n1).to.be.equal(null);
    });

    it('should remove a node', function(){
        ll.remove('n4');
        var n4 = ll.find('n4');
        var n3 = ll.find('n3');
        expect(ll.count()).to.be.equal(5);
        expect(n4).to.be.equal(null);
        expect(n3.getNext().getValue()).to.be.equal('n5');

        ll.remove('n1');
        var n1 = ll.find('n1');
        expect(ll.count()).to.be.equal(4);
        expect(n1).to.be.equal(null);
    
        ll.remove('n6');
        var n6 = ll.find('n6');
        expect(ll.count()).to.be.equal(3);
        expect(n6).to.be.equal(null);
    });

    it('should throw exception when trying to remove a non existing node', function(){
        expect(ll.remove.bind(ll, 'n11')).to.throw({
            message: 'node n11 not found'
        });
    });

    it('should contain the node n5', function(){
        expect(ll.find('n5')).to.not.be.equal(null);
    });    

    it('should clear the linked list', function(){
        ll.clear();
        expect(ll.count()).to.be.equal(0);
    });    

});