var expect = require('chai').expect,
    hashtable = require('../lib/hashtable');

describe('hashtable test', function() {

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
        
        var ht = hashtable();

        it('should add an element', function(){
            ht.put('h', 11);
            ht.put('hh', 55);
            ht.put('hhh', 99);
            expect(ht.get('h')).to.be.equal(11);
            expect(ht.get('hh')).to.be.equal(55);
            expect(ht.get('hhh')).to.be.equal(99);
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
                    key: 'h',
                    value: 11
                },
                {
                    key: 'hh',
                    value: 55
                },
                {
                    key: 'hhh',
                    value: 99
                }
            ]);

        });

        it('should override an existing element', function(){
            ht.put('h', 77);
            expect(ht.get('h')).to.be.equal(77);
            expect(ht.get('hh')).to.be.equal(55);
            expect(ht.get('hhh')).to.be.equal(99);
        });

    });

});