'use strict';

const { LinkedList } = require('./LinkedList');

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    let characters = key.split('');

    let asciiSum = characters.reduce((sum, character) => {
      return sum + character.charCodeAt(0);
    }, 0);


    let intialHash = asciiSum * 599;

    return intialHash % this.size;
  }
}

let table = new HashTable(1024);
console.log(table);
console.log(table.hash('Zoe'));
