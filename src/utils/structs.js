class Node {
  constructor(value, next = null, prev = null) {
    this.next = next
    this.prev = prev
    this.value = value
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  append(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      return newNode
    }

    this.tail.next = newNode
    newNode.prev = this.tail
    this.tail = newNode
    return newNode
  }

  prepend(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      return newNode
    }

    newNode.next = this.head
    this.head.prev = newNode
    this.head = newNode
    return newNode
  }

  insert(value, position) {
    if (position < 0) {
      throw new Error('Position must be a non-negative integer.')
    }

    const newNode = new Node(value)
    if (position === 0) {
      return this.prepend(value)
    }

    let current = this.head
    let previous = null
    let index = 0

    while (current && index < position) {
      previous = current
      current = current.next
      index++
    }

    if (index === position) {
      newNode.next = current
      newNode.prev = previous
      if (previous) {
        previous.next = newNode
      }
      if (current) {
        current.prev = newNode
      }
      if (!newNode.next) {
        this.tail = newNode
      }
      return newNode
    } else {
      throw new Error('Position out of bounds.')
    }
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

  remove(value) {
    if (!this.head) {
      return null
    }

    let current = this.head
    while (current && current.value !== value) {
      current = current.next
    }

    if (current) {
      if (current.prev) {
        current.prev.next = current.next
      }
      if (current.next) {
        current.next.prev = current.prev
      }
      if (current === this.head) {
        this.head = current.next
      }
      if (current === this.tail) {
        this.tail = current.prev
      }
      return current
    }

    return null // Node not found
  }

  pop() {
    if (!this.tail) {
      console.log('List is empty')
      return null
    }

    const poppedNode = this.tail
    if (this.tail.prev) {
      this.tail.prev.next = null
      this.tail = this.tail.prev
    } else {
      this.head = null
      this.tail = null
    }
    console.log('Popped node:', poppedNode.value)
    return poppedNode
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

  prepend(value) {
    const newNode = new Node(value)

    if (!this.head) {
      this.head = newNode
      return newNode
    }

    newNode.next = this.head
    this.head = newNode
    return newNode
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

  pop() {
    if (!this.head) {
      return null
    }

    if (!this.head.next) {
      const poppedNode = this.head
      this.head = null
      return poppedNode
    }

    let current = this.head
    while (current.next && current.next.next) {
      current = current.next
    }

    const poppedNode = current.next
    current.next = null
    return poppedNode
  }

  insert(value, position) {
    if (position < 0) {
      throw new Error('Position must be a non-negative integer.')
    }

    const newNode = new Node(value)

    if (position === 0) {
      return this.prepend(value)
    }

    let current = this.head
    let previous = null
    let index = 0

    while (current && index < position) {
      previous = current
      current = current.next
      index++
    }

    if (index === position) {
      newNode.next = current
      if (previous) {
        previous.next = newNode
      }
      return newNode
    } else {
      throw new Error('Position out of bounds.')
    }
  }
}

class Queue {
  constructor() {
    this.list = new DoublyLinkedList()
  }

  enqueue(value) {
    this.list.append(value)
  }

  dequeue() {
    if (!this.list.head) {
      return null
    }
    const dequeuedValue = this.list.head.value
    this.list.remove(dequeuedValue)
    return dequeuedValue
  }

  peek() {
    return this.list.head ? this.list.head.value : null
  }

  isEmpty() {
    return this.list.head === null
  }

  toArray() {
    return this.list.toArray()
  }
}

export { Node, LinkedList, DoublyLinkedList, Queue }
