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
    return this._prev;
  }
  
  /**
   * @public
   * @param {DoubleLinkedListNode} node
   */
  setPrev(node) {
    this._setNode(node, '_prev');
  }

}

module.exports = DoublyLinkedListNode;