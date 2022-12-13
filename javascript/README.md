

## Challenge Summary

Create a new class called pseudo queue.
Do not use an existing Queue.
Instead, this PseudoQueue class will implement our standard queue interface (the two methods listed below),
Internally, utilize 2 Stack instances to create and manage the queue
Methods:
enqueue
Arguments: value
Inserts a value into the PseudoQueue, using a first-in, first-out approach.
dequeue
Arguments: none
Extracts a ~https://projects.invisionapp.com/freehand/document/IPX1XQ4Dn


## Approach & Efficiency
Set a function as Queue
Instantiate a Node constructor for both a init
Set node value = assigned integer
Set next value to null.
Instantiate a class utilizing aforementioned constructor
set the top node to null as default.
Define the push value
set Node to equal default value.
Set that next Node to equal the top value.
Set the top node as current node.




## Solution

class Node {

  constructor(value) {

    this.value = value;

    this.next = null;

  }

}

class Stack {

  constructor() {

    this.top = null;

    this.count = 0;

  };

  push(value) {

    const node = new Node(value);

    node.next = this.top;

    this.top = node;

  }

  pop() {

    if (this.top === null) { return 'null'; }

    let temp = this.top;

    this.top = this.top.next;

    temp.next = null;

    return temp.value;

  }

}

class PseudoQueue {

  constructor() {

    this.front = null;

    this.back = null;

    this.s1 = new Stack;

    this.s2 = new Stack;

    this.count = 0;

  }

  enQueue(x) {

    if (this.s1.top) {

      this.s2.push(this.s1.pop());



    }



    this.s1.push(x);

    this.back = x;

    this.front = x;



    if (this.s2.top) {

      let temp = this.s2.top;

      this.s1.push(temp);

      this.front = temp;

    }

  }

  deQueue() {
    if (this.s1.top === null) {

      console.log("Queue is Empty");

      return;

    }

    if (this.s1.top.next === null) {

      this.back = null;

    }



    if (this.s1.top) {

      this.front = this.s1.top.next;

      return this.s1.pop();



    }

  }

};

let s3 = new PseudoQueue();

s3.enQueue(1);

s3.enQueue(2);

s3.enQueue(3);

console.log(s3.deQueue());

console.log(s3.deQueue());

console.log(s3.deQueue());
