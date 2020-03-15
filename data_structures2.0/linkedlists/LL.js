/* eslint-disable prefer-const */
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

  printList() {
    const listNodes = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      listNodes.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return listNodes;
  }

  append(data) {
    const node = new Node(data);
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

  prepend(data) {
    const node = new Node(data);
    if (!this.head.next) {
      this.head = node;
      this.tail = this.head;
    }
    node.next = this.head;
    this.head = node;
    this.length += 1;
    return this;
  }

  get(index) {
    if (index >= this.length || index < 0) return null;
    let counter = 0;
    let node = this.head;
    while (counter !== index) {
      node = node.next;
      counter += 1;
    }
    return node;
  }

  insert(index, data) {
    if (index > this.length || index < 0) return false;
    if (index === this.length) return !!this.append(data);
    if (index === 0) return !!this.prepend(data);
    const newNode = new Node(data);
    const previous = this.get(index - 1);
    const pointer = previous.next;
    previous.next = newNode;
    newNode.next = pointer;
    this.length += 1;
    return this;
  }

  delete(index) {
    let prev = this.get(index - 1);
    // let next = this.get(index + 1);
    let deletedNode = prev.next;
    prev.next = deletedNode.next;
    deletedNode.next = prev;
    this.length -= 1;
    return this;
    // return ['prev ', prev, 'next ', next];
  }
}

const myLinkedList = new LinkedList();
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);

console.log(myLinkedList.delete(1));
console.log(myLinkedList.printList());
