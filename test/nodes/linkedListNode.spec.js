var expect = require('chai').expect,
    linkedListNode = require('../../lib/nodes/linkedListNode');

describe('linkedListNode test', function() {

    'use strict';

    var n2 = linkedListNode(null, 'n2'),
        n1 = linkedListNode(n2, 'n1');

    it('should access n2', function() {
        expect(n2.getValue()).to.be.equal('n2');
        expect(n2.getNext()).to.be.equal(null);
    });

    it('should access n1', function() {
        expect(n1.getValue()).to.be.equal('n1');
        expect(n1.getNext().getValue()).to.be.equal('n2');
    });

    it('should export node api', function() {
        var exportedNode = n1.export();
        expect(exportedNode.getValue()).to.be.equal('n1');
        expect(exportedNode.getNext().getValue()).to.be.equal('n2');
    });
});