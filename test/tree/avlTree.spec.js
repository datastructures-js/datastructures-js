'use strict';

const expect  = require('chai').expect;
const AvlNode = require('../../lib/tree/avlNode');
const AvlTree = require('../../lib/tree/avlTree');

describe('avlTree tests', () => {

  let avl = new AvlTree(AvlNode);

  describe('.insert(value)', () => {
    it('should insert values to the tree and maintain it balanced', () => {
      avl.insert(50);
      avl.insert(80);
      avl.insert(90);
      /*
        verify left rotation

        50  (balance = -2)
         \
          80
           \
            90

         rotates to ==>

          80
         /  \
        50  90

      */
      expect(avl.root().getValue()).to.equal(80);
      expect(avl.root().getRight().getValue()).to.equal(90);
      expect(avl.root().getLeft().getValue()).to.equal(50);


      avl.insert(40);
      avl.insert(30);
      /*
        verify right rotation

                        80
                       /  \
        (balance = 2) 50  90
                     /
                    40
                   /
                  30

        rotates to ==>

                  80
                 /  \
                40  90
               /  \
              30  50

      */
      expect(avl.root().getValue()).to.equal(80);
      expect(avl.root().getRight().getValue()).to.equal(90);
      expect(avl.root().getLeft().getValue()).to.equal(40);
      expect(avl.root().getLeft().getRight().getValue()).to.equal(50);
      expect(avl.root().getLeft().getLeft().getValue()).to.equal(30);

      avl.insert(20);
      /*
        verify right rotation

               80 (balance = 2)
              /  \
             40  90
            /  \
           30  50
          /
         20

         rotates to ==>

               40
              /  \
             30  80
            /   /  \
           20  50  90

      */
      expect(avl.root().getValue()).to.equal(40);
      expect(avl.root().getLeft().getValue()).to.equal(30);
      expect(avl.root().getLeft().getLeft().getValue()).to.equal(20);
      expect(avl.root().getRight().getValue()).to.equal(80);
      expect(avl.root().getRight().getRight().getValue()).to.equal(90);
      expect(avl.root().getRight().getLeft().getValue()).to.equal(50);


      avl.insert(35);
      avl.insert(10);
      avl.insert(15); 
      /*       
        verify left-right rotation

                 40
              /      \
             30      80
            /  \    /  \
           20   35 50  90
          /
         10
          \
          15

         rotates to ==>

                 40
              /      \
             30      80
            /  \    /  \
           15   35 50  90
          /  \
         10  20
    
      */
      expect(avl.root().getValue()).to.equal(40);
      expect(avl.root().getRight().getValue()).to.equal(80);
      expect(avl.root().getRight().getRight().getValue()).to.equal(90);
      expect(avl.root().getRight().getLeft().getValue()).to.equal(50);
      expect(avl.root().getLeft().getValue()).to.equal(30);
      expect(avl.root().getLeft().getRight().getValue()).to.equal(35);
      expect(avl.root().getLeft().getLeft().getValue()).to.equal(15);
      expect(avl.root().getLeft().getLeft().getRight().getValue()).to.equal(20);
      expect(avl.root().getLeft().getLeft().getLeft().getValue()).to.equal(10);

      avl.insert(100);
      avl.insert(95);
      /*           
        verify right-left rotation

                 40
              /      \
             30      80
            /  \    /  \
           15   35 50  90
          /  \           \
         10  20          100
                        /
                       95

         rotates to ==>

                 40
              /      \
             30      80
            /  \    /  \
           15   35 50  95
          /  \        /  \
         10  20      90  100
      */
      expect(avl.root().getValue()).to.equal(40);
      expect(avl.root().getRight().getValue()).to.equal(80);
      expect(avl.root().getRight().getRight().getValue()).to.equal(95);
      expect(avl.root().getRight().getRight().getRight().getValue()).to.equal(100);
      expect(avl.root().getRight().getRight().getLeft().getValue()).to.equal(90);
      expect(avl.root().getRight().getLeft().getValue()).to.equal(50);
      expect(avl.root().getLeft().getValue()).to.equal(30);
      expect(avl.root().getLeft().getRight().getValue()).to.equal(35);
      expect(avl.root().getLeft().getLeft().getValue()).to.equal(15);
      expect(avl.root().getLeft().getLeft().getRight().getValue()).to.equal(20);
      expect(avl.root().getLeft().getLeft().getLeft().getValue()).to.equal(10);

    });
  });

  describe('.remove(value)', () => {
    it('should remove values from the tree and maintain it balanced', () => {
      /*           
        tree is now like
                 40
              /      \
             30      80
            /  \    /  \
           15   35 50  95
          /  \        /  \
         10  20      90  100

         let's remove and verify the auto balancing feature
      */

      avl.remove(35);
      /*           
        verify left-right rotation
                           40
                         /    \
        (balance = 2)  30      80
                      /       /  \
                     15      50  95
                    /  \        /  \
                   10  20      90  100

         rotates to ==>

                 40
               /     \
              15     80
             /  \   /  \
            10  30 50  95
               /      /  \
              20      90  100

      */
      expect(avl.root().getValue()).to.equal(40);
      expect(avl.root().getRight().getValue()).to.equal(80);
      expect(avl.root().getRight().getRight().getValue()).to.equal(95);
      expect(avl.root().getRight().getRight().getRight().getValue()).to.equal(100);
      expect(avl.root().getRight().getRight().getLeft().getValue()).to.equal(90);
      expect(avl.root().getRight().getLeft().getValue()).to.equal(50);
      expect(avl.root().getLeft().getValue()).to.equal(15);
      expect(avl.root().getLeft().getRight().getValue()).to.equal(30);
      expect(avl.root().getLeft().getRight().getLeft().getValue()).to.equal(20);
      expect(avl.root().getLeft().getLeft().getValue()).to.equal(10);

     avl.remove(10);
      /*           
        verify right-left rotation
                            40
                         /      \
        (balance = -2)  15      80
                          \    /  \
                          30  50  95
                         /       /  \
                        20      90  100

         rotates to ==>

                 40
               /     \
              20     80
             /  \   /  \
            15  30 50  95
                      /  \
                     90  100
      */
      expect(avl.root().getValue()).to.equal(40);
      expect(avl.root().getRight().getValue()).to.equal(80);
      expect(avl.root().getRight().getRight().getValue()).to.equal(95);
      expect(avl.root().getRight().getRight().getRight().getValue()).to.equal(100);
      expect(avl.root().getRight().getRight().getLeft().getValue()).to.equal(90);
      expect(avl.root().getRight().getLeft().getValue()).to.equal(50);
      expect(avl.root().getLeft().getValue()).to.equal(20);
      expect(avl.root().getLeft().getRight().getValue()).to.equal(30);
      expect(avl.root().getLeft().getLeft().getValue()).to.equal(15);

      avl.remove(90);
      avl.remove(50);

      /*           
        verify left rotation
                   40
                 /     \
                20     80
               /  \      \
              15  30     95
                           \
                           100

         rotates to ==>

                  40
               /      \
              20      95
             /  \    /  \
            15  30  80  100
  
      */
      expect(avl.root().getValue()).to.equal(40);
      expect(avl.root().getRight().getValue()).to.equal(95);
      expect(avl.root().getRight().getRight().getValue()).to.equal(100);
      expect(avl.root().getRight().getLeft().getValue()).to.equal(80);
      expect(avl.root().getLeft().getValue()).to.equal(20);
      expect(avl.root().getLeft().getRight().getValue()).to.equal(30);
      expect(avl.root().getLeft().getLeft().getValue()).to.equal(15);

      avl.remove(30);
      avl.remove(80);
      avl.remove(100);
      avl.remove(95);
      /*           
        verify right rotation

                40
               /  
              20
             /  
            15      

         rotates to ==>

              20
             /  \  
            15  40  
      */
    });
  });

});