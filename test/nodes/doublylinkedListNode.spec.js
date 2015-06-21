var expect = require('chai').expect,
    doublyLinkedListNode = require('../../src/nodes/doublyLinkedListNode');
describe('doublyLinkedListNode test', function() {

    var n3 = doublyLinkedListNode(null, null, 'n3'),
        n1 = doublyLinkedListNode(null, null, 'n1'),
        n2 = doublyLinkedListNode(n1, n3, 'n2');
        
        n3.setPrev(n2);
        n1.setNext(n2);

    it('should access n1', function() {
        expect(n1.getValue()).to.be.equal('n1');
        expect(n1.getPrev()).to.be.equal(null);
        var n1Exp = n1.export();
        expect(n1Exp.getValue()).to.be.equal('n1');
        expect(n1Exp.getPrev()).to.be.equal(null);
        expect(n1Exp.getNext().getValue()).to.be.equal('n2');
    });

    it('should access n2', function() {
        expect(n2.getValue()).to.be.equal('n2');
        expect(n2.getNext().getValue()).to.be.equal('n3');
        expect(n2.getPrev().getValue()).to.be.equal('n1');
        var n2Exp = n2.export();
        expect(n2Exp.getValue()).to.be.equal('n2');
        expect(n2Exp.getNext().getValue()).to.be.equal('n3');
        expect(n2Exp.getPrev().getValue()).to.be.equal('n1');
    });


    it('should access n3', function() {
        expect(n3.getValue()).to.be.equal('n3');
        expect(n3.getNext()).to.be.equal(null);
        expect(n3.getPrev().getValue()).to.be.equal('n2');
        var n3Exp = n3.export();
        expect(n3Exp.getValue()).to.be.equal('n3');
        expect(n3Exp.getNext()).to.be.equal(null);
        expect(n3Exp.getPrev().getValue()).to.be.equal('n2');
    });
});