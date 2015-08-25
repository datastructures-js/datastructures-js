var expect = require('chai').expect,
    hashTablePair = require('../../lib/nodes/hashTablePair');

describe('hashTablePair test', function() {

    // john and sam keys are colliding (have the same hash)
    var p1 = hashTablePair('john', '123456');

    it('should access p1', function() {
        var p1Exp = p1.export();
        expect(p1.getKey()).to.be.equal('john');
        expect(p1.getValue()).to.be.equal('123456');
    });

    it('should set a new value to p1', function() {
        p1.setValue('3333333');
        expect(p1.getValue()).to.be.equal('3333333');
    });

});