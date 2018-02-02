'use strict';

const expect           = require('chai').expect,
      BinarySearchTree = require('../../lib/tree/binarySearchTree');

describe('binarySearchTree tests', () => {

    let bst = new BinarySearchTree();

    describe('.insert(value)', () => {
        it('should insert nodes to the tree', () => {
            bst.insert(50);
            bst.insert(80);
            bst.insert(30);
            bst.insert(90);
            bst.insert(60);
            bst.insert(40);
            bst.insert(20);
            expect(bst.count()).to.be.equal(7);
            expect(bst.getRoot().getValue()).to.equal(50);
            expect(bst.getRoot().getRight().getValue()).to.equal(80);
            expect(bst.getRoot().getLeft().getValue()).to.equal(30);
        });
    });

    describe('.getMin()', () => {
        it ('should get the node with min value', () => {
            expect(bst.getMin().getValue(20));
        });
    });

    describe('.getMax()', () => {
        it ('should get the node with min value', () => {
            expect(bst.getMax().getValue(90));
        });
    });

    describe('.find(value)', () => {
        it('should find a value in the tree', () => {
            expect(bst.find(40).getValue()).to.equal(40);
            expect(bst.find(100)).to.equal(null);
        });
    });

    describe('.traverse(cb, type)', () => {
        it('should traverse the tree in order', () => {
            let values = [];
            bst.traverse((value) => {
                values.push(value);
            }, 'inOrder');
            expect(values).to.deep.equal([ 20, 30, 40, 50, 60, 80, 90 ]);
        });

        it('should traverse the tree pre order', () => {
            let values = [];
            bst.traverse((value) => {
                values.push(value);
            }, 'preOrder');
            expect(values).to.deep.equal([ 50, 30, 20, 40, 80, 60, 90 ]);
        });

        it('should traverse the tree post order', () => {
            let values = [];
            bst.traverse((value) => {
                values.push(value);
            }, 'postOrder');
            expect(values).to.deep.equal([ 20, 40, 30, 60, 90, 80, 50 ]);
        });
    });

    describe('.delete(value)', () => {
        it('should delete a leaf node', () => {
            bst.delete(20);
            expect(bst.find(20)).to.equal(null);
            expect(bst.find(30).getLeft()).to.equal(null);
            expect(bst.count()).to.equal(6);
        });

        it('should delete a node with a right child only', function(){
            bst.delete(30);
            expect(bst.find(30)).to.equal(null);
            expect(bst.getRoot().getLeft().getValue()).to.equal(40);
            expect(bst.count()).to.equal(5);
        });


        it('should delete a node with a left child only', function(){
            bst.insert(30);
            bst.delete(40);
            expect(bst.find(40)).to.equal(null);
            expect(bst.getRoot().getLeft().getValue()).to.equal(30);
            expect(bst.count()).to.equal(5);
        });

        it('should delete a node with two children', function(){
            bst.delete(80);
            expect(bst.find(80)).to.equal(null);
            expect(bst.getRoot().getRight().getValue()).to.equal(90);
            expect(bst.find(90).getRight()).to.equal(null);
            expect(bst.find(90).getLeft().getValue()).to.equal(60);
            expect(bst.count()).to.equal(4);
        });
    });

});