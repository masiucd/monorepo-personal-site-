class Node {
  data: number;

  next = null;

  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  head: null;

  tail: null;

  size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
}
