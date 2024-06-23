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
    // We create a new node that will be appeneded to the linked list
    const newNode = new Node(value)
    // If there's no linked list yet there will be no head, so we create a new node and point the head towards it. Then we will have one node.
    if (!this.head) {
      this.head = newNode
      return newNode
    }

    // If we already have at least one or more nodes... we create a pointer that will travel along the linked list.
    // It will point towards the top of the Linked list at the head as we can only guarentee this nodes position.
    let current = this.head

    // We iterate from node to node until we reach one which points to null. This will be the last node
    while (current.next) {
      current = current.next
    }
    // then we add the new node to the linked list by pointing the last node of the list to the new node.
    current.next = newNode

    // we then return the new node
    return newNode
  }

  //   Helper function to convert LL into array for react.
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

export default { Node, LinkedList }
