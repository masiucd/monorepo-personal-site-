/**
 *
 * @param {string} data
 */
function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList2() {
  this.head = null;
  this.tail = null;
  this.size = 0;
}

const ll = new LinkedList2();

/**
 * @param {string} data
 * @returns {this}
 */

LinkedList2.prototype.insertAtEnd = function(data) {
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

LinkedList2.prototype.deleteAtEnd = function() {
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
LinkedList2.prototype.deleteAtStart = function() {
  if (this.size === 0 || !this.head) return undefined;
  const currentHead = this.head;
  this.head = currentHead.next;
  this.size -= 1;
  return currentHead;
};

/**
 *
 * @param {string} data
 * @returns {this}
 */
LinkedList2.prototype.insertAtStart = function(data) {
  const node = new Node(data);
  if (!this.head) {
    this.head = node;
    this.tail = this.head;
  }
  node.next = this.head;
  this.head = node;
  this.size += 1;
  return this;
};

/**
 *
 * @param {number} index
 * @returns {Node}
 */
LinkedList2.prototype.getAt = function(index) {
  if (index >= this.size || index < 0) return null;
  let current = this.head;
  let counter = 0;
  while (index !== counter) {
    current = current.next;
    counter += 1;
  }
  return current;
};

/**
 *
 * @param {number} index
 * @param {string} data
 * @returns {boolean}
 */
LinkedList2.prototype.setNewNode = function(index, data) {
  const targetNode = this.getAt(index);
  if (targetNode) {
    targetNode.data = data;
    return true;
  }
  return false;
};

ll.insertAtEnd('C');
ll.insertAtEnd('b');
ll.insertAtEnd('a');
ll.setNewNode(0, '*********!!!!');
console.log(ll);
