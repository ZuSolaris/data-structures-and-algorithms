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

  // inserts value at the head of LinkedList
  insert(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  // checks for value in all nodes of LinkedList
  // returns boolean
  includes(value) {
    let current = this.head;
    while (current.next) {
      if (current.value === value) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }

  // return a string representation of the values in the LinkedList
  toString() {
    let current = this.head;
    let string = '';
    while (current) {
      let valueStr = `{ ${current.value} } -> `;
      string = string + valueStr;
      current = current.next;
    }
    string = string + 'NULL';
    return string;
  }

  // appends value at the end of the LinkedList
  append(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  // inserts a value before the first matching targetValue
  insertBefore(targetValue, value) {
    let node = new Node(value);

    let current = this.head;
    if (current.value === targetValue) {
      node.next = current;
      this.head = node;
    } else {
      while (current) {
        if (current.next.value === targetValue) {
          node.next = current.next;
          current.next = node;
          return;
        } else {
          current = current.next;
        }
      }
    }
  }

  // inserts a value after the first matching targetValue
  insertAfter(targetValue, value) {
    let node = new Node(value);
    let current = this.head;
    while (current) {
      if (current.value === targetValue) {
        node.next = current.next;
        current.next = node;
        return;
      } else {
        current = current.next;
      }
    }
  }

  // finds the node's value that is k places from the tail
  kthFromEnd(k) {
    let current = this.head;
    let indexCounter = 0; // changed from lengthCounter for accuracy

    // get to end
    while (current.next) {
      current = current.next;
      indexCounter = indexCounter + 1;

    }
    console.log('indexCounter:', indexCounter);
    current = this.head;
    let kIndex = indexCounter - k;
    let currentIndex = 0;

    if (kIndex < 0) {
      throw new RangeError('k is out of range');
    }

    console.log('currentIndex', currentIndex);
    console.log('kIndex', kIndex);

    while (currentIndex < kIndex) {
      console.log('Current value', current.value);
      console.log('currentIndex', currentIndex);
      console.log('kIndex', kIndex);
      current = current.next;
      currentIndex += 1;
    }

    return current.value;
  }
}


module.exports = LinkedList;
