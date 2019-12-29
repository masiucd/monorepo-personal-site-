/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
class Node {
  /**
   *
   * @param {string} data
   */
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    (this.head = null), (this.tail = null), (this.size = 0);
  }

  /**
   *
   * @param {string} data
   * @returns {this}
   */
  insertAtEnd(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size += 1;
    return this;
  }

  /**
   * @returns {void}
   */
  traverse() {
    let curr = this.head;
    while (curr) {
      console.log('Iam node with the value of ', curr.data);
      curr = curr.next;
      console.log('end of the list');
    }
  }

  /**
   * @returns {this}
   */
  removeAtEnd() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.size -= 1;
    if (this.size === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  /**
   * @returns {this}
   */
  removeFromStart() {
    if (!this.head) return undefined;
    const current = this.head;
    this.head = current.next;
    this.size -= 1;
    return current;
  }

  /**
   *
   * @param {string} data
   * @returns {this}
   */
  addToStart(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.size += 1;
    return this;
  }

  /**
   *
   * @param {number} index
   * @returns {this}
   */
  get(index) {
    if (index >= this.size || index < 0) return null;
    let counter = 0;
    let node = this.head;
    while (counter !== index) {
      node = node.next;
      counter += 1;
    }
    return node;
  }
}

const ll = new LinkedList();
ll.insertAtEnd('hello');
ll.insertAtEnd('I like bananas');
ll.insertAtEnd('keep it real');

console.log(ll);
