class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.head.next = node;
      this.tail = node;
    }
    this.length += 1;
    return this;
  }

  prepend(value) {
    const node = new Node(value);
    if (!this.head.next) {
      this.head = node;
      this.tail = this.head;
    }
    node.next = this.head;
    this.head = node;
    this.length += 1;
    return this;
  }
}

const myLinkedList = new LinkedList();
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
console.log(myLinkedList);
