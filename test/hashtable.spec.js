var expect = require('chai').expect,
    hashtable = require('../src/hashtable');

describe('hashtable test', function() {

    describe('without collisions', function(){
        
        it('should throw exception if length is not a primary number', function() {
            expect(hashtable.bind(hashtable, 4678)).to.throw({
                message: 'hashtable must have a prime numbe length'
            });
        });

        var ht = hashtable(3571).export();

        it('should put elements', function(){
            ht.put('john', 4456);
            ht.put('samantha', 1123);
            ht.put(33, 9870);
            expect(ht.get('john')).to.be.equal(4456);
            expect(ht.get('samantha')).to.be.equal(1123);
            expect(ht.get(33)).to.be.equal(9870);
        });

        it('should not have collisions', function(){
            expect(ht.getCollidedKeys().length).to.be.equal(0);
        });

        it('should remove an element', function(){
            ht.remove(33);
            expect(ht.contains(33)).to.be.equal(false);
        });

        it('should override an existing element', function(){
            ht.put('john', 8890);
            expect(ht.contains('john')).to.be.equal(true);
            expect(ht.get('john')).to.be.equal(8890);
        });

        it('should iterate over the hashtable', function(){
            var iterator = ht.iterator(),
                keys = [],
                values = [];

            expect(iterator.current()).to.be.equal(null);

            while (iterator.next()) {
                var element = iterator.current();
                keys.push(element.key);
                values.push(element.value);
            }

            expect(keys).to.have.members(['john', 'samantha']);
            expect(values).to.have.members([8890, 1123]);

        });      
    });

    describe('with collisions', function(){
        
        var ht = hashtable(31);

        it('should add an element', function(){
            ht.put('h', 11);
            ht.put('hh', 55);
            ht.put('hhh', 99);
        });

        it('should iterate over the hashtable', function(){
            var iterator = ht.iterator(),
                keys = [],
                values = [];

            expect(iterator.current()).to.be.equal(null);

            while (iterator.next()) {
                var element = iterator.current();
                keys.push(element.key);
                values.push(element.value);
            }

            expect(keys[0]).to.have.members(['h', 'hh', 'hhh']);
            expect(values[0]).to.have.members([11, 55, 99]);

        });     

        it('should have collisions', function(){
            var collisions = ht.getCollidedKeys();
            expect(collisions.length).to.be.equal(1);
            expect(collisions[0]).to.include.members(['h', 'hh', 'hhh']);
        });

        it('should have collided elements in an array', function(){
            expect(ht.get('h')).to.include.members([11, 55, 99]);
            expect(ht.get('hh')).to.include.members([11, 55, 99]);
            expect(ht.get('hhh')).to.include.members([11, 55, 99]);
        });

        it('should override an existing collision', function(){
            ht.put('h', 77);
            expect(ht.get('h')).to.be.equal(77);
            expect(ht.contains('hh')).to.be.equal(false);
            expect(ht.contains('hhh')).to.be.equal(false);
        });

    });

});