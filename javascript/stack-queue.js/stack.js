class Node {
  constructor(value) {
    this.value = value;
    this.next = null;

  }
}

class Stack {
  constructor(){
    this.top = null;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
  }

  pop(value) {
  }

  peek(){
    
  }

}
