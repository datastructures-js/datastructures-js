'use strict';

const expect = require('chai').expect;
const Trie = require('../../lib/tree/trie');

describe('trie tests', () => {

  let trie = new Trie();

  describe('.insert(word)', () => {
    it('should insert words into the trie', () => {
      trie.insert('hi');
      trie.insert('hit');
      trie.insert('hide');
      trie.insert('hello');
      trie.insert('sand');
      trie.insert('safe');
      trie.insert('noun');
      trie.insert('name');
    });
  });

  describe('.countNodes()', () => {
    it('should get the count of characters', () => {
      expect(trie.countNodes()).to.equal(23);
    });
  });

  describe('.countWords()', () => {
    it('should get the count of words', () => {
      expect(trie.countWords()).to.equal(8);
    });
  });

  describe('.search(word)', () => {
    it('should find the inserted words into the trie', () => {
      expect(trie.search('hi')).to.not.equal(null);
      expect(trie.search('hello')).to.not.equal(null);
      expect(trie.search('hit')).to.not.equal(null);
      expect(trie.search('hide')).to.not.equal(null);
      expect(trie.search('name')).to.not.equal(null);
      expect(trie.search('noun')).to.not.equal(null);
      expect(trie.search('sand')).to.not.equal(null);
      expect(trie.search('safe')).to.not.equal(null);

      expect(trie.search('his')).to.equal(null);
      expect(trie.search('helo')).to.equal(null);
      expect(trie.search('hitt')).to.equal(null);
      expect(trie.search('nnnn')).to.equal(null);
      expect(trie.search('h')).to.equal(null);
      expect(trie.search('san')).to.equal(null);
    });
  });

  describe('.remove(word)', () => {
    it('should remove words from the trie', () => {
      trie.remove('hit');
      expect(trie.search('hit')).to.equal(null);
      expect(trie.countNodes()).to.equal(22);
      expect(trie.countWords()).to.equal(7);

      trie.remove('hi');
      expect(trie.search('hi')).to.equal(null);
      expect(trie.countNodes()).to.equal(22);
      expect(trie.countWords()).to.equal(6);

      trie.remove('hide');
      expect(trie.search('hide')).to.equal(null);
      expect(trie.countNodes()).to.equal(19);
      expect(trie.countWords()).to.equal(5);

      trie.remove('hello');
      expect(trie.search('hello')).to.equal(null);
      expect(trie.countNodes()).to.equal(14);
      expect(trie.countWords()).to.equal(4);

      trie.remove('safe');
      expect(trie.search('safe')).to.equal(null);
      expect(trie.countNodes()).to.equal(12);
      expect(trie.countWords()).to.equal(3);

      trie.remove('sand');
      expect(trie.search('sand')).to.equal(null);
      expect(trie.countNodes()).to.equal(8);
      expect(trie.countWords()).to.equal(2);

      trie.remove('noun');
      expect(trie.search('noun')).to.equal(null);
      expect(trie.countNodes()).to.equal(5);
      expect(trie.countWords()).to.equal(1);

      trie.remove('name');
      expect(trie.search('name')).to.equal(null);
      expect(trie.countNodes()).to.equal(1);
      expect(trie.countWords()).to.equal(0);
    });
  });

  describe('.clear()', () => {
    it('should clear the trie', () => {
      trie.insert('test');
      trie.clear();
      expect(trie.search('test')).to.equal(null);
      expect(trie.countNodes()).to.equal(1);
      expect(trie.countWords()).to.equal(0);
    });
  });

});