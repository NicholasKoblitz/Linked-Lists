/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);

    if(this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.length = this.length + 1;
    }
    else if(this.tail !== null) {
      this.tail.next = newNode;
      this.length = this.length + 1;
    }

    this.tail = newNode;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);

    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    }
    else if(this.head) {
      newNode.next = this.head;
      this.length = this.length + 1;
    }

    this.head = newNode;
  }

  /** pop(): return & remove last item. */

  pop() {
    let currentNode = this.head;
    let preNode;

    while(currentNode.next) {
      preNode = currentNode;
      currentNode = currentNode.next;
    }

    if(preNode) {
      preNode.next = null;
      this.tail = preNode;
      this.length = this.length - 1;
      return currentNode.val;
    }
    else if(!preNode) {
      this.head = null;
      this.tail = null;
      this.length = this.length - 1;
      return currentNode.val;
    }
   
  }

  /** shift(): return & remove first item. */

  shift() {
    if(this.head.next) {
      let head = this.head;
      this.head = head.next;
      this.length = this.length - 1;
      return head.val;
    }
    else if(!this.head.next) {
      let shiftVal = this.head.val;
      this.head = null;
      this.tail = null;
      this.length = this.length - 1;
      return shiftVal;
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currentNode = this.head;
    
    for(let i = 0; i < idx; i++) {
      currentNode = currentNode.next;
    }
    return currentNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let newNode = new Node(val);
    let currentNode = this.head;
    let preNode;
    for(let i = 0; i < idx; i++) {
      preNode = currentNode;
      currentNode = currentNode.next;
    }

    if(preNode) {
      preNode.next = newNode;
      // newNode.next = currentNode;
      // this.length = this.length + 1;
    }
    else if(!preNode) {
      this.head = newNode;
      this.head.next = currentNode;
    }

    if(idx === this.length - 1) {
      this.tail = newNode
    }

    
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let newNode = new Node(val);
    let currentNode = this.head;
    let preNode;
    for(let i = 0; i < idx; i++) {
      preNode = currentNode;
      currentNode = currentNode.next;
    }
    if(preNode) {
      preNode.next = newNode;
      newNode.next = currentNode;
      this.length = this.length + 1;
    }
    else if(!preNode) {
      this.head = newNode;
      this.head.next = currentNode;
      this.length = this.length + 1;
    }

    if(idx === this.length - 1) {
      this.tail = currentNode
      if(!this.tail) {
        this.tail = newNode;
      }
    }
    

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    // let newNode = new Node(val);
    let currentNode = this.head;
    let preNode;
    for(let i = 0; i < idx; i++) {
      preNode = currentNode;
      currentNode = currentNode.next;
    }

    if(preNode) {
      preNode.next = currentNode.next;
      this.length = this.length - 1;
      return currentNode.val;
    }
    else if(!preNode) {
      let removeVal = this.head.val
      this.head = null;
      this.tail = null;
      this.length = this.length - 1;
      return removeVal;
    }

  }

  /** average(): return an average of all values in the list */

  average() {
    if(!this.head) {
      return 0
    }

    let currentNode = this.head;
    let sum = 0;

    while(currentNode) {
      sum = currentNode.val + sum;
      currentNode = currentNode.next;
    }
    console.log(this.length)
    return sum / this.length;

  }

}

module.exports = LinkedList;
