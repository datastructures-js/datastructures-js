describe('linkedListNode test', function() {

    'use strict';

    var expect = require('chai').expect,
        linkedListNode = require('../../lib/nodes/linkedListNode'),
        n2 = linkedListNode(null, 'n2'),
        n1 = linkedListNode(n2, 'n1');

    it('should access n2', function() {
        expect(n2.getValue()).to.be.equal('n2');
        expect(n2.getNext()).to.be.equal(null);
        var n2Exp = n2.export();
        expect(n2Exp.getValue()).to.be.equal('n2');
        expect(n2Exp.getNext()).to.be.equal(null);
    });

    it('should access n1', function() {
        expect(n1.getValue()).to.be.equal('n1');
        expect(n1.getNext().getValue()).to.be.equal('n2');
        var n1Exp = n1.export();
        expect(n1Exp.getValue()).to.be.equal('n1');
        expect(n1Exp.getNext().getValue()).to.be.equal('n2');
    });
});