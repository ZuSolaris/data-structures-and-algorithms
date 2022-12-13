const LinkedList = require('./linkedList');

let list = new LinkedList();




list.append('a');
// list.append('b');
// list.append('c');
// list.append('d');
// list.append('e');

console.log(list.toString());

console.log('kth final value', list.kthFromEnd(0));
