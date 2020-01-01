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
}

const ll = new LinkedList();

ll.push('apa');
ll.push('banan');

console.log(ll);
