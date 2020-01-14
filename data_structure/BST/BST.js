// @ts-nocheck
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }
}

const tree = new BST();
tree.root = new Node(10);
tree.root.left = new Node(8);
tree.root.right = new Node(17);
tree.root.left.right = new Node(9);

console.log(tree);
