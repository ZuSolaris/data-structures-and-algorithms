class Node {
constructor(val) {
this.data = val;
this.left = null;
this.right = null;
 }
}

var root = null;

function currentBranchLevel() {
let h = height(root);
let i;
for (i = 1; i <= h; i++);

function height(root) {
if (root == null)
return 0;
else {
let leftHeight = height(root.left);
let rightHeight = height(root.right);

if (leftHeight > rightheight)
return (leftHeight +1);
else
return (rightHeight +1);
  }
}

function currentLevel(root, level) {
if (root == null)

return
