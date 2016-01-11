var expect = require('chai').expect,
    directedGraph = require('../lib/directedGraph');
        
describe('directedGraph test', function() {

    'use strict';

    describe('simple graph', function() {

        var diGraph = directedGraph().export();

        it('should add vertices', function() {
            diGraph.addVertex('v1');
            diGraph.addVertex('v2');
            diGraph.addVertex(3);
            diGraph.addVertex('v4');
            diGraph.addVertex('v5');

            expect(diGraph.countVertices()).to.be.equal(5);

            expect(diGraph.hasVertex('v1')).to.be.equal(true);
            expect(diGraph.hasVertex('v2')).to.be.equal(true);
            expect(diGraph.hasVertex(3)).to.be.equal(true);
            expect(diGraph.hasVertex('v4')).to.be.equal(true);
            expect(diGraph.hasVertex('v5')).to.be.equal(true);
        });

        it('should add and verify directions', function() {

            diGraph.addDirection('v1', '3', 7);
            diGraph.addDirection('v1', 'v5', 10);
            diGraph.addDirection('v2', 'v1', 9);
            diGraph.addDirection('3', 'v4', 11);
            diGraph.addDirection('v5', '3', 15);
            expect(diGraph.addDirection.bind(diGraph, 'v5', 'v4')).to.throw({
                message: 'weight is not a valid number'
            });
            expect(diGraph.addDirection.bind(diGraph, 'v5', 'v4', 'j')).to.throw({
                message: 'weight is not a valid number'
            });

            expect(diGraph.getDirectionWeight('v1', '3')).to.be.equal(7);
            expect(diGraph.getDirectionWeight('v1', 'v5')).to.be.equal(10);
            expect(diGraph.getDirectionWeight('v2', 'v1')).to.be.equal(9);
            expect(diGraph.getDirectionWeight('3', 'v4')).to.be.equal(11);
            expect(diGraph.getDirectionWeight('v5', '3')).to.be.equal(15);

        });

        it('should find the shortest path', function() {    
            var v1v4 = diGraph.findShortestPath('v1', 'v4'),
                v2v3 = diGraph.findShortestPath('v2', '3'),
                v5v2 = diGraph.findShortestPath('v5', 'v2');

            expect(v1v4.length).to.be.equal(1);
            expect(v1v4[0]).to.be.eql(['v1', '3', 'v4']);

            expect(v2v3.length).to.be.equal(1);
            expect(v2v3[0]).to.be.eql(['v2', 'v1', '3']);

            expect(v5v2.length).to.be.equal(0);
        });

        it('should remove a direction', function() {
            diGraph.removeDirection('v2', 'v1');
            expect(diGraph.getDirectionWeight('v2', 'v1')).to.be.equal(null);
        });

        it('should get the separated vertices', function() {
            var s = diGraph.getSeparatedVertices();
            expect(s).to.be.eql(['v2']);
        });

        it('should remove a vertex', function() {
            diGraph.removeVertex('v2');
            diGraph.removeVertex('3');

            expect(diGraph.countVertices()).to.be.equal(3);
            expect(diGraph.hasVertex('3')).to.be.equal(false);
            expect(diGraph.getDirectionWeight('3', 'v4')).to.be.equal(null);
            expect(diGraph.getDirectionWeight('v5', '3')).to.be.equal(null);
        });
    });

    describe('complex graph', function() {

        var diGraph = directedGraph().export();

        it('should add vertices', function() {
            diGraph.addVertex('v1');
            diGraph.addVertex('v2');
            diGraph.addVertex('v3');
            diGraph.addVertex('v4');
            diGraph.addVertex('v5');
            diGraph.addVertex('v6');
            diGraph.addVertex('v7');
            diGraph.addVertex('v8');
            diGraph.addVertex('v9');
            diGraph.addVertex('v10');
            diGraph.addVertex('v11');
            diGraph.addVertex('v12');

            expect(diGraph.countVertices()).to.be.equal(12);

            expect(diGraph.hasVertex('v1')).to.be.equal(true);
            expect(diGraph.hasVertex('v2')).to.be.equal(true);
            expect(diGraph.hasVertex('v3')).to.be.equal(true);
            expect(diGraph.hasVertex('v4')).to.be.equal(true);
            expect(diGraph.hasVertex('v5')).to.be.equal(true);
            expect(diGraph.hasVertex('v6')).to.be.equal(true);
            expect(diGraph.hasVertex('v7')).to.be.equal(true);
            expect(diGraph.hasVertex('v8')).to.be.equal(true);
            expect(diGraph.hasVertex('v9')).to.be.equal(true);
            expect(diGraph.hasVertex('v10')).to.be.equal(true);
            expect(diGraph.hasVertex('v11')).to.be.equal(true);
            expect(diGraph.hasVertex('v12')).to.be.equal(true);
        });

        it('should add and verify directions', function() {
            diGraph.addDirection('v1', 'v3', 10);
            diGraph.addDirection('v1', 'v6', 3);
            diGraph.addDirection('v1', 'v9', 12);
            diGraph.addDirection('v2', 'v12', 5);
            diGraph.addDirection('v3', 'v4', 6);
            diGraph.addDirection('v3', 'v7', 8);
            diGraph.addDirection('v3', 'v9', 4);
            diGraph.addDirection('v4', 'v2', 9);
            diGraph.addDirection('v4', 'v8', 1);
            diGraph.addDirection('v4', 'v11', 13);
            diGraph.addDirection('v5', 'v12', 11);
            diGraph.addDirection('v6', 'v5', 7);
            diGraph.addDirection('v7', 'v4', 10);
            diGraph.addDirection('v8', 'v2', 8);
            diGraph.addDirection('v9', 'v5', 13);
            diGraph.addDirection('v9', 'v6', 2);
            diGraph.addDirection('v9', 'v7', 5);
            diGraph.addDirection('v10', 'v2', 14);
            diGraph.addDirection('v10', 'v8', 6);
            diGraph.addDirection('v10', 'v11', 7);
            diGraph.addDirection('v10', 'v12', 2);
            diGraph.addDirection('v11', 'v8', 4);
            diGraph.addDirection('v12', 'v7', 3);

            expect(diGraph.getDirectionWeight('v1', 'v3')).to.be.equal(10);
            expect(diGraph.getDirectionWeight('v1', 'v6')).to.be.equal(3);
            expect(diGraph.getDirectionWeight('v1', 'v9')).to.be.equal(12);
            expect(diGraph.getDirectionWeight('v2', 'v12')).to.be.equal(5);
            expect(diGraph.getDirectionWeight('v3', 'v4')).to.be.equal(6);
            expect(diGraph.getDirectionWeight('v3', 'v7')).to.be.equal(8);
            expect(diGraph.getDirectionWeight('v3', 'v9')).to.be.equal(4);
            expect(diGraph.getDirectionWeight('v4', 'v2')).to.be.equal(9);
            expect(diGraph.getDirectionWeight('v4', 'v8')).to.be.equal(1);
            expect(diGraph.getDirectionWeight('v4', 'v11')).to.be.equal(13);
            expect(diGraph.getDirectionWeight('v5', 'v12')).to.be.equal(11);
            expect(diGraph.getDirectionWeight('v6', 'v5')).to.be.equal(7);
            expect(diGraph.getDirectionWeight('v7', 'v4')).to.be.equal(10);
            expect(diGraph.getDirectionWeight('v8', 'v2')).to.be.equal(8);
            expect(diGraph.getDirectionWeight('v9', 'v5')).to.be.equal(13);
            expect(diGraph.getDirectionWeight('v9', 'v6')).to.be.equal(2);
            expect(diGraph.getDirectionWeight('v9', 'v7')).to.be.equal(5);
            expect(diGraph.getDirectionWeight('v10', 'v2')).to.be.equal(14);
            expect(diGraph.getDirectionWeight('v10', 'v8')).to.be.equal(6);
            expect(diGraph.getDirectionWeight('v10', 'v11')).to.be.equal(7);
            expect(diGraph.getDirectionWeight('v10', 'v12')).to.be.equal(2);
            expect(diGraph.getDirectionWeight('v11', 'v8')).to.be.equal(4);
            expect(diGraph.getDirectionWeight('v12', 'v7')).to.be.equal(3);

        });

        it('should find the shortest path', function() {
            var v10v8 = diGraph.findShortestPath('v10', 'v8'),
                v1v7 = diGraph.findShortestPath('v1', 'v7'),
                v6v2 = diGraph.findShortestPath('v6', 'v2'),
                v3v12 = diGraph.findShortestPath('v3', 'v12'),
                v12v3 = diGraph.findShortestPath('v12', 'v3'),
                v1v10 = diGraph.findShortestPath('v1', 'v10'),
                v10v1 = diGraph.findShortestPath('v10', 'v1');
                
            expect(v10v8.length).to.be.equal(1);
            expect(v10v8[0]).to.be.eql(['v10', 'v8']);

            expect(v1v7.length).to.be.equal(1);
            expect(v1v7[0]).to.be.eql(['v1', 'v9', 'v7']);

            expect(v6v2.length).to.be.equal(2);
            expect(v6v2[0]).to.be.eql(['v6', 'v5', 'v12', 'v7', 'v4', 'v2']);
            expect(v6v2[1]).to.be.eql(['v6', 'v5', 'v12', 'v7', 'v4', 'v8', 'v2']);

            expect(v3v12.length).to.be.equal(2);
            expect(v3v12[0]).to.be.eql(['v3', 'v4', 'v2', 'v12']);
            expect(v3v12[1]).to.be.eql(['v3', 'v4', 'v8', 'v2', 'v12']);

            expect(v12v3.length).to.be.equal(0);
            expect(v1v10.length).to.be.equal(0);    
            expect(v10v1.length).to.be.equal(0);    
        });

        it('should remove a direction', function() {
            diGraph.removeDirection('v10', 'v2');
            diGraph.removeDirection('v10', 'v8');
            diGraph.removeDirection('v10', 'v11');
            diGraph.removeDirection('v10', 'v12');
            diGraph.removeDirection('v11', 'v8');
            diGraph.removeDirection('v4', 'v11');

            expect(diGraph.getDirectionWeight('v10', 'v2')).to.be.equal(null);
            expect(diGraph.getDirectionWeight('v10', 'v8')).to.be.equal(null);
            expect(diGraph.getDirectionWeight('v10', 'v11')).to.be.equal(null);
            expect(diGraph.getDirectionWeight('v10', 'v12')).to.be.equal(null);
            expect(diGraph.getDirectionWeight('v11', 'v8')).to.be.equal(null);
            expect(diGraph.getDirectionWeight('v4', 'v11')).to.be.equal(null);
        });

        it('should get the separated vertices', function() {
            var s = diGraph.getSeparatedVertices();
            expect(s).to.be.have.members(['v10', 'v11']);
        });

        it('should remove a vertex', function() {
            diGraph.removeVertex('v2');

            expect(diGraph.countVertices()).to.be.equal(11);
            expect(diGraph.hasVertex('v2')).to.be.equal(false);
        });

    });
});