/**
 * datastructures-js/tree/Trie
 * @class
 * @copyright 2018 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

const TrieNode = require('./trieNode');

class Trie {

  /**
   * @constructor
   */
  constructor() {
    this._nodesCount = 0;
    this._wordsCount = 0;
    this._root = this._createNode(null);
  }

  /**
   * @public
   * gets the count of nodes
   * @returns {number}
   */
  countNodes() {
    return this._nodesCount;
  }

  /**
   * @public
   * gets the count of words
   * @returns {number}
   */
  countWords() {
    return this._wordsCount;
  }

  /**
   * @public
   * inserts a word into the trie
   * @param {string} word
   * @param {TrieNode} [node=root] - memoisez current node
   * @param {TrieNode} [index=0] - memoisez char index
   */
  insert(word, node = this._root, index = 0) {
    if (index < word.length && node.getChild(word[index]) === null) {
      node.addChild(this._createNode(word[index]));
    }
    if (index < word.length) {
      this.insert(word, node.getChild(word[index]), ++index);
    }
    else if (index === word.length) {
      node.setEndOfWord(true);
      this._wordsCount++;
    }
  }

  /**
   * @public
   * removes a word from the trie
   * @param {string} word
   */
  remove(word) {
    let node = this.search(word);
    let counter = 0;
    while (node !== null && counter <= word.length) {
      let childrenCount = node.countChildren();
      if ((childrenCount === 0 && counter === 0) || 
        (childrenCount === 0 && !node.isEndOfWord())) {
        node = this._removeNode(node);
      }
      else if (node.isEndOfWord() && counter > 0) {
        this._wordsCount--;
        break;
      }
      else if (childrenCount > 0) {
        node.setEndOfWord(false);
        this._wordsCount--;
        break;
      }
      if (node === null) {
        this._wordsCount--;
      }
      counter++;
    }
  }

  /**
   * @public
   * finds a word in the trie
   * @param {string} word
   * @param {TrieNode} [node=root] - memoisez current node
   * @param {TrieNode} [index=0] - memoisez char index
   * @returns {TrieNode} - the last char node
   */
  search(word, node = this._root, index = 0) {
    if (index < word.length) {
      let child = node.getChild(word[index]);
      if (child === null) {
        return null;
      }
      else {
        return this.search(word, child, ++index);
      }
    }
    else if (index === word.length && node.isEndOfWord()) {
      return node;
    }
    else {
      return null;
    }
  }

  /**
   * @private
   * creates a node
   * @returns {TrieNode}
   */
  _createNode(char) {
    this._nodesCount++;
    return new TrieNode(char);
  }

  /**
   * @private
   * removes a node
   * @returns {TrieNode} - the parent node
   */
  _removeNode(node) {
    let parent = node.getParent();
    if (parent !== null) {
      parent.removeChild(node);
      this._nodesCount--;
    }
    return parent;
  }

}

module.exports = Trie;