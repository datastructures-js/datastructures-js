var expect = require('chai').expect,
    hashtable = require('../lib/hashtable');

describe('hashtable test', function() {

    'use strict';

    describe('without collisions', function(){

        var ht = hashtable().export();

        it('should put elements', function(){
            ht.put('john', 4456);
            ht.put('samantha', 1123);
            ht.put(33, 9870);
            expect(ht.get('john')).to.be.equal(4456);
            expect(ht.get('samantha')).to.be.equal(1123);
            expect(ht.get(33)).to.be.equal(9870);
            expect(ht.get('not-exist')).to.be.equal(undefined);
        });

        it('should have 3 pairs', function(){
            expect(ht.count()).to.be.equal(3);
        });

        it('should remove an element', function(){
            ht.remove(33);
            expect(ht.contains(33)).to.be.equal(false);
        });

        it('should override an existing element', function(){
            ht.put('john', 'modified');
            expect(ht.contains('john')).to.be.equal(true);
            expect(ht.get('john')).to.be.equal('modified');
        });

        it('should iterate over the hashtable', function(){
            var iterator = ht.iterator(),
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
        
        var ht = hashtable().export();
        // TODO Tests
    });

});