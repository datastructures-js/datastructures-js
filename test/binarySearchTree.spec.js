var expect = require('chai').expect,
    binarySearchTree = require('../lib/binarySearchTree');

describe('binarySearchTree test', function() {

    'use strict';

    var bst = binarySearchTree().export(),
        values = [];

    var traverseFunc = function(nodeVal) {
        values.push(nodeVal);
    };

    beforeEach(function(){
        values = [];
    });

    it('should have null root', function(){
        expect(bst.getRoot()).to.be.equal(null);
        expect(bst.count()).to.be.equal(0);

        // try to remove non existing value
        bst.remove(10);
        expect(bst.getRoot()).to.be.equal(null);
        expect(bst.count()).to.be.equal(0);
    });

    it('should insert elements', function(){
        bst.insert(50);
        bst.insert(80);
        bst.insert(30);
        bst.insert(90);
        bst.insert(60);
        bst.insert(40);
        bst.insert(20);
        expect(bst.count()).to.be.equal(7);
    });

    it('should get root', function(){
        var root = bst.getRoot();
        expect(root.getValue()).to.be.equal(50);
        expect(root.getRight().getValue()).to.be.equal(80);
        expect(root.getLeft().getValue()).to.be.equal(30);
    });

    it('should get max value', function(){
        expect(bst.getMaxValue()).to.be.equal(90);
    });

    it('should get min value', function(){
        expect(bst.getMinValue()).to.be.equal(20);
    });

    it('should traverse the tree in order', function(){
        bst.traverse('inOrder', traverseFunc);
        expect(values).to.be.eql([20, 30, 40, 50, 60, 80, 90]);
    });

    it('should traverse the tree pre order', function() {
        bst.traverse('preOrder', traverseFunc);
        expect(values).to.be.eql([50, 30, 20, 40, 80, 60, 90]);
    });

    it('should traverse the tree post order', function() {
        bst.traverse('postOrder', traverseFunc);
        expect(values).to.be.eql([20, 40, 30, 60, 90, 80, 50]);
    });

    it('should find a value in th tree', function(){
        var node = bst.find(30),
            notFound = bst.find(100);
            
        expect(node.getValue()).to.be.eql(30);
        expect(node.getLeft().getValue()).to.be.equal(20);
        expect(node.getRight().getValue()).to.be.equal(40);
        expect(notFound).to.be.equal(null);
    });

    it('should remove a leaf node', function(){
        bst.remove(20);
        expect(bst.count()).to.be.equal(6);
        expect(bst.getMinValue()).to.be.equal(30);
    });

    it('should remove a node with a right child only', function(){
        bst.remove(30);
        expect(bst.count()).to.be.equal(5);
        expect(bst.getMinValue()).to.be.equal(40);
    });

    it('should remove a node with a left child only', function(){
        bst.insert(30); // 30 is now left child for 40

        bst.remove(40);

        expect(bst.count()).to.be.equal(5);
        expect(bst.getMinValue()).to.be.equal(30);
    });

    it('should remove a node with two children', function(){
        bst.remove(80);
        expect(bst.count()).to.be.equal(4);
        expect(bst.getMaxValue()).to.be.equal(90);
    });

});