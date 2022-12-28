'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}



class Tree {
  constructor() {
    this.root = null;
  }

  preOrder() {  // THIS TRAVERSAL -- learn to traverse like with linked list.  make it muscle

    // recursive helper function
    const traverse = (node) => {
      // base case - DO THE THING
      console.log(node.value);

      // left and right recursive cases
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };
    // get the recursive party STARTED
    traverse(this.root);
  }

  inOrder() {
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      console.log(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
  }

  postOrder() {
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      console.log(node.value);
    };
    traverse(this.root);
  }
}

class BinarySearchTree extends Tree {
  add(v) {
    if (v < this.root.value) {
      if (this.root.left) {
        this.root.left.add(v);
      } else {
        this.root.left = new Node(v);
      }
    } else {
      if (this.root.right) {
        this.root.right.add(v);
      } else {
        this.root.right = new Node(v);
      }
    }
  }

  contains(v) {
    if (this.root.value === v) return true;
    if (v < this.root.value) {
      if (this.root.left)
        return this.root.left.contains(v);
      else
        return false;
    } else {
      if (this.root.right)
        return this.root.right.contains(v);
      else
        return false;
    }
  }
}

module.exports = (Tree, BinarySearchTree, Node);

