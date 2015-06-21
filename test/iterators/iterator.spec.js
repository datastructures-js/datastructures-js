var expect = require('chai').expect,
    iterator = require('../../src/iterators/iterator');

describe('iterator test', function() {

	var elements = [1, 2, 3];
		itr = iterator(elements).export();

	it('should have a null current first', function() {
		expect(itr.current()).to.be.equal(null);
	});

	it('should iterate over the elements', function() {
		var e = [];

		while (itr.next()) {
			e.push(itr.current());
		}

		expect(e).to.be.eql(elements);
	});

});