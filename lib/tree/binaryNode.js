'use strict';

class BinaryNode {

    constructor(value, left, right) {
        this.value = value;
        this.left = left || null;
        this.right = right || null;
    }

    /**
     * @public
     * @param {object} value
     */
    setValue(value) {
        this.value = value;
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
     * @param {BinaryNode} node
     */
    setLeft(node) {
        this.left = node;
    }

    /**
     * @public
     * @returns {BinaryNode}
     */
    getLeft() {
        return this.left;
    }

    /**
     * @public
     * @param {BinaryNode} node
     */
    setRight(node) {
        this.right = node;
    }

    /**
     * @public
     * @returns {BinaryNode}
     */
    getRight() {
        return this.right;
    }

}

module.exports = BinaryNode;
