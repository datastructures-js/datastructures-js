/**
 * datastructures-js/tree/TrieNode
 * @class
 * @copyright 2018 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

class TrieNode {

  /**
   * @constructor
   */
  constructor(char) {
    this._char = char;
    this._endOfWord = false;
    this._parent = null;
    this._children = {};
    this._childrenCount = 0;
  }

  /**
   * @public
   * sets the node's character
   * @param {string}
   */
  setChar(char) {
    this._char = char;
  }

  /**
   * @public
   * gets the node's character
   * @return {string}
   */
  getChar() {
    return this._char;
  }

  /**
   * @public
   * sets the node's parent
   * @param {TrieNode}
   */
  setParent(parent) {
    this._parent = parent;
  }

  /**
   * @public
   * gets the node's parent
   * @return {TrieNode}
   */
  getParent() {
    return this._parent;
  }


  /**
   * @public
   * sets if the node is the last char of a word
   * @param {boolean}
   */
  setEndOfWord(isEndOfWord) {
    this._endOfWord = (isEndOfWord && true) || false;
  }

  /**
   * @public
   * checks if the node is the last char of a word
   * @returns {boolean}
   */
  isEndOfWord() {
    return this._endOfWord;
  }

  /**
   * @public
   * adds a child the node
   * @param {TrieNode} child
   */
  addChild(child) {
    this._children[child.getChar()] = child;
    child.setParent(this);
    this._childrenCount++;
  }

  /**
   * @public
   * removes a child from node
   * @param {TrieNode} child
   */
  removeChild(child) {
    this._children[child.getChar()] = null;
    this._childrenCount--;
  }

  /**
   * @public
   * gets a child of the node by its character
   * @param {TrieNode} child
   */
  getChild(char) {
    return this._children[char] || null;
  }

  /**
   * @public
   * gets children of the node
   * @returns {object}
   */
  getChildren() {
    return this._children;
  }

  /**
   * @public
   * gets the count of the node's children
   * @param {TrieNode} child
   */
  countChildren() {
    return this._childrenCount;
  }

}

module.exports = TrieNode;