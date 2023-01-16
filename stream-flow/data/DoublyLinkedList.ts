import { Node } from "./Node";

export class DoublyLinkedList<T> {
  head: Node<T> | null;
  tail: Node<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(value: T) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  addToTail(value: T) {
    const newNode = new Node(value);
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  removeHead(): T | null {
    if (!this.head) return null;
    const removed = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removed.next as Node<T>;
      this.head.prev = null;
    }
    return removed.value;
  }

  removeTail(): T | null {
    if (!this.tail) return null;
    const removed = this.tail;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removed.prev as Node<T>;
      this.tail.next = null;
    }
    return removed.value;
  }

  insertAfter(node: Node<T> | null, value: T): void {
    if (!node) return;
    const newNode = new Node<T>(value);
    newNode.prev = node;
    newNode.next = node.next;
    if (node.next) node.next.prev = newNode;
    node.next = newNode;
    if (node === this.tail) this.tail = newNode;
  }

  insertBefore(node: Node<T> | null, value: T): void {
    if (!node) return;
    const newNode = new Node<T>(value);
    newNode.prev = node.prev;
    newNode.next = node;
    if (node.prev) node.prev.next = newNode;
    node.prev = newNode;
    if (node === this.head) this.head = newNode;
  }
}
