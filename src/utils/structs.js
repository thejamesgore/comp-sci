class Node {
  constructor(value, next = null) {
    this.next = next
    this.value = value
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  append(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      return newNode
    }

    let current = this.head
    while (current.next) {
      current = current.next
    }
    current.next = newNode
    return newNode
  }

  remove(value) {
    if (!this.head) {
      return null
    }

    if (this.head.value === value) {
      const removedNode = this.head
      this.head = this.head.next
      return removedNode
    }

    let current = this.head
    while (current.next && current.next.value !== value) {
      current = current.next
    }

    if (current.next) {
      const removedNode = current.next
      current.next = current.next.next
      return removedNode
    }

    return null
  }

  toArray() {
    const elements = []
    let current = this.head
    while (current) {
      elements.push(current.value)
      current = current.next
    }
    return elements
  }
}

export { Node, LinkedList }
