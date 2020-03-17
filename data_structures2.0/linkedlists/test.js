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
}

const myLL = new MyLL();
myLL.prepend(5);
myLL.prepend(2);
myLL.append(1);
console.log(myLL.printNodes());
