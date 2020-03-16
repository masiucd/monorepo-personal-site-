interface INode {
  data?: INode | number | null;
  next?: INode | null;
}
class Node_ {
  data: number;

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
    } else {
      this.head.next = newNode;
      this.tail = newNode;
    }
    this.size += 1;
    return this;
  }
}

const ll = new MyLinkedList();
ll.append(6);
ll.append(2);
ll.append(3);
console.log(ll.showNodes());
