/**
 * datastructures-js/linkedList/LinkedListNode
 * @class
 * @copyright 2018 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

class LinkedListNode {

  /**
   * @constructor
   */  
  constructor(value, next) {
    this.value = value;
    this.setNext(next);
  }

  /**
   * @public
   * @returns {object}
   */    
  getValue() {
    return this.value;
  }

  /**
   * @public
   * @param {(string|number|boolean|null|undefined)} value
   */
  setValue(value) {
    this.value = value;
  }

  /**
   * @public
   * @returns {LinkedListNode}
   */   
  getNext() {
    return this.next;
  }

  /**
   * @public
   * @param {LinkedListNode} node
   */   
  setNext(node) {
    this._setNode(node, 'next');
  }

  /**
   * @protected
   * @param {LinkedListNode} node
   * @param {string} type
   */   
  _setNode(node, type) {
    if (node instanceof LinkedListNode) {
      this[type] = node;
    }
    else {
      this[type] = null;
    }
  }
}

module.exports = LinkedListNode;