var expect = require('chai').expect,
    doublyLinkedListNode = require('../../lib/nodes/doublyLinkedListNode');
        
describe('doublyLinkedListNode test', function() {

    'use strict';

    var n3 = doublyLinkedListNode(null, null, 'n3'),
        n1 = doublyLinkedListNode(null, null, 'n1'),
        n2 = doublyLinkedListNode(n1, n3, 'n2');

    n3.setPrev(n2);
    n1.setNext(n2);

    it('should access n1', function() {
        expect(n1.getValue()).to.be.equal('n1');
        expect(n1.getPrev()).to.be.equal(null);
    });

    it('should access n2', function() {
        expect(n2.getValue()).to.be.equal('n2');
        expect(n2.getNext().getValue()).to.be.equal('n3');
        expect(n2.getPrev().getValue()).to.be.equal('n1');
    });


    it('should access n3', function() {
        expect(n3.getValue()).to.be.equal('n3');
        expect(n3.getNext()).to.be.equal(null);
        expect(n3.getPrev().getValue()).to.be.equal('n2');
    });

    it('should export node api', function() {
        var exportedNode = n2.export();
        expect(exportedNode.getValue()).to.be.equal('n2');
        expect(exportedNode.getNext().getValue()).to.be.equal('n3');
        expect(exportedNode.getPrev().getValue()).to.be.equal('n1');
    });    
});