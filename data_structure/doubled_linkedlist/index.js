/* eslint-disable prefer-const */
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /**
   *
   * @param {string} data
   * @returns {this}
   */
  push(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // set the tai; right before the previous
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size += 1;
    return this;
  }

  /**
   * @returns {this}
   */
  pop() {
    if (!this.head) return null;
    const poppedNode = this.tail;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.size -= 1;
    return poppedNode;
  }

  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.size -= 1;
    return oldHead;
  }

  /**
   *
   * @param {string} data
   * @returns {this}
   */
  unshift(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size += 1;
    return this;
  }
}

const ll = new LinkedList();

ll.push('Harry');
ll.push('Malfoy');
ll.push('Harmione');
ll.unshift('Hagrid');
console.log(ll);
