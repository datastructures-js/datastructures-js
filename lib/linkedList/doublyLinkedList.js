/**
 * datastructures-js/linkedList/DoublyLinkedList
 * @class
 * @extends LinkedList
 * @copyright 2018 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

const DoublyLinkedListNode = require('./doublyLinkedListNode');
const LinkedList           = require('./linkedList');

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
    return this.tailNode;
  }

  /**
   * @public
   * adds a new node at the beginning of the doubly linked list
   * @param {(string|number|boolean|null|undefined)} value
   */
  addFirst(value) {
    if (this.headNode === null) {
      let newNode = new DoublyLinkedListNode(value, null, null);
      this.headNode = newNode;
      this.tailNode = newNode;
      this.count++;
    }
    else {
      let newNode = new DoublyLinkedListNode(value, this.headNode, null);
      this.headNode.setPrev(newNode);
      this.headNode = this.headNode.getPrev();
      this.count++;
    }
  }

  /**
   * @public
   * adds a new node at the end of the doubly linked list
   * @param {(string|number|boolean|null|undefined)} value
   */
  addLast(value) {
    if (this.headNode === null) {
      this.addFirst(value);
      this.count++;
    }
    else {
      let newNode = new DoublyLinkedListNode(value, null, this.tailNode);
      this.tailNode.setNext(newNode);
      this.tailNode = newNode;
      this.count++;
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
    else if (node === this.tailNode) {
      this.addLast(newValue);
    }
    else {
      let newNode = new DoublyLinkedListNode(newValue, node.getNext(), node);
      node.getNext().setPrev(newNode);
      node.setNext(newNode);
      this.count++;
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
    else if (node === this.headNode) {
      this.addFirst(newValue);
    }
    else {
      let newNode = new DoublyLinkedListNode(newValue, node, node.getPrev());
      node.getPrev().setNext(newNode);
      node.setPrev(newNode);
      this.count++;
    }
  }

  /**
   * @public
   * removes the first node
   */
  removeFirst() {
    this._removeEdgeNode(() => {
      this.headNode = this.headNode.getNext();
      this.headNode.setPrev(null);
      this.count--;
    });
  }

  /**
   * @public
   * removes the last node
   */
  removeLast() {
    this._removeEdgeNode(() => {
      this.tailNode = this.tailNode.getPrev();
      this.tailNode.setNext(null);
      this.count--;
    });
  }

  /**
   * @public
   * removes a node from the doublyLinkedList by its value
   * @param {(string|number|boolean|null|undefined)} value
   */
  remove(value) {
    let node = this.find(value);
    if (node !== null && node === this.headNode) {
      this.removeFirst();
    }
    else if (node !== null && node === this.tailNode) {
      this.removeLast();
    }
    else if (node !== null) {
      node.getPrev().setNext(node.getNext());
      node.getNext().setPrev(node.getPrev());
      node.setPrev(null);
      node.setNext(null);
      this.count--;
    }
  }

  /**
   * @public
   * traverse the doublyLinkedList from the end to start
   * @param {function} cb - called with the value of each node
   * @param {LinkedListNode} [current=tail] - optional starting node
   */
  traverseBackward(cb, current = this.tailNode) {
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
    if (this.headNode !== null && this.headNode.getNext() === null) {
      this.headNode = null;
      this.tailNode = null;
      this.count--;
    }
    else if (this.headNode !== null && this.headNode.getNext() !== null) {
      cb();
    }
  }

  /**
   * @private
   * initialize the doublyLinkedlist properties
   */
  _init() {
    super._init();
    this.tailNode = null;
  }

}

module.exports = DoublyLinkedList;