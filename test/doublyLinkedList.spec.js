var expect = require('chai').expect,
    doublyLinkedList = require('../lib/doublyLinkedList');

describe('doublyLinkedList test', function() {

    var dll = doublyLinkedList().export();

    it('should have initial length of 0', function(){
        expect(dll.length()).to.be.equal(0);
    });

    it('should add 2 nodes at first n1 and n2', function(){
        dll.addFirst('n2');
        dll.addFirst('n1');
    });

    it('should find the first node n1', function(){
        var n1 = dll.find('n1');
        expect(n1).not.to.be.equal(null);
        expect(n1.getPrev()).to.be.equal(null);
        expect(n1.getValue()).to.be.equal('n1');
        expect(n1.getNext().getValue()).to.be.equal('n2');
    });

    it('should add 2 nodes at last n5 and n6', function(){
        dll.addLast('n5');
        dll.addLast('n6');
        expect(dll.length()).to.be.equal(4);
    });

    it('should find node n6', function(){
        var n6 = dll.find('n6');
        expect(n6).not.to.be.equal(null);
        expect(n6.getNext()).to.be.equal(null);
        expect(n6.getPrev().getValue()).to.be.equal('n5');
        expect(n6.getValue()).to.be.equal('n6');
    });

    it('should add a new node n3 after node n2', function(){
        dll.addAfter('n2', 'n3');
        expect(dll.length()).to.be.equal(5);
    });

    it('should throw an exception when trying to add after a non existing node', function(){
        expect(dll.addAfter.bind(dll, 'n10', 'n11')).to.throw({
            message: 'node n10 not found'
        });
    });

    it('should find the node n3', function(){
        var n3 = dll.find('n3');
        expect(n3).not.to.be.equal(null);
        expect(n3.getValue()).to.be.equal('n3');
        expect(n3.getPrev().getValue()).to.be.equal('n2');
        expect(n3.getNext().getValue()).to.be.equal('n5');
    });

    it('should add a new node n4 before node n5', function(){
        dll.addBefore('n5', 'n4');
        expect(dll.length()).to.be.equal(6);
    });

    it('should throw an exception when trying to add before a non existing node', function(){
        expect(dll.addBefore.bind(dll, 'n10', 'n9')).to.throw({
            message: 'node n10 not found'
        });
    });

    it('should find the node n4', function(){
        var n4 = dll.find('n4');
        expect(n4).not.to.be.equal(null);
        expect(n4.getValue()).to.be.equal('n4');
        expect(n4.getPrev().getValue()).to.be.equal('n3');
        expect(n4.getNext().getValue()).to.be.equal('n5');
    });

    it('should remove last node', function(){
        dll.removeLast();
        var last = dll.findLast();
        expect(dll.length()).to.be.equal(5);
        expect(last.getNext()).to.be.equal(null);
        expect(last.getPrev().getValue()).to.be.equal('n4');
    });

    it('should remove first node n1', function(){
        dll.removeFirst();
        var first = dll.findFirst();
        expect(dll.length()).to.be.equal(4);
        expect(first.getValue()).to.be.equal('n2');
    });

    it('should remove the node n4', function(){
        dll.remove('n4');
        var n4 = dll.find('n4');
        var n3 = dll.find('n3');
        expect(dll.length()).to.be.equal(3);
        expect(n4).to.be.equal(null);
        expect(n3.getNext().getValue()).to.be.equal('n5');
    });

    it('should throw an exception when trying to remove a non existing node', function(){
        expect(dll.addBefore.bind(dll, 'n10')).to.throw({
            message: 'node n10 not found'
        });
    });

    it('should clear the linked list', function(){
        dll.clear();
        expect(dll.length()).to.be.equal(0);
    });

});