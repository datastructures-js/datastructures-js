/*!
 * datastructures-js
 * DoublyLinkedListNode
 * Copyright(c) 2018 Eyas Ranjous <eyas.ranjous@gmail.com>
 * MIT Licensed
 */

const LinkedListNode = require('./linkedListNode');

class DoublyLinkedListNode extends LinkedListNode {

  constructor(value, next, prev) {
    super(value, next);
    this.setPrev(prev);
  }

  /**
   * @public
   * @param {DoubleLinkedListNode} node
   */
  setNext(node) {
    this._setNode(node, 'next');
  }

  /**
   * @public
   * @return {DoublyLinkedListNode}
   */
  getPrev() {
    return this.prev;
  }
  
  /**
   * @public
   * @param {DoubleLinkedListNode} node
   */
  setPrev(node) {
    this._setNode(node, 'prev');
  }

}

module.exports = DoublyLinkedListNode;