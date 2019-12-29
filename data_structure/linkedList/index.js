// @ts-nocheck
/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    (this.head = null), (this.tail = null), (this.length = 0);
  }

  insertAtEnd(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.length += 1;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
}

const ll = new LinkedList();
ll.insertAtEnd(5);
console.log(ll);
