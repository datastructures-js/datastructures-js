var expect = require('chai').expect,
    di = require('../../di');

describe('hashtable test', function() {

    'use strict';

    describe('without collisions', function(){

        var hashtable = di.getHashtableFactory()();

        it('should put elements', function(){
            hashtable.put('john', 4456);
            hashtable.put('samantha', 1123);
            hashtable.put(33, 9870);
            expect(hashtable.get('john')).to.be.equal(4456);
            expect(hashtable.get('samantha')).to.be.equal(1123);
            expect(hashtable.get(33)).to.be.equal(9870);
            expect(hashtable.get('not-exist')).to.be.equal(undefined);
        });

        it('should have 3 pairs', function(){
            expect(hashtable.count()).to.be.equal(3);
        });

        it('should remove an element', function(){
            hashtable.remove(33);
            expect(hashtable.contains(33)).to.be.equal(false);
            expect(hashtable.count()).to.be.equal(2);
        });

        it('should not affect count when removing non existing element', function(){
            hashtable.remove(6464);
            expect(hashtable.count()).to.be.equal(2);
        });

        it('should update an existing element', function(){
            hashtable.put('john', 'modified');
            expect(hashtable.contains('john')).to.be.equal(true);
            expect(hashtable.get('john')).to.be.equal('modified');
        });

        it('should iterate over the hashtable', function(){
            var iterator = hashtable.iterator(),
                el = [];

            while (iterator.hasNext()) {
                var pair = iterator.next();
                el.push({
                    key: pair.getKey(),
                    value: pair.getValue()
                });
            }

            expect(el).to.deep.include.members([
                {
                    key: 'john',
                    value: 'modified'
                },
                {
                    key: 'samantha',
                    value: 1123
                }
            ]);
        });

    });

    describe('with collisions', function(){
        
        var htPairFactory = di.getFactory('nd', 'hashTablePair'),
            hashFunction = di.getFactory('hlp', 'sumCharsHash', [3, 5]),
            htIteratorFactory = di.getHtIteratorFactory(),
            hashtable = di.getFactory('ds', 'hashtable', 
                [htPairFactory, htIteratorFactory, hashFunction])();

        it('should put elements', function(){
            hashtable.put('e', 1234);
            hashtable.put('r', 1111);
            expect(hashtable.get('e')).to.be.equal(1234);
            expect(hashtable.get('r')).to.be.equal(1111);
        });

        it('should have 2 pairs', function() {
            expect(hashtable.count()).to.be.equal(2);
        });

        it('should update an existing pair value', function() {
            hashtable.put('e', 555);
            expect(hashtable.get('e')).to.be.equal(555);
        }); 

        it('should chain a collided element', function() {
            hashtable.put('eeeee', 'c');
            expect(hashtable.get('eeeee')).to.be.equal('c');
            expect(hashtable.get('e')).to.be.equal(555);
            expect(hashtable.count()).to.be.equal(3);
        }); 

        it('should remove a collided element', function() {
            hashtable.remove('eeeee');
            expect(hashtable.get('eeeee')).to.be.equal(undefined);
            expect(hashtable.get('e')).to.be.equal(555);
            expect(hashtable.count()).to.be.equal(2);
        });

        it('should remove all elements', function() {
            var ht = di.getFactory('ds', 'hashtable', 
                [htPairFactory, htIteratorFactory, hashFunction])();
            for (var i = 0; i < 1000; i++) {
                ht.put(i, i);
            }
            expect(ht.count()).to.be.equal(1000);
            for (var i = 0; i < 1000; i++) {
                ht.remove(i);
            }
            expect(ht.count()).to.be.equal(0);
        }); 

    });

});