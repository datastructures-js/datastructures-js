'use strict';

class Set {

    constructor() {
        this.init();
    }

    /**
     * @private
     * inits the set properties
     */
    init() {
        this.elements = {};
        this.count = 0;        
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
     * checks if the set is empty
     * @returns {boolean}
     */
    isEmpty() {
        return this.count === 0;
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
     * checks if the set contains an element
     * @param {(string|number|boolean)} element
     * @returns {number}
     */
    contains(element) {
        return this.elements[element] === true;
    }

    /**
     * @private
     * @param {Set} s
     * @returns {Set}
     */
    unionSet(s) {
        let union = new Set();
        for (let el1 in this.elements) {
            if (this.contains(el1)) {
                union.add(el1);
            }
        }
        for (let el2 of s.toArray()) {
            union.add(el2);
        }
        return union;
    }  

    /**
     * @public
     * joins the actual set with a given set
     * @param {Set} s
     * @returns {Set|Error}
     */
    union(s) {
        if (s instanceof Set) {
            return this.unionSet(s);
        }
        else {
            throw new Error('.union expects a set as a param');
        }
    }

    /**
     * @private
     * @param {Set} s
     * @returns {Set}
     */
    intersectSet(s) {
        let intersect = new Set();
        for (let el in this.elements) {
            if (this.contains(el) && s.contains(el)) {
                intersect.add(el);
            }
        }
        return intersect;
    }    

    /**
     * @public
     * intersects the actual set with a given set
     * @param {Set} s
     * @returns {Set|Error}
     */
    intersect(s) {
        if (s instanceof Set) {
            return this.intersectSet(s);
        }
        else {
            throw new Error('.intersect expects a set as a param');
        }
    }

    /**
     * @private
     * @param {Set} s
     * @returns {Set}
     */
    diffSet(s) {
        let diffSet = new Set();
        for (let el in this.elements) {
            if (this.contains(el) && !s.contains(el)) {
                diffSet.add(el);
            }  
        }
        return diffSet;
    }

    /**
     * @public
     * returns a set with elements that exists 
     * in the actual set but not in the given set
     * @param {Set} s
     * @returns {Set|Error}
     */
    diff(s) {
        if (s instanceof Set) {
            return this.diffSet(s);
        }
        else {
            throw new Error('.diff expects a set as a param');
        }
    }

    /**
     * @private
     * @param {Set} s
     * @returns {boolean}
     */
    isSetSubsetOf(s) {
        for (let el in this.elements) {
            if (this.contains(el) && !s.contains(el)) {
                return false;
            }
        }
        return true;
    }

    /**
     * @public
     * checks if the actual set is a subset of a given set
     * @param {Set} s
     * @returns {boolean|Error}
     */
    isSubset(s) {
        if (s instanceof Set && this.count <= s.size()) {
            return this.isSetSubsetOf(s);
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
        this.init();
    }

}

module.exports = Set;