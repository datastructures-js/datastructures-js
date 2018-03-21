/**
 * datastructures-js/Set
 * @class
 * @copyright 2018 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

class Set {

  /**
   * @constructor
   */
  constructor() {
    this._init();
  }

  /**
   * @public
   * gets the size of the set
   * @returns {number}
   */
  size() {
    return this._count;
  }

  /**
   * @public
   * checks if the set is empty
   * @returns {boolean}
   */
  isEmpty() {
    return this._count === 0;
  }

  /**
   * @public
   * checks if the set contains an element
   * @param {(string|number|boolean)} element
   * @returns {number}
   */
  contains(element) {
    return this._elements[element] === true;
  } 

  /**
   * @public
   * adds an element to the set
   * @param {(string|number|boolean)} element
   */
  add(element) {
    if (!this._elements[element]) {
      this._elements[element] = true;
      this._count++;
    }
  }

  /**
   * @public
   * removes an element from the set
   * @param {(string|number|boolean)} element
   */
  remove(element){ 
    if (this._elements[element]) {
      this._elements[element] = false;
      this._count--;
    }
  }

  /**
   * @public
   * joins the actual set with a another set
   * @param {Set} s
   * @returns {Set}
   * @throws {Error} - when s type is not Set
   */
  union(s) {
    return this._operate(s, 'union');
  }

  /**
   * @public
   * intersects the actual set with another set
   * @param {Set} s
   * @returns {Set}
   * @throws {Error} - when s type is not Set
   */
  intersect(s) {
    return this._operate(s, 'intersect');
  }

  /**
   * @public
   * returns a set with elements that exists 
   * in the actual set but not in the given set
   * @param {Set} s
   * @returns {Set}
   * @throws {Error} - when s type is not Set
   */
  diff(s) {
    return this._operate(s, 'diff');
  }

  /**
   * @public
   * checks if the actual set is a subset of another set
   * @param {Set} s
   * @returns {boolean}
   * @throws {Error} - when s type is not Set
   */
  isSubset(s) {
    if (s instanceof Set && this._count <= s.size()) {
      return this._isSetSubsetOf(s);
    }
    else if (s instanceof Set && this._count > s.size()) {
      return false;
    }
    else {
      throw new Error('.isSubset expects a set as a param');
    }
  }

  /**
   * @public
   * converts the set into an array
   * @returns {array}
   */
  toArray() {
    let elements = [];
    for (let el in this._elements) {
      if (this.contains(el)) {
        elements.push(isNaN(el) ? el : Number(el));
      }
    }
    return elements;
  }

  /**
   * @public
   * clears the set
   */
  clear() {
    this._init();
  }

  /**
   * @private
   * @param {Set} s
   * @param {string} type
   * @returns {Set}
   * @throws {Error}
   */
  _operate(s, type) {
    if (s instanceof Set) {
      return this[`_${type}Set`](s);
    }
    else {
      throw new Error(`.${type} expects a set as a param`);
    }
  }

  /**
   * @private
   * @param {Set} s
   * @returns {Set}
   */
  _unionSet(s) {
    let union = new Set();
    for (let el in this._elements) {
      if (this.contains(el)) {
        union.add(el);
      }
    }
    s.toArray().forEach((el) => {
      union.add(el);
    });
    return union;
  }

  /**
   * @private
   * @param {Set} s
   * @returns {Set}
   */
  _intersectSet(s) {
    let intersect = new Set();
    for (let el in this._elements) {
      if (this.contains(el) && s.contains(el)) {
        intersect.add(el);
      }
    }
    return intersect;
  }    

  /**
   * @private
   * @param {Set} s
   * @returns {Set}
   */
  _diffSet(s) {
    let diffSet = new Set();
    for (let el in this._elements) {
      if (this.contains(el) && !s.contains(el)) {
        diffSet.add(el);
      }  
    }
    return diffSet;
  }

  /**
   * @private
   * @param {Set} s
   * @returns {boolean}
   */
  _isSetSubsetOf(s) {
    for (let el in this._elements) {
      if (this.contains(el) && !s.contains(el)) {
        return false;
      }
    }
    return true;
  }

  /**
   * @private
   * inits the set properties
   */
  _init() {
    this._elements = {};
    this._count = 0;        
  }

}

module.exports = Set;