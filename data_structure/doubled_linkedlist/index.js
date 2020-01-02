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

  /**
   *
   * @param {number} index
   * @returns {this}
   */
  get(index) {
    if (index < 0 || index >= this.size) return null;
    let middle = Math.floor(this.size / 2);
    if (index <= middle) {
      console.log('WORKING FROM START');
      let count = 0;
      let current = this.head;
      while (count !== index) {
        current = current.next;
        count += 1;
      }
      return current;
    }
    console.log('WORKING FROM END');
    let count = (this.size -= 1);
    let current = this.tail;
    while (count !== index) {
      current = current.prev;
      count -= 1;
    }
    return current;
  }

  /**
   *
   * @param {number} index
   * @param {string} data
   * @returns {boolean}
   */
  set(index, data) {
    let where = this.get(index);
    if (where !== null) {
      where.data = data;
      return true;
    }
    return false;
  }
}

const ll = new LinkedList();

ll.push('Harry');
ll.push('Malfoy');
ll.push('Harmione');
ll.push('Dumbledore');
ll.push('Tom Dolder');
ll.push('Lord Voldemort');

ll.unshift('Hagrid');

console.log(ll);
