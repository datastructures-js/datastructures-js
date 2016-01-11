var expect = require('chai').expect,
    hashTablePair = require('../../lib/nodes/hashTablePair');

describe('hashTablePair test', function() {

    'use strict';

    var p1 = hashTablePair('john', '123456');

    it('should access p1', function() {
        expect(p1.getKey()).to.be.equal('john');
        expect(p1.getValue()).to.be.equal('123456');
    });

    it('should set a new value to p1', function() {
        p1.setValue('1234');
        expect(p1.getValue()).to.be.equal('1234');
    });

    it('should export hastable pair api', function() {
        var exportedP1 = p1.export();
        expect(exportedP1.getKey()).to.be.equal('john');
        expect(exportedP1.getValue()).to.be.equal('1234');
    });

});