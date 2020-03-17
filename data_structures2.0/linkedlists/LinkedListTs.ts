interface INode {
  data?: INode | number | null;
  next?: INode | null;
}
class Node_ {
  data: number | INode;

  next: INode | null;

  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}

class MyLinkedList {
  head: INode | null;

  tail: INode | null;

  size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  showNodes() {
    const nodesList = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      nodesList.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return nodesList;
  }

  append(data) {
    const newNode = new Node_(data);
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

  prepend(data) {
    const newNode = new Node_(data);
    if (!this.head.next) {
      this.append(newNode);
    }
    newNode.next = this.head;
    this.head = newNode;
    this.size += 1;
    return this;
  }

  get(index) {
    if (index > this.size || index < 0) return undefined;
    let node = this.head;
    let counter = 0;
    while (counter !== index) {
      node = node.next;
      counter += 1;
    }
    return node;
  }

  insert(data, index) {
    const newNode = new Node_(data);
    const prev = this.get(index - 1);
    console.log(prev);
    const pointer = prev.next;
    prev.next = newNode;
    newNode.next = pointer;
    this.size += 1;
    return this;
  }
}

const ll = new MyLinkedList();
ll.append(6);
ll.append(3);
ll.append(99);
ll.prepend(5);
ll.prepend(1);
ll.insert(77, 2);
console.log(ll.showNodes());
