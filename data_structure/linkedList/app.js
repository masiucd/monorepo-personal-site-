function Node(data) {
  this.data = data;
  this.next = null;
}

function LL() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

const ll = new LL();

LL.prototype.insertAtEnd = function(data) {
  const node = new Node(data);
  if (!this.head) {
    this.head = node;
    this.tail = this.head;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
  this.length += 1;
  return this;
};

ll.insertAtEnd(6);

console.log(ll);
