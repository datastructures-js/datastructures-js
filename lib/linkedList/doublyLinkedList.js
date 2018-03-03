/**
 * datastructures-js/linkedList/DoublyLinkedList
 * @class
 * @extends LinkedList
 * @copyright 2018 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

const LinkedList = require('./linkedList');
const DoublyLinkedListNode = require('./doublyLinkedListNode');

class DoublyLinkedList extends LinkedList {

  /**
   * @constructor
   */
  constructor() {
    super();
    this._init();
  }

  /**
   * @public
   * gets the tail of the doublyLinkedList
   * @returns {LinkedListNode}
   */
  tail() {
    return this._tailNode;
  }

  /**
   * @public
   * adds a new node at the beginning of the doubly linked list
   * @param {(string|number|boolean|null|undefined)} value
   */
  addFirst(value) {
    if (this._headNode === null) {
      let newNode = new DoublyLinkedListNode(value, null, null);
      this._headNode = newNode;
      this._tailNode = newNode;
      this._count++;
    }
    else {
      let newNode = new DoublyLinkedListNode(value, this._headNode, null);
      this._headNode.setPrev(newNode);
      this._headNode = this._headNode.getPrev();
      this._count++;
    }
  }

  /**
   * @public
   * adds a new node at the end of the doubly linked list
   * @param {(string|number|boolean|null|undefined)} value
   */
  addLast(value) {
    if (this._headNode === null) {
      this.addFirst(value);
      this._count++;
    }
    else {
      let newNode = new DoublyLinkedListNode(value, null, this._tailNode);
      this._tailNode.setNext(newNode);
      this._tailNode = newNode;
      this._count++;
    }
  }

  /**
   * @public
   * adds a new node after an existing node
   * @param {(string|number|boolean|null|undefined)} value - existing node value
   * @param {(string|number|boolean|null|undefined)} newValue - new node value
   * @throws {Error} - when value does not exist
   */
  addAfter(value, newValue) {
    let node = this.find(value);
    if (node === null) {
      throw new Error('node ' + value + ' not found');
    }
    else if (node === this._tailNode) {
      this.addLast(newValue);
    }
    else {
      let newNode = new DoublyLinkedListNode(newValue, node.getNext(), node);
      node.getNext().setPrev(newNode);
      node.setNext(newNode);
      this._count++;
    }
  }

  /**
   * @public
   * adds a new node before an existing node
   * @param {(string|number|boolean|null|undefined)} value - existing node value
   * @param {(string|number|boolean|null|undefined)} newValue - new node value
   * @throws {Error} - when value does not exist
   */
  addBefore(value, newValue) {
    let node = this.find(value);
    if (node === null) {
      throw new Error('node ' + value + ' not found');
    }
    else if (node === this._headNode) {
      this.addFirst(newValue);
    }
    else {
      let newNode = new DoublyLinkedListNode(newValue, node, node.getPrev());
      node.getPrev().setNext(newNode);
      node.setPrev(newNode);
      this._count++;
    }
  }

  /**
   * @public
   * removes the first node
   */
  removeFirst() {
    this._removeEdgeNode(() => {
      this._headNode = this._headNode.getNext();
      this._headNode.setPrev(null);
      this._count--;
    });
  }

  /**
   * @public
   * removes the last node
   */
  removeLast() {
    this._removeEdgeNode(() => {
      this._tailNode = this._tailNode.getPrev();
      this._tailNode.setNext(null);
      this._count--;
    });
  }

  /**
   * @public
   * removes a node from the doublyLinkedList by its value
   * @param {(string|number|boolean|null|undefined)} value
   */
  remove(value) {
    let node = this.find(value);
    if (node !== null && node === this._headNode) {
      this.removeFirst();
    }
    else if (node !== null && node === this._tailNode) {
      this.removeLast();
    }
    else if (node !== null) {
      node.getPrev().setNext(node.getNext());
      node.getNext().setPrev(node.getPrev());
      node.setPrev(null);
      node.setNext(null);
      this._count--;
    }
  }

  /**
   * @public
   * traverse the doublyLinkedList from the end to start
   * @param {function} cb - called with the value of each node
   * @param {LinkedListNode} [current=tail] - optional starting node
   */
  traverseBackward(cb, current = this._tailNode) {
    if (current !== null) {
      cb(current.getValue());
      this.traverseBackward(cb, current.getPrev());
    }
  }

  /**
   * @private
   * @param {function} cb
   */
  _removeEdgeNode(cb) {
    if (this._headNode !== null && this._headNode.getNext() === null) {
      this._headNode = null;
      this._tailNode = null;
      this._count--;
    }
    else if (this._headNode !== null && this._headNode.getNext() !== null) {
      cb();
    }
  }

  /**
   * @private
   * initialize the doublyLinkedlist properties
   */
  _init() {
    super._init();
    this._tailNode = null;
  }

}

module.exports = DoublyLinkedList;