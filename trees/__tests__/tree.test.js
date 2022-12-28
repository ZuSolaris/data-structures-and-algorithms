
const Tree = require('../tree');
const Node = require('../tree');
const BinarySearchTree = require ('../tree');
const add = require('../tree');


describe('Can successfully instatiate an empty tree', () => {
  it('Can successfully instantiate an empty tree', () => {
    const tree = new Tree(null);
    expect(tree.value).toBeNull();
  });
});


describe('Can successfully add a node to an empty tree', () => {
  it('Can successfully add a node to an empty tree', () => {
    const node = new Node(24);
    expect(node.value).toBe(24);
  });
});


describe('can successfully add a left child and right child properly to a node', () => {
  it('can successfully add a left child and right child properly to a node', () => {
    let add;
    let root = new BinarySearchTree(2);
    root = add(root, 5);
    root = add(root, 3);

    expect(root.value).toBe(2);
    expect(root.left).toBe(5);
    expect(root.right).toBe(3);
  });
});



