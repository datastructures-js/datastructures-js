var expect = require('chai').expect,
    binaryTreeNode = require('../../lib/nodes/binaryTreeNode');

describe('binaryTreeNode test', function() {

    var root = binaryTreeNode(null, null, 50);
        left = binaryTreeNode(null, null, 30);
        right = binaryTreeNode(null, null, 70);
        root.setRight(right);
        root.setLeft(left);

    it('should access root', function() {
        expect(root.getValue()).to.be.equal(50);
        expect(root.getLeft().getValue()).to.be.equal(30);
        expect(root.getRight().getValue()).to.be.equal(70);
        var rootExp = root.export();
        expect(rootExp.getValue()).to.be.equal(50);
        expect(rootExp.getLeft().getValue()).to.be.equal(30);
        expect(rootExp.getRight().getValue()).to.be.equal(70);
    });

    it('should access right', function() {
        expect(right.getValue()).to.be.equal(70);
        expect(right.getLeft()).to.be.equal(null);
        expect(right.getRight()).to.be.equal(null);
        var rightExp = right.export();
        expect(rightExp.getValue()).to.be.equal(70);
        expect(rightExp.getLeft()).to.be.equal(null);
        expect(rightExp.getRight()).to.be.equal(null);
    });

    it('should access left', function() {
        expect(left.getValue()).to.be.equal(30);
        expect(left.getLeft()).to.be.equal(null);
        expect(left.getRight()).to.be.equal(null);
        var leftExp = left.export();
        expect(leftExp.getValue()).to.be.equal(30);
        expect(leftExp.getLeft()).to.be.equal(null);
        expect(leftExp.getRight()).to.be.equal(null);
    });
});