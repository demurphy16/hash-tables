class Node {
  constructor(key, value) {
    this.data = [key, value];
    this.next = null;
  }
  get key() {
    return this.data[0];
  }
  get value() {
    return this.data[1];
  }
}

// note: this is a simpler LinkedList class than in the Linked List lesson
class LinkedList {
  constructor() {
    this.head = null;
  }
  add(key, value) {
    const newNode = new Node(key, value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let walker = this.head;
      while (walker.next) {
        if (walker.key === key) {
          walker.data[1] = value;
          return;
        }
        walker = walker.next;
      }
      if (walker.key === key) {
        walker.data[1] = value;
      } else {
        walker.next = newNode;
      }
    }
  }
  delete(key) {
    if (!this.head) {
      return false;
    } else if (this.head.key === key) {
      const oldHead = this.head;
      this.head = this.head.next;
      oldHead.next = null;
      return oldHead;
    }
    let walker = this.head;
    while (walker.next) {
      if (walker.next.key === key) {
        const targetNode = walker.next;
        walker.next = walker.next.next;
        targetNode.next = null;
        return targetNode;
      }
    }
    return false;
  }
  search(key) {
    if (!this.head) {
      return false;
    } else {
      let walker = this.head;
      while (walker) {
        if (walker.key === key) {
          return walker;
        }
        walker = walker.next;
      }
      return false;
    }
  }
}

module.exports = LinkedList