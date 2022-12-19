'uses strict';

class Node {
constructor(val) {
this.value = val;
this.left = null;
this.right = null;
}
}

function newNode(value) {
let node = new Node();
node.value = value;
node.left = null;
node.right = null;
return (node);
}

class Tree{
constructor(){
this.root = null;
}


function new Tree(node, value){
if (node === null)
return (newNode(data));
else {

if (value <= node.value)
node.left = insert(node.left, value);
else
node.right = insert(node.right, value);

return node;
}
}

function maxValue(node) {

let current = node;
while (current.right !== null)
current = current.right;
return (current.value);
};

let root = null;
root = insert(root, 2);
insert(root, 3);
insert(root, 5);
insert(root, 7);
insert(root, 8);
insert(root, 7);

return console.log('Max Value:', maxValue(root));
