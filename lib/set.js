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
     * @public
     * joins the actual set with a given set
     * @param {Set} s
     * @returns {Set}
     */
    union(s) {
        if (s instanceof Set) {
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
        else {
            throw new Error('.union expects a set as a param');
        }
    }

    /**
     * @public
     * intersects the actual set with a given set
     * @param {Set} s
     * @returns {Set}
     */
    intersect(s) {
        if (s instanceof Set) {
            let intersect = new Set();
            for (let el in this.elements) {
                if (this.contains(el) && s.contains(el)) {
                    intersect.add(el);
                }
            }
            return intersect;
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
     */
    diff(s) {
        if (s instanceof Set) {
            let diffSet = new Set();
            for (let el in this.elements) {
                if (this.contains(el) && !s.contains(el)) {
                    diffSet.add(el);
                }  
            }
            return diffSet;
        }
        else {
            throw new Error('.diff expects a set as a param');
        }
    }

    /**
     * @public
     * checks if the actual set is a subset of a given set
     * @param {Set} s
     * @returns {Set}
     */
    isSubset(s) {
        if (s instanceof Set && this.count <= s.size()) {
            for (let el in this.elements) {
                if (this.contains(el) && !s.contains(el)) {
                    return false;
                }
            }
            return true;
        }
        else if (s instanceof Set && this.count > s.size()) {
            return false;
        }
        else if (!(s instanceof Set)) {
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
            if (this.contains(el)) elements.push(isNaN(el) ? el : Number(el));
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