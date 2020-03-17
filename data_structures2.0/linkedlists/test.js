/* eslint-disable prefer-const */
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class MyLL {
  constructor() {
    this.head = null;
    this.tail = this.head;
    this.size = 0;
  }

  printNodes() {
    const nodesXS = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      nodesXS.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return nodesXS;
  }

  /**
   *
   * @param {number} data
   */
  // start
  prepend(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.size += 1;
      return this;
    }
  }

  // end
  /**
   *
   * @param {number} data
   */
  append(data) {
    const newNode = new Node(data);
    while (!this.head.next) {
      this.prepend(data);
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.size += 1;
    return this;
  }

  /**
   *
   * @param {number} index
   */
  get(index) {
    if (index > this.size || index < 0) return null;
    let counter = 0;
    let node = this.head;

    while (counter !== index) {
      node = node.next;
      counter++;
    }

    // console.log(node.data);
    return node;
  }

  /**
   *
   * @param {number} index
   * @param {number} data
   */
  insert(index, data) {
    if (index > this.size || index < 0) return null;
    let previousNode = this.get(index - 1);
    let newNode = new Node(data);
    let pointer = previousNode.next;

    previousNode.next = newNode;
    newNode.next = pointer;
    this.size += 1;

    return this;
  }

  deleteHead() {
    if (!this.head) return null;
    let temp = this.head;
    this.head = this.head.next;
    temp = null;
    return this;
  }

  /**
   *
   * @param {number} index
   */
  delete(index) {
    if (index <= 0) {
      this.deleteHead();
      return;
    }
    let prevNode = this.get(index - 1);
    let removedNode = prevNode.next;
    prevNode.next = removedNode.next;
    removedNode.next = prevNode;
    this.size -= 1;
    return this;
  }
}

const myLL = new MyLL();
myLL.prepend(5);
myLL.prepend(2);
myLL.append(1);
myLL.append(3);
// console.log(myLL.get(0));
myLL.insert(1, 99);
myLL.delete(0);
console.log(myLL.printNodes());
