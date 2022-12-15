class Node {
  constructor(value) {
    this.value = value;
    this.next = null;

  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
  }

  pop() {
    const removedValue = this.top.value;
    if (this.top) {
      this.top = this.top.next;
    }
    return removedValue;
  }

  peek() {
    return this.top.value;
  }

  isEmpty() {
    return this.top === null;
  }


}

module.exports = Stack;
