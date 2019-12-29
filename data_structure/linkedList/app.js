/**
 *
 * @param {number} data
 */
function Node(data) {
  this.data = data;
  this.next = null;
}

function LL() {
  this.head = null;
  this.tail = null;
  this.size = 0;
}

const ll = new LL();

/**
 * @param {number} data
 * @returns {this}
 */

LL.prototype.insertAtEnd = function(data) {
  const node = new Node(data);
  if (!this.head) {
    this.head = node;
    this.tail = this.head;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
  this.size += 1;
  return this;
};

LL.prototype.deleteAtEnd = function() {
  if (!this.head) return undefined;
  let curr = this.head;
  let newTail = curr;
  while (curr.next) {
    newTail = curr;
    curr = curr.next;
  }
  this.tail = newTail;
  this.tail.next = null;
  this.size -= 1;
  if (this.size === 0) {
    this.head = null;
    this.tail = null;
  }
};

/**
 * @returns {this}
 */
LL.prototype.deleteAtStart = function() {
  if (this.size === 0 || !this.head) return undefined;
  const currentHead = this.head;
  this.head = currentHead.next;
  this.size -= 1;
  return currentHead;
};

ll.insertAtEnd(6);
ll.insertAtEnd(1);
ll.insertAtEnd(2);
// ll.deleteAtStart();
// ll.deleteAtStart();
// ll.insertAtEnd(1);
console.log(ll);
