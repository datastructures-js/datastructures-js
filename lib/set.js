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
    return this.count;
  }

  /**
   * @public
   * checks if the set is empty
   * @returns {boolean}
   */
  isEmpty() {
    return this.count === 0;
  }

  /**
   * @public
   * checks if the set contains an element
   * @param {(string|number|boolean)} element
   * @returns {number}
   */
  contains(element) {
    return this.elements[element] === true;
  } 

  /**
   * @public
   * adds an element to the set
   * @param {(string|number|boolean)} element
   */
  add(element) {
    if (!this.elements[element]) {
      this.elements[element] = true;
      this.count++;
    }
  }

  /**
   * @public
   * removes an element from the set
   * @param {(string|number|boolean)} element
   */
  remove(element){ 
    if (this.elements[element]) {
      this.elements[element] = false;
      this.count--;
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
    if (s instanceof Set) {
      return this._unionSet(s);
    }
    else {
      throw new Error('.union expects a set as a param');
    }
  }

  /**
   * @public
   * intersects the actual set with another set
   * @param {Set} s
   * @returns {Set}
   * @throws {Error} - when s type is not Set
   */
  intersect(s) {
    if (s instanceof Set) {
      return this._intersectSet(s);
    }
    else {
      throw new Error('.intersect expects a set as a param');
    }
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
    if (s instanceof Set) {
      return this._diffSet(s);
    }
    else {
      throw new Error('.diff expects a set as a param');
    }
  }

  /**
   * @public
   * checks if the actual set is a subset of another set
   * @param {Set} s
   * @returns {boolean}
   * @throws {Error} - when s type is not Set
   */
  isSubset(s) {
    if (s instanceof Set && this.count <= s.size()) {
      return this._isSetSubsetOf(s);
    }
    else if (s instanceof Set && this.count > s.size()) {
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
    for (let el in this.elements) {
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
   * @returns {Set}
   */
  _unionSet(s) {
    let union = new Set();
    for (let el in this.elements) {
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
    for (let el in this.elements) {
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
    for (let el in this.elements) {
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
    for (let el in this.elements) {
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
    this.elements = {};
    this.count = 0;        
  }

}

module.exports = Set;