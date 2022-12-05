'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
  }


  //this adds a node to the end of a linked list.
  append(value) {
    let node = new Node(value);


    if (!this.head) {
      this.head = node;
      return;
    }


    let current = this.head;

    while (current.next) {
      current = current.next;
    }
    current.next = node;

  }//TRAVERSING BELOW vVvVvVvVv + adding a new node to the end
  //logs value of each node
  traverse() {
    let current = this.head;

    while (current) {

      console.log(current.value);
      current = current.next;
    }
  }
  insert(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }
}




let list = new LinkedList();
list.append('a');
list.append('b');
list.append('c');
list.append('d');
list.append('e');

console.log(JSON.stringify(list));
list.traverse();
module.exports =
  LinkedList;
