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
        });

        it('should override an existing element', function(){
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
        
        var ht = di.getHashtableFactory()();
        // TODO Tests
    });

});