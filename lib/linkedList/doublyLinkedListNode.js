/**
 * datastructures-js/linkedList/DoublyLinkedListNode
 * @class
 * @extends LinkedListNode
 * @copyright 2018 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

const LinkedListNode = require('./linkedListNode');

class DoublyLinkedListNode extends LinkedListNode {

  /**
   * @constructor
   */
  constructor(value, next, prev) {
    super(value, next);
    this.setPrev(prev);
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

  /**
   * @public
   * @param {DoubleLinkedListNode} node
   */
  setNext(node) {
    this._setNode(node, 'next');
  }

}

module.exports = DoublyLinkedListNode;