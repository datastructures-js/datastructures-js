var expect = require('chai').expect,
    linkedList = require('../src/linkedList.js');

describe('linked list test', function() {

    var ll = linkedList();

    it('should have initial length of 0', function(){
        expect(ll.length()).to.be.equal(0);
    });

    it('should add 2 nodes at first n1 and n2', function(){
        ll.addFirst('n2');
        ll.addFirst('n1');
        expect(ll.length()).to.be.equal(2);
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
        expect(ll.length()).to.be.equal(4);
    });

    it('should find last node n6', function(){
        var n6 = ll.find('n6');
        expect(n6).not.to.be.equal(null);
        expect(n6.getValue()).to.be.equal('n6');
        expect(n6.getNext()).to.be.equal(null);
    });

    it('should add a new node n3 after node n2', function(){
        ll.addAfter('n2', 'n3');
        expect(ll.length()).to.be.equal(5);
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
        expect(ll.length()).to.be.equal(6);
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
        expect(last.getValue()).to.be.equal('n6');
        expect(last.getNext()).to.be.equal(null);
    });

    it('should remove last node', function(){
        ll.removeLast();
        var last = ll.findLast();
        expect(ll.length()).to.be.equal(5);
        expect(last.getValue()).to.be.equal('n5');
    });

    it('should remove first node n1', function(){
        ll.removeFirst();
        var n1 = ll.find('n1');
        expect(ll.length()).to.be.equal(4);
        expect(n1).to.be.equal(null);
    });

    it('should remove the node n4', function(){
        ll.remove('n4');
        var n4 = ll.find('n4');
        var n3 = ll.find('n3');
        expect(ll.length()).to.be.equal(3);
        expect(n4).to.be.equal(null);
        expect(n3.getNext().getValue()).to.be.equal('n5');
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
        expect(ll.length()).to.be.equal(0);
    });    

});